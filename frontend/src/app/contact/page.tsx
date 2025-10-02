"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("Sending...");
    await new Promise((r) => setTimeout(r, 800)); // simulate API
    setStatus("Message sent! We'll get back to you soon.");
  }

  return (
    <section>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-4 max-w-md">
        <label className="block">
          <span className="text-sm">Name</span>
          <input className="mt-1 block w-full border rounded p-2" required />
        </label>
        <label className="block mt-3">
          <span className="text-sm">Message</span>
          <textarea className="mt-1 block w-full border rounded p-2" required />
        </label>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded">
          Send
        </button>
        <p className="mt-2 text-green-600 text-sm">{status}</p>
      </form>
    </section>
  );
}
