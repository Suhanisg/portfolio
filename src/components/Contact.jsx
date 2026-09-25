import { useState } from 'react'
import { profile } from '../data/siteData'
import './Contact.css'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: No email/backend service is connected yet.
    // Wire this up to an API route, form service (e.g. Formspree) or
    // serverless function, then replace this handler with a real request.
    console.log('Contact form submitted (not yet sent anywhere):', form)
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="section-kicker">Contact</p>
          <h2>Let's Work Together</h2>
          <p className="contact__text">
            I'm currently open to opportunities in Frontend Development, Full Stack
            Development and UI/UX-focused roles.
          </p>

          <ul className="contact__details">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/suhanisg</a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">github.com/Suhanisg</a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <label>
              Name
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
          </div>

          <label>
            Subject
            <input type="text" name="subject" value={form.subject} onChange={handleChange} required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>

          <button type="submit" className="btn btn-primary">Send Message</button>

          {status === 'sent' && (
            <p className="contact__note" role="status">
              This form isn't connected to an email service yet — hook it up to an API
              route or form provider to start receiving messages.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
