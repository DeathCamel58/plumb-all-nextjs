'use client';

import React, { useState, FormEvent, ReactNode } from "react";
import {RecaptchaWrapper} from "@/components/RecaptchaWrapper";

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
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  className,
  children,
}) => {
  return (
    <button type={type} onClick={onClick} className={className}>
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
  sms: true,
};

interface ContactFormProps {
  onDarkBackground?: boolean;
}

export default function ContactForm({ onDarkBackground = true }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [submitted, setSubmitted] = useState(false);

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

    // Get the recaptcha token from the hidden input field
    const recaptchaTokenInput = document.getElementById('recaptchaToken') as HTMLInputElement;
    const recaptchaToken = recaptchaTokenInput ? recaptchaTokenInput.value : '';

    // Update formData with the recaptcha token
    const submissionData = {
      ...formData,
      recaptchaToken
    };

    try {
      await fetch("https://integration.plumb-all.com/website/contactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission failed", err);
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
          label="I consent to follow-up & informational text messages. Frequency varies. Msg & data rates may apply. Reply STOP to opt out."
          labelClassName="text-sm"
          labelAfter
          onDarkBackground={onDarkBackground}
          autocomplete="off"
        />
      </FormGroup>

      <Button
        type="submit"
        className="inline-block background-theme-1 text-white px-4 py-2 rounded shadow hover:background-theme-2 transition"
      >
        Submit
      </Button>
    </Form>
  );
}
