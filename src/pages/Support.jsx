import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
const Support = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <Header />
    <main className="flex-grow max-w-3xl mx-auto px-4 py-12 bg-white rounded-2xl shadow-lg mt-10 mb-10">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center">
        Support
      </h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        Need help or have questions? We're here for you! Reach out to our team and check our frequently asked questions below.
      </p>
      <div className="bg-blue-50 rounded-lg p-6 shadow mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
        <p className="text-gray-700 mb-2">
          Email us at <a href="mailto:support@fileflex.com" className="text-blue-600 underline">atharv4prof@gmail.com</a>
        </p>
        <p className="text-gray-700">
          Or use our <Link to="/contact" className="text-blue-600 underline hover:text-blue-800">Contact</Link> page to send us a message directly.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="font-bold text-blue-600">Is FileFlex free to use?</h3>
          <p className="text-gray-700">Yes! All our tools are 100% free with no registration required.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-blue-600">Are my files safe?</h3>
          <p className="text-gray-700">Absolutely. Your files are processed securely and are not stored on our servers.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-blue-600">How quickly will I get a response?</h3>
          <p className="text-gray-700">We aim to respond to all support requests within 24 hours.</p>
        </div>
        <div>
          <h3 className="font-bold text-blue-600">Where can I find more information?</h3>
          <p className="text-gray-700">
            Please see our <a href="/privacypolicy" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</a> and <a href="/termsofservice" className="text-blue-600 underline hover:text-blue-800">Terms of Service</a>.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Support;