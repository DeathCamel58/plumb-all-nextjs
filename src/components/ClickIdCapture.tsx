'use client';

import { useEffect } from "react";
import { captureClickIds } from "@/lib/clickIds";

// Keeps the Google Ads click IDs from the landing page for the contact form
export default function ClickIdCapture() {
  useEffect(() => {
    captureClickIds();
  }, []);

  return null;
}
