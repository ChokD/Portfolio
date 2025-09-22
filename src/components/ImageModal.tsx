import React, { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, src, alt = '', onClose }: ImageModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative max-w-5xl w-full">
        <button
          aria-label="Close image"
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white"
        >
          ✕
        </button>
        <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white">
          <img src={src} alt={alt} className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}


