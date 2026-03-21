"use client";
import { useState } from "react";

export function ContactPage() {
  const [name, setName] = useState("Guest");
  const [email, setEmail] = useState("example@example.com");
  const [topic, setTopic] = useState("Some question, idk");
  const [message, setMessage] = useState(
    "The message comes here and it can go to multiple lines",
  );

  return (
    <div className="size-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-zinc-800 border border-white-1 font-mono text-sm">
        {/* Header */}
        <div className="px-4 py-2 border-zinc-700">
          <span className="text-zinc-400">Email</span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Name Field */}
          <div className="flex gap-2">
            <label className="text-zinc-400 whitespace-nowrap">
              What&apos;s your name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 text-zinc-200 outline-none border border-zinc-700 px-2 py-1 focus:border-zinc-500"
            />
          </div>

          {/* Email Field */}
          <div className="flex gap-2">
            <label className="text-zinc-400 whitespace-nowrap">
              Email address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-zinc-200 outline-none border border-zinc-700 px-2 py-1 focus:border-zinc-500"
            />
          </div>

          {/* Topic Field */}
          <div className="flex gap-2">
            <label className="text-zinc-400 whitespace-nowrap">Topic:</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1 bg-transparent text-zinc-200 outline-none border border-zinc-700 px-2 py-1 focus:border-zinc-500"
            />
          </div>

          {/* Message Field */}
          <div className="flex gap-2">
            <label className="text-zinc-400 whitespace-nowrap self-start">
              Your message:
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="flex-1 bg-transparent text-zinc-200 outline-none border border-zinc-700 px-2 py-1 focus:border-zinc-500 resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-zinc-700 flex items-center gap-2">
          <span className="text-zinc-400">Send:</span>
          <button className="text-zinc-200 hover:text-zinc-200 cursor-pointer">
            [Y]es
          </button>
        </div>
      </div>
    </div>
  );
}
