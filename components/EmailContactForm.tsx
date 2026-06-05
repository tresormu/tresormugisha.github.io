'use client'

import { FormEvent, useState } from 'react'

const EMAIL_ADDRESS = 'tresormugisha07@gmail.com'

export default function EmailContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in all fields before sending.')
      return
    }

    const body = `Hello,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)}.%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AContact email: ${encodeURIComponent(email)}`
    const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${body}`

    window.location.href = mailtoLink
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">Send me a message</h3>
        <p className="text-gray-600 text-sm max-w-2xl">
          Write your message below and click Send. This will open your email client with the message ready to send to me.
        </p>
      </div>

      {error ? <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Your name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#4F6551] focus:bg-white"
            placeholder="e.g. Jane Doe"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Your email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#4F6551] focus:bg-white"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Subject</span>
        <input
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#4F6551] focus:bg-white"
          placeholder="Project inquiry, collaboration, etc."
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          className="mt-2 w-full rounded-3xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#4F6551] focus:bg-white"
          placeholder="Tell me a bit about what you'd like to work on..."
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-3xl bg-[#4F6551] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3f533f]"
      >
        Send email
      </button>
    </form>
  )
}
