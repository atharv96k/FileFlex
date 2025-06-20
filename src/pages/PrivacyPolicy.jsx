import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <Header />
    <main className="flex-grow max-w-3xl mx-auto px-4 py-12 bg-white rounded-2xl shadow-lg mt-10 mb-10">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">
        Privacy Policy
      </h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        Your privacy is important to us. At <span className="font-semibold text-blue-600">FileFlex</span>, we are committed to keeping your data safe and transparent about how we handle your information.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <span className="font-semibold text-blue-600">No Registration Required:</span> You can use all FileFlex tools without creating an account or providing personal details.
          </li>
          <li>
            <span className="font-semibold text-blue-600">File Handling:</span> Uploaded files are processed temporarily and deleted automatically after conversion. We do not store your files.
          </li>
          <li>
            <span className="font-semibold text-blue-600">No Data Sharing:</span> We never share, sell, or distribute your files or data to third parties.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">2. Cookies & Analytics</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <span className="font-semibold text-blue-600">Cookies:</span> We use cookies only for essential site functionality and to enhance your experience.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Analytics:</span> We may use analytics tools to understand site usage. No personal or file data is collected or tracked.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">3. Data Security</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <span className="font-semibold text-blue-600">Secure Processing:</span> All file conversions are handled securely. Files are deleted immediately after processing.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Best Practices:</span> We use industry-standard security measures to protect your data and privacy.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">4. Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy as our services evolve. Any changes will be posted on this page, and the date below will be updated.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">5. Contact Us</h2>
        <p className="text-gray-700">
          If you have questions or concerns about this Privacy Policy, please reach out via our <a href="/contact" className="text-blue-600 underline hover:text-blue-800">Contact</a> page.
        </p>
      </section>
      <div className="text-right text-gray-500 text-sm mt-8">
        Last updated: June 20, 2025
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;