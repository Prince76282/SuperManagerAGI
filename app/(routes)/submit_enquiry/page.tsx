"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/d4b7b222da87bade2682555c1a9d631b",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setSubmitted(true);
    } catch {
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 mt-10">
      {submitted ? (
        <div className="w-full max-w-md bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 text-center space-y-4">
          <div className="text-5xl">Success</div>

          <h1 className="text-2xl font-bold text-gray-900">Thank You!</h1>

          <p className="text-gray-600">
            Your message has been sent successfully. We will contact you soon.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 bg-[#625FD0] text-white px-6 py-2 rounded-lg hover:opacity-90"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>

          <p className="text-gray-600">
            Send us a message and we will get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
            />

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Message from Website"
            />
            <input type="hidden" name="_template" value="table" />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#625FD0] text-white p-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
