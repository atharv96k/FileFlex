import React, { useRef, useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const ImageToPdf = () => {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
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
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFiles(Array.from(e.dataTransfer.files));
            setMessage('');
        }
    };

const handleConvert = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!selectedFiles.length) {
        setMessage('Please select one or more images to convert.');
        return;
    }

    const formData = new FormData();
    selectedFiles.forEach(file => formData.append('images', file));

    try {
        const response = await fetch('http://localhost:5000/api/image-to-pdf', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            setMessage('Failed to convert images to PDF.');
            return;
        }
const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ConvertedByAtharv.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setMessage('Conversion successful! Your PDF is downloading.');
    } catch (error) {
        setMessage('An error occurred during conversion.');
    }
};
    return (
        <>
            <Header />
            <div className="max-w-xl mx-auto mt-12 bg-white p-8 rounded shadow">
               
                <h1 className="text-2xl font-bold mb-4 text-center">Image to PDF Converter</h1>
                <p className="mb-6 text-gray-600 text-center">
                    Upload your images (JPG, PNG, BMP, GIF) and convert them into a single PDF document instantly.
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
                            accept="image/png, image/jpeg, image/jpg, image/bmp, image/gif"
                            multiple
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        {selectedFiles.length ? (
                            <span className="text-green-700 font-medium">
                                {selectedFiles.map(f => f.name).join(', ')}
                            </span>
                        ) : (
                            <span className="text-gray-500 flex flex-col items-center">
                                <span className="text-2xl mb-2 font-bold">IMG</span>
                                Drag &amp; drop your images here, or <span className="text-blue-600 underline">browse</span>
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Convert to PDF
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center text-red-600 font-semibold">
                        {message}
                    </div>
                )}

                {/* Additional Information Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">Why Convert Images to PDF?</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Combine multiple images into a single, easy-to-share PDF document.</li>
                        <li>Preserve image quality and layout in a universal format.</li>
                        <li>Make your images easier to print and archive.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mb-2">How It Works</h2>
                    <ol className="list-decimal list-inside text-gray-700 mb-4">
                        <li>Drag and drop your images or click to select files.</li>
                        <li>Click "Convert to PDF" to start the conversion process.</li>
                        <li>Download your combined PDF file instantly.</li>
                    </ol>
                    <h2 className="text-xl font-semibold mb-2">Supported Formats</h2>
                    <p className="text-gray-700 mb-4">
                        This tool supports <strong>JPG</strong>, <strong>JPEG</strong>, <strong>PNG</strong>, <strong>BMP</strong>, and <strong>GIF</strong> image files.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Privacy & Security</h2>
                    <p className="text-gray-700">
                        Your files are processed securely and are not stored on our servers. All conversions happen in your browser for maximum privacy.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default ImageToPdf;