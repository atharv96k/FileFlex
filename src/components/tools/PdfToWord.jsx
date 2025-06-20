import React, { useRef, useState } from 'react';
import Header from '../layout/Header';

const PdfToWord = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setMessage('');
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0]);
            setMessage('');
        }
    };

    const handleConvert = (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setMessage('Please select a PDF file to convert.');
            return;
        }
        // Simulate conversion
        setMessage('Conversion successful! (Demo only)');
    };

    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto mt-12 bg-white p-8 rounded shadow">
                <h1 className="text-2xl font-bold mb-4 text-center">PDF to Word Converter</h1>
                <p className="mb-6 text-gray-600 text-center">
                    Upload your PDF document and convert it to an editable Word file (.docx) instantly.
                </p>
                <form onSubmit={handleConvert} className="flex flex-col items-center gap-4">
                    <div
                        className={`w-full border-2 ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-300'} rounded p-6 text-center cursor-pointer transition`}
                        onClick={() => fileInputRef.current.click()}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <input
                            type="file"
                            accept=".pdf,application/pdf"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        {selectedFile ? (
                            <span className="text-green-700 font-medium">{selectedFile.name}</span>
                        ) : (
                            <span className="text-gray-500">
                                Drag &amp; drop your PDF file here, or <span className="text-blue-600 underline">browse</span>
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Convert to Word
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center text-green-600 font-semibold">
                        {message}
                    </div>
                )}

                {/* Additional Information Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">Why Convert PDF to Word?</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Edit your PDF content easily in Microsoft Word.</li>
                        <li>Extract text, images, and formatting from your PDF files.</li>
                        <li>Make quick changes without recreating documents from scratch.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mb-2">How It Works</h2>
                    <ol className="list-decimal list-inside text-gray-700 mb-4">
                        <li>Drag and drop your PDF document or click to select a file.</li>
                        <li>Click "Convert to Word" to start the conversion process.</li>
                        <li>Download your converted Word (.docx) file instantly.</li>
                    </ol>
                    <h2 className="text-xl font-semibold mb-2">Supported Formats</h2>
                    <p className="text-gray-700 mb-4">
                        This tool supports PDF files with the <strong>.pdf</strong> extension.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Privacy & Security</h2>
                    <p className="text-gray-700">
                        Your files are processed securely and are not stored on our servers. All conversions happen in your browser for maximum privacy.
                    </p>
                </div>
            </div>
        </>
    );
};

export default PdfToWord;