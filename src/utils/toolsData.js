import { FileImage, FileText, Image, Upload, Video, Instagram } from 'lucide-react';

export const toolsData = [
  {
    id: 'image-to-pdf',
    title: 'Image to PDF',
    description: 'Convert JPG, PNG, and other image formats to PDF documents instantly',
    icon: FileImage,
    gradient: 'from-red-500 to-pink-500',
    route: '/image-to-pdf'
  },
  {
    id: 'pdf-to-word',
    title: 'PDF to Word', 
    description: 'Convert PDF documents to editable Word files with preserved formatting',
    icon: FileText,
    gradient: 'from-green-500 to-emerald-500',
    route: '/pdf-to-word'
  },
  {
    id: 'word-to-pdf',
    title: 'Word to PDF',
    description: 'Transform Word documents into professional PDF files quickly',
    icon: Upload,
    gradient: 'from-purple-500 to-indigo-500',
    route: '/word-to-pdf'
  },
  {
    id: 'insta-reels-downloader',
    title: 'Insta Reels Downloader',
    description: 'Download Instagram Reels videos quickly and easily.',
    icon: Instagram, // Use Instagram icon
    gradient: 'from-pink-500 to-yellow-500',
    route: '/insta-reels-downloader'
  }
];