"use client"

import { useState } from "react"

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Replace this URL with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID_HERE", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset() // Clear the form
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappUrl =
    "https://wa.me/260979891359?text=Hello%20Visionary%20Minds%20Scholars%2C%20I%27d%20like%20to%20get%20in%20touch."

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8">
            <div className="text-green-600 text-4xl sm:text-5xl mb-4">✓</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
              Thank You for Your Interest!
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We've received your message and will get back to you within 24 hours.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="mr-2">💬</span>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Ready to start your journey? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">
                  There was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-base"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-base"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-base"
                >
                  <option value="">Select a service</option>
                  <option value="university-search">University Search & Placement</option>
                  <option value="visa-support">Visa Support</option>
                  <option value="scholarship-application">Scholarship Application</option>
                  <option value="general-consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-base"
                  placeholder="Tell us about your academic goals and how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-brand-hover transition-colors disabled:opacity-50 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 leading-tight">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-brand-primary mr-3 text-lg">📧</span>
                  <span className="text-sm sm:text-base break-all">visionarymindsscholars@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-primary mr-3 text-lg">📞</span>
                  <span className="text-sm sm:text-base">+260 979 891 359</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-primary mr-3 text-lg">💬</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline text-sm sm:text-base"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 leading-tight">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600 text-sm sm:text-base">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>

            <div className="bg-brand-accent p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg leading-tight">
                Ready to Begin Your Journey?
              </h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                Contact us today to schedule a consultation and learn how we can help you achieve your academic goals in
                China.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span className="mr-2">💬</span>
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
