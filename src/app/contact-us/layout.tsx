import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Luma Core",
  description: "Contact Luma Core LLC about JobsBoard.ai or a custom software project.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
