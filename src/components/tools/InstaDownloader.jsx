import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
const InstaDownloader = () => {
  const [url, setUrl] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleDownload = async (e) => {
    e.preventDefault();
    setError('');
    setVideoUrl('');
    if (!url.trim()) {
      setError('Please enter a valid Instagram Reel URL.');
      return;
    }
    setDownloading(true);

    // Placeholder: Replace with your backend call
    setTimeout(() => {
      // Simulate a successful download
      setVideoUrl('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4');
      setDownloading(false);
    }, 2000);
  };

  return (
    <>
    <Header />
    <div className="bg-gradient-to-br from-pink-100 to-yellow-100 flex flex-col items-center justify-center min-h-[80vh] py-6 sm:py-8 md:py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex flex-col items-center mb-6">
          <span className="bg-gradient-to-r from-pink-500 to-yellow-500 p-4 rounded-full shadow-lg mb-2">
            <Instagram size={40} className="text-white" />
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Instagram Reels Downloader
          </h1>
          <p className="text-gray-600 text-center">
            Paste the link to any public Instagram Reel and download it instantly in HD quality.
          </p>
        </div>
        <form onSubmit={handleDownload} className="flex flex-col gap-4">
          <input
            type="url"
            className="border border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            placeholder="Paste Instagram Reel URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={downloading}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-2 rounded shadow hover:from-pink-600 hover:to-yellow-400 transition disabled:opacity-60"
            disabled={downloading}
          >
            {downloading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Downloading...
              </span>
            ) : (
              'Download Reel'
            )}
          </button>
        </form>
        {error && (
          <div className="mt-4 text-center text-red-600 font-semibold">
            {error}
          </div>
        )}
        {videoUrl && (
          <div className="mt-8 flex flex-col items-center">
            <video
              src={videoUrl}
              controls
              className="rounded-lg shadow-lg max-w-full mb-4"
              style={{ maxHeight: 360 }}
            />
            <a
              href={videoUrl}
              download="instagram-reel.mp4"
              className="bg-pink-500 text-white px-6 py-2 rounded shadow hover:bg-pink-600 transition font-semibold"
            >
              Download Video
            </a>
          </div>
        )}
        <div className="mt-8 text-gray-500 text-xs text-center">
          <p>
            <strong>Note:</strong> This tool works for public Instagram Reels only. We do not store your downloads.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <style jsx>{`
        .bg-gradient-to-br {
          background: linear-gradient(to bottom right, #f9f7f7, #fff3e0);
        }
      `}</style>
    </>
  );
};

export default InstaDownloader;