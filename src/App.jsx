import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TermsOfService from './pages/TermsOfService'; 
import Support from './pages/Support'; 
import Contact from './pages/Contact';
import ScrollToTop from './components/layout/ScrollToTop';
import ImageToPdf from './components/tools/ImageToPdf';
import PdfToWord from './components/tools/PdfToWord';
import WordToPdf from './components/tools/WordToPdf';
import InstaDownloader from './components/tools/InstaDownloader';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image-to-pdf" element={<ImageToPdf />} />
        <Route path="/pdf-to-word" element={<PdfToWord />} />
        <Route path="/word-to-pdf" element={<WordToPdf />} />
        <Route path="/insta-reels-downloader" element={<InstaDownloader />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
        <Route path="/termsofservice" element={<TermsOfService />} /> 
        <Route path="/support" element={<Support />} /> 
      </Routes>
    </Router>
  );
}
export default App;