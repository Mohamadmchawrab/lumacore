"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`Luma Core enquiry from ${name || "website"}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:info@lumacore.com?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-16 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm tracking-[0.18em] uppercase text-[#5f5a54]">Contact</p>
        <h1
          className="mt-3 text-4xl leading-tight sm:text-5xl"
        >
          Tell us what you want built.
        </h1>
        <p className="mt-5 max-w-md leading-relaxed text-[#5f5a54]">
          For JobsBoard partnerships, hiring on the platform, or a custom product
          engagement — start here.
        </p>
        <dl className="mt-10 space-y-6 text-sm">
          <div>
            <dt className="text-[#5f5a54]">Email</dt>
            <dd className="mt-1">
              <a href="mailto:info@lumacore.com" className="border-b border-[#161513] pb-0.5">
                info@lumacore.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[#5f5a54]">Office</dt>
            <dd className="mt-1 leading-relaxed">
              2261 Market Street STE 85170
              <br />
              San Francisco, CA 94114
            </dd>
          </div>
          <div>
            <dt className="text-[#5f5a54]">Product</dt>
            <dd className="mt-1">
              <a
                href="https://jobsboard.ai"
                target="_blank"
                rel="noreferrer"
                className="border-b border-[#161513] pb-0.5"
              >
                jobsboard.ai
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <form onSubmit={onSubmit} className="space-y-5 border border-[#ddd6cc] bg-white/60 p-6 sm:p-8">
        <div>
          <label htmlFor="name" className="block text-sm text-[#5f5a54]">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full border border-[#ddd6cc] bg-white px-3 py-3 outline-none focus:border-[#161513]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-[#5f5a54]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border border-[#ddd6cc] bg-white px-3 py-3 outline-none focus:border-[#161513]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-[#5f5a54]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={7}
            className="mt-2 w-full border border-[#ddd6cc] bg-white px-3 py-3 outline-none focus:border-[#161513]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#161513] px-5 py-3 text-sm text-[#f4f1eb]"
        >
          Send message
        </button>
        {status && <p className="text-sm text-[#5f5a54]">{status}</p>}
      </form>
    </main>
  );
}
