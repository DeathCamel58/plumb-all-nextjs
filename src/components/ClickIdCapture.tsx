'use client';

import { useEffect } from "react";
import { captureClickIds, getClickIds } from "@/lib/clickIds";

const JOBBER_HOST = "clienthub.getjobber.com";

/**
 * Adds the stored click IDs to a Jobber quote link as it's followed. The link
 * keeps utm_source=website so Jobber still records the request's source, but
 * that UTM also starts a new GA4 session on the client hub. GA4 gives a gclid
 * priority over UTMs, so carrying it over keeps the quote request credited to
 * the ad click.
 */
function tagJobberLink(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest?.("a[href]");
  if (!(link instanceof HTMLAnchorElement)) {
    return;
  }
  let url: URL;
  try {
    url = new URL(link.href);
  } catch {
    return;
  }
  if (url.hostname !== JOBBER_HOST) {
    return;
  }

  const ids = getClickIds();
  let changed = false;
  for (const [key, value] of Object.entries(ids)) {
    if (value && !url.searchParams.has(key)) {
      url.searchParams.set(key, value);
      changed = true;
    }
  }
  if (changed) {
    link.href = url.toString();
  }
}

// Keeps the Google Ads click IDs from the landing page for the contact form and
// the Jobber quote links
export default function ClickIdCapture() {
  useEffect(() => {
    captureClickIds();

    // Capture phase, so the href is updated before the browser follows it.
    // auxclick covers middle-clicks that open the link in a new tab.
    document.addEventListener("click", tagJobberLink, true);
    document.addEventListener("auxclick", tagJobberLink, true);
    return () => {
      document.removeEventListener("click", tagJobberLink, true);
      document.removeEventListener("auxclick", tagJobberLink, true);
    };
  }, []);

  return null;
}
