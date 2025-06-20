import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import ImageToPdf from './components/tools/ImageToPdf';
import PdfToImage from './components/tools/PdfToImage';
import PdfToWord from './components/tools/PdfToWord';
import WordToPdf from './components/tools/WordToPdf';
// Import other tool pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image-to-pdf" element={<ImageToPdf />} />
        <Route path="/pdf-to-image" element={<PdfToImage />} />
        <Route path="/pdf-to-word" element={<PdfToWord />} />
        <Route path="/word-to-pdf" element={<WordToPdf />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}
export default App;