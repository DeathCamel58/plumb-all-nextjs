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
  const executeRecaptcha = () => {
    if (typeof grecaptcha !== "undefined") {
      grecaptcha.enterprise.ready(async () => {
        try {
          const token = await grecaptcha.enterprise.execute(
            "6LcII3srAAAAANs7plKrgJq30B53o2lnoEeJrU_U",
            { action }
          );
          const tokenInput = document.getElementById(
            "recaptcha-token"
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
        src="https://www.google.com/recaptcha/enterprise.js?render=YOUR SITE KEY"
        strategy="afterInteractive"
        onLoad={executeRecaptcha}
      />
      <input type="hidden" name="recaptchaToken" id="recaptcha-token" />
      );
    </>
  );
}
