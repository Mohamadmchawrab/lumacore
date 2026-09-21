"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does Luma Core build?",
    a: "We build and operate software products. JobsBoard.ai is our public job marketplace. We also take on custom platforms and SaaS work for clients.",
  },
  {
    q: "Is JobsBoard.ai part of Luma Core?",
    a: "Yes. JobsBoard.ai is a Luma Core product — jobs, companies, and NGO hiring for Lebanon and the region.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Most product builds run two to six months. We agree a timeline before work starts, based on scope rather than a generic package.",
  },
  {
    q: "Do you support products after launch?",
    a: "Yes. Our own products stay in production with us. Client work can include a maintenance arrangement after launch.",
  },
  {
    q: "Where are you based?",
    a: "Luma Core LLC is registered in San Francisco. Product work for JobsBoard is focused on Lebanon.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-[#ddd6cc] bg-white/40">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h2 className="text-3xl">
          Questions
        </h2>
        <div className="mt-10 divide-y divide-[#ddd6cc] border-y border-[#ddd6cc]">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-baseline justify-between gap-6 py-5 text-left"
                >
                  <span className="text-lg">{faq.q}</span>
                  <span className="text-sm text-[#5f5a54]">{open ? "Hide" : "Show"}</span>
                </button>
                {open && (
                  <p className="pb-5 leading-relaxed text-[#5f5a54]">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
