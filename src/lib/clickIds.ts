// Google Ads click IDs, kept from the landing page so the contact form can send
// them with the lead. The integration uses them to count the form as a Google
// Ads conversion and to report the customer's first invoice value back.

export interface ClickIds {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
}

const STORAGE_KEY = "pa_click_ids";
// Google only accepts conversions within 90 days of the click
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid"] as const;
const VALID_CLICK_ID = /^[\w-]{1,512}$/;

function pickClickIds(source: (key: string) => string | null | undefined): ClickIds {
  const ids: ClickIds = {};
  for (const key of CLICK_ID_KEYS) {
    const value = source(key)?.trim();
    if (value && VALID_CLICK_ID.test(value)) {
      ids[key] = value;
    }
  }
  return ids;
}

/**
 * Stores the click IDs from the current URL, if it has any. A newer ad click
 * replaces an older one.
 */
export function captureClickIds(search: string = window.location.search): void {
  const ids = pickClickIds((key) => new URLSearchParams(search).get(key));
  if (Object.keys(ids).length === 0) {
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...ids, ts: Date.now() }));
  } catch {
    // Storage blocked (private mode, disabled site data); the cookie fallback may still work
  }
}

/**
 * Reads a click ID from a Google Tag Manager Conversion Linker cookie
 * (format "GCL.<seconds>.<click id>").
 */
function fromLinkerCookie(name: string): string | undefined {
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${name}=`));
  if (!cookie) {
    return undefined;
  }
  const [, seconds, ...rest] = decodeURIComponent(cookie.slice(name.length + 1)).split(".");
  const clickedAt = Number(seconds) * 1000;
  if (!clickedAt || Date.now() - clickedAt > MAX_AGE_MS) {
    return undefined;
  }
  return rest.join(".") || undefined;
}

/**
 * The click IDs to send with a form: the ones stored on landing if they're
 * under 90 days old, otherwise whatever the Conversion Linker cookies hold.
 */
export function getClickIds(): ClickIds {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
    if (stored && Date.now() - Number(stored.ts) <= MAX_AGE_MS) {
      const ids = pickClickIds((key) => stored[key]);
      if (Object.keys(ids).length > 0) {
        return ids;
      }
    }
  } catch {
    // Unreadable or blocked storage; fall through to the cookies
  }

  try {
    return pickClickIds((key) =>
      key === "gclid" ? fromLinkerCookie("_gcl_aw") : key === "gbraid" ? fromLinkerCookie("_gcl_gb") : undefined,
    );
  } catch {
    return {};
  }
}
