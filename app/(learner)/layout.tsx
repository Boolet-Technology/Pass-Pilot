import type { Metadata } from "next";

import { ROBOTS_PRIVATE } from "@/lib/seo/metadata";

/** Learner app routes are private except page-level overrides (e.g. /assessment). */
export const metadata: Metadata = {
  robots: ROBOTS_PRIVATE,
};

export default function LearnerGroupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
