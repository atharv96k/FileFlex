import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About FileFlex</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            <span className="font-semibold text-blue-600">FileFlex</span> is your all-in-one solution for managing PDF and document conversions online. Our mission is to make file management simple, fast, and accessible for everyone.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Convert between PDF, Word, and image formats with ease.</li>
              <li>Merge, split, and organize your PDF documents.</li>
              <li>All tools are free to use, with no registration required.</li>
              <li>Fast, secure, and privacy-focused processing—your files never leave your device.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose FileFlex?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-semibold text-green-600">100% Free:</span> No hidden fees or subscriptions.</li>
              <li><span className="font-semibold text-blue-600">No Registration:</span> Start using our tools instantly.</li>
              <li><span className="font-semibold text-purple-600">Secure & Private:</span> All conversions happen in your browser for maximum privacy.</li>
              <li><span className="font-semibold text-red-600">User-Friendly:</span> Clean, intuitive interface for everyone.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-700">
              We believe everyone should have access to powerful document tools without barriers. FileFlex is committed to continuous improvement and adding new features based on your feedback.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;