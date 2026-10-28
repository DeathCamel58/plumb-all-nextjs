'use client';

import React, { useState, useRef, FormEvent, ReactNode } from "react";
import {RecaptchaWrapper, getRecaptchaToken} from "@/components/RecaptchaWrapper";
import { getClickIds } from "@/lib/clickIds";

// Custom React components
interface FormProps {
  onSubmit: (e: FormEvent) => void;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, children, className, id }) => {
  return (
    <form onSubmit={onSubmit} className={className} id={id}>
      {children}
    </form>
  );
};

interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  checked?: boolean;
  label?: string;
  labelClassName?: string;
  labelAfter?: boolean;
  onDarkBackground?: boolean;
  autocomplete?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  value,
  onChange,
  className,
  placeholder,
  required,
  checked,
  label,
  labelClassName,
  labelAfter = false,
  onDarkBackground = false,
  autocomplete,
}) => {
  const inputElement = (
    <input
      type={type}
      id={id}
      name={name}
      value={typeof value === 'string' ? value : undefined}
      checked={type === 'checkbox' ? checked : undefined}
      onChange={onChange}
      className={`${className} ${onDarkBackground && type !== 'checkbox' ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : ''}`}
      placeholder={placeholder}
      required={required}
      autoComplete={autocomplete}
    />
  );

  if (!label) {
    return inputElement;
  }

  return (
    <>
      {!labelAfter && (
        <label htmlFor={id} className={`${labelClassName} ${onDarkBackground ? 'text-white' : ''}`}>
          {label}
        </label>
      )}
      {inputElement}
      {labelAfter && (
        <label htmlFor={id} className={`${labelClassName} ${onDarkBackground ? 'text-white' : ''}`}>
          {label}
        </label>
      )}
    </>
  );
};

interface TextAreaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  label?: string;
  labelClassName?: string;
  onDarkBackground?: boolean;
  autocomplete?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  value,
  onChange,
  className,
  placeholder,
  required,
  rows,
  label,
  labelClassName,
  onDarkBackground = false,
  autocomplete,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={`${labelClassName} ${onDarkBackground ? 'text-white' : ''}`}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${className} ${onDarkBackground ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : ''}`}
        placeholder={placeholder}
        required={required}
        rows={rows}
        autoComplete={autocomplete}
      />
    </>
  );
};

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  className,
  disabled,
  children,
}) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

interface FormGroupProps {
  children: ReactNode;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  website: string; // Honeypot
  message: string;
  sms: boolean;
}

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  website: "",
  message: "",
  sms: false,
};

/**
 * Records the lead in GA4. The Google tag (loaded by GTM) reads gtag commands
 * from the dataLayer, and they must be pushed as an `arguments` object.
 * No contact details are sent.
 */
function trackLead() {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  const dataLayer = w.dataLayer;
  function gtag(...args: unknown[]) {
    void args;
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  }
  gtag("event", "generate_lead", { form_name: "contact_form" });
}

interface ContactFormProps {
  onDarkBackground?: boolean;
}

export default function ContactForm({ onDarkBackground = true }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  // Blocks repeat clicks right away, before the sending state re-renders
  const inFlight = useRef(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value, type} = e.target;
    const checked = 'checked' in e.target ? e.target.checked : false;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot
    if (formData.website) return;

    // One submission at a time. The reCAPTCHA token and the upload take a few
    // seconds, and repeat clicks were sending the same lead several times.
    if (inFlight.current || submitted) return;
    inFlight.current = true;
    setSending(true);
    setFailed(false);

    try {
      // Get a fresh recaptcha token now: tokens expire two minutes after they're made
      const recaptchaToken = await getRecaptchaToken('contact_form');

      // Update formData with the recaptcha token, and any Google Ads click IDs
      // from the landing page so the lead can be tied back to its ad click
      const submissionData = {
        ...formData,
        recaptchaToken,
        ...getClickIds(),
      };

      const response = await fetch("https://integration.plumb-all.com/website/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
      if (!response.ok) {
        throw new Error(`Contact form returned ${response.status}`);
      }
      setSubmitted(true);
      trackLead();
    } catch (err) {
      console.error("Form submission failed", err);
      // Let them try again, and give them the phone number in the meantime
      setFailed(true);
      inFlight.current = false;
    } finally {
      setSending(false);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="relative space-y-4 text-left"
      id="contactForm"
    >
      <RecaptchaWrapper action="contact_form" />

      {submitted ? (
        <FormGroup className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white rounded-lg z-10">
          <h3 className="text-xl font-semibold text-center">
            We’ll get in touch soon!
          </h3>
        </FormGroup>
      ) : null}

      <FormGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormGroup>
          <Input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Your Name"
            label="Name *"
            labelClassName="block text-sm font-medium"
            onDarkBackground={onDarkBackground}
            autocomplete="name"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            placeholder="info@plumb-all.com"
            label="Email"
            labelClassName="block text-sm font-medium"
            onDarkBackground={onDarkBackground}
            autocomplete="email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            placeholder="844-758-6225"
            label="Phone *"
            labelClassName="block text-sm font-medium"
            onDarkBackground={onDarkBackground}
            autocomplete="tel"
          />
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          placeholder="218 N McDonough St, Jonesboro, GA"
          label="Address"
          labelClassName="block text-sm font-medium"
          onDarkBackground={onDarkBackground}
          autocomplete="address-line1 address-level2 address-level1 postal-code"
        />
      </FormGroup>

      {/* Honeypot field */}
      <FormGroup className="hidden">
        <Input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          label="Honey"
          onDarkBackground={onDarkBackground}
          autocomplete="off"
        />
      </FormGroup>

      <FormGroup>
        <TextArea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
          placeholder="I'm having a problem with ..."
          label="Message *"
          labelClassName="block text-sm font-medium"
          onDarkBackground={onDarkBackground}
          autocomplete="off"
        />
      </FormGroup>

      <FormGroup className="flex items-center space-x-2">
        <Input
          type="checkbox"
          id="sms"
          name="sms"
          checked={formData.sms}
          onChange={handleChange}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          value={formData.sms}
          label="I consent to receive follow-up and informational text messages from Plumb-All related to my service request. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out."
          labelClassName="text-sm"
          labelAfter
          onDarkBackground={onDarkBackground}
          autocomplete="off"
          required
        />
      </FormGroup>

      {failed ? (
        <p role="alert" className={`text-sm ${onDarkBackground ? 'text-red-300' : 'text-red-700'}`}>
          Sorry, your message didn&rsquo;t go through. Please try again, or call us at{" "}
          <a href="tel:+17709143877" className="underline font-semibold">(770) 914-3877</a>.
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={sending || submitted}
        className="inline-block background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition disabled:opacity-60 disabled:cursor-wait"
      >
        {sending ? "Sending…" : "Submit"}
      </Button>
    </Form>
  );
}
