"use client";

import Script from "next/script";

declare global {
  const grecaptcha: {
    enterprise: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  };
}
interface Props {
  action: string;
}

const recaptcha_v3_site_key = "6LcII3srAAAAAIOAWnpxGUx0P6jR6ekNMwwuVOJS";
// How long to wait for the reCAPTCHA script and a token before giving up
const TOKEN_TIMEOUT_MS = 5000;

/**
 * Gets a fresh reCAPTCHA token for a form submission.
 *
 * Tokens expire after two minutes and can only be verified once, so this is
 * called when the form is submitted rather than when the page loads. Resolves
 * to "" if the script never loads (blocked, slow network) or errors, and the
 * form is still sent; the integration flags it as unverified instead of
 * dropping it.
 */
export function getRecaptchaToken(action: string): Promise<string> {
  return new Promise((resolve) => {
    const timer = window.setTimeout(() => resolve(""), TOKEN_TIMEOUT_MS);
    const finish = (token: string) => {
      window.clearTimeout(timer);
      resolve(token);
    };

    const execute = () => {
      grecaptcha.enterprise.ready(async () => {
        try {
          finish(await grecaptcha.enterprise.execute(recaptcha_v3_site_key, { action }));
        } catch (e) {
          console.error("Recaptcha error", e);
          finish("");
        }
      });
    };

    // The script may still be loading on a slow connection
    const started = Date.now();
    const waitForScript = () => {
      if (typeof grecaptcha !== "undefined" && grecaptcha.enterprise) {
        execute();
      } else if (Date.now() - started < TOKEN_TIMEOUT_MS) {
        window.setTimeout(waitForScript, 100);
      }
    };
    waitForScript();
  });
}

// Loads the reCAPTCHA script; forms call getRecaptchaToken() when submitted
export function RecaptchaWrapper({ action }: Props) {
  return (
    <Script
      src={`https://www.google.com/recaptcha/enterprise.js?render=${recaptcha_v3_site_key}`}
      strategy="afterInteractive"
      data-action={action}
    />
  );
}
