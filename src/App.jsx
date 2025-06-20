import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import PrivacyPolicy from './pages/TermsOfService'; 
import Contact from './pages/Contact';
import ScrollToTop from './components/layout/ScrollToTop';
import ImageToPdf from './components/tools/ImageToPdf';
import PdfToImage from './components/tools/PdfToImage';
import PdfToWord from './components/tools/PdfToWord';
import WordToPdf from './components/tools/WordToPdf';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image-to-pdf" element={<ImageToPdf />} />
        <Route path="/pdf-to-image" element={<PdfToImage />} />
        <Route path="/pdf-to-word" element={<PdfToWord />} />
        <Route path="/word-to-pdf" element={<WordToPdf />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
        <Route path="/termsofservice" element={<TermsOfService />} /> 
      </Routes>
    </Router>
  );
}
export default App;