import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TermsOfService = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <Header />
    <main className="flex-grow max-w-3xl mx-auto px-4 py-12 bg-white rounded-2xl shadow-lg mt-10 mb-10">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">
        Terms of Service
      </h1>
      <section className="mb-8">
        <p className="mb-4 text-lg text-gray-700 text-center">
          Welcome to <span className="font-semibold text-blue-600">FileFlex</span>. By using our website and tools, you agree to the following terms and conditions.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">1. Use of Service</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>FileFlex is provided for personal and non-commercial use only.</li>
          <li>You agree not to misuse the service or attempt to disrupt its operation.</li>
          <li>All conversions and uploads must comply with applicable laws and regulations.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">2. Intellectual Property</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>All content, branding, and design elements on FileFlex are the property of their respective owners.</li>
          <li>You retain ownership of files you upload and process using our tools.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">3. Disclaimer</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>FileFlex is provided "as is" without warranties of any kind.</li>
          <li>We do not guarantee uninterrupted or error-free service.</li>
          <li>We are not responsible for any loss or damage resulting from your use of the service.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">4. Changes to Terms</h2>
        <p className="text-gray-700">
          We may update these Terms of Service at any time. Changes will be posted on this page.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">5. Contact</h2>
        <p className="text-gray-700">
          For questions about these terms, please contact us via our <a href="/contact" className="text-blue-600 underline hover:text-blue-800">Contact</a> page.
        </p>
      </section>
      <div className="text-right text-gray-500 text-sm mt-8">
        Last updated: June 20, 2025
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;