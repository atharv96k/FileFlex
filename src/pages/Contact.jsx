import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // NOTE: To actually send emails, you would need to integrate with a backend or a service like EmailJS, Formspree, etc.
  // This is a demo form that only simulates submission.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Have questions, feedback, or need support? Reach out to us!
          </p>
          <div className="bg-blue-50 rounded-lg p-6 shadow mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>
            {submitted ? (
              <div className="text-green-600 font-semibold text-center mb-4">
                Thank you for contacting us! We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Email</h2>
              <p className="text-gray-700 mb-4">
                <a href="mailto:support@fileflex.com" className="text-blue-600 underline">
                  support@fileflex.com
                </a>
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Social Media</h2>
              <p className="text-gray-700">
                Follow us for updates:
                <br />
                <a href="https://twitter.com/fileflex" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mr-4">Twitter</a>
                <a href="https://facebook.com/fileflex" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Facebook</a>
              </p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            We aim to respond to all inquiries within 24 hours.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;