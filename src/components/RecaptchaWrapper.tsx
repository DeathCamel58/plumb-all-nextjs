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

export function RecaptchaWrapper({ action }: Props) {
  const recaptcha_v3_site_key = "6LcII3srAAAAAIOAWnpxGUx0P6jR6ekNMwwuVOJS";

  const executeRecaptcha = () => {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.enterprise.ready(async () => {
        try {
          const token = await grecaptcha.enterprise.execute(
            recaptcha_v3_site_key,
            { action }
          );
          const tokenInput = document.getElementById(
            "recaptchaToken"
          ) as HTMLInputElement;
          if (tokenInput) tokenInput.value = token;
        } catch (e) {
          console.error("Recaptcha error", e);
        }
      });
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${recaptcha_v3_site_key}`}
        strategy="afterInteractive"
        onLoad={executeRecaptcha}
      />
      <input type="hidden" name="recaptchaToken" id="recaptchaToken" />
    </>
  );
}
