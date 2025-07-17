import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/xgvyzjab', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError(data.error || 'Something went wrong. Please try again later.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
      {success && (
        <div className="bg-green-700 text-white p-3 rounded mb-4 text-center">Thank you for reaching out! I will get back to you soon.</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        {error && <div className="text-red-400 text-sm">{error}</div>}
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition disabled:opacity-50" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
