'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  name: string;
  title: string;
  slot: 'female' | 'male';
}

export default function FounderPhotoUpload({ src, alt, name, title, slot }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState(src);
  const [uploading, setUploading] = useState(false);

  async function handleFile(file: File) {
    setUploading(true);
    const form = new FormData();
    form.append('file', file);
    form.append('slot', slot);
    await fetch('/api/upload-founder', { method: 'POST', body: form });
    setImgSrc(`/images/founder-${slot}.jpg?t=${Date.now()}`);
    setUploading(false);
  }

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '4 / 3' }}
      onClick={() => inputRef.current?.click()}
    >
      {/* Photo with subtle scale on hover */}
      <Image
        key={imgSrc}
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{ objectPosition: 'center top' }}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      {/* Soft cinematic gradient — covers only bottom 28% */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(10,20,40,0.55) 0%, transparent 52%)',
        }}
      />

      {/* Name + badge — sits just above the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-10">
        <p className="text-white font-black text-xl leading-tight tracking-tight drop-shadow">{name}</p>
        <span
          className="inline-block mt-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ backgroundColor: 'var(--orange)', color: 'white' }}
        >
          {title}
        </span>
      </div>

      {/* Upload overlay (dev only) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: 'rgba(0,0,0,0.38)' }}
      >
        {uploading ? (
          <span className="text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            Uploading…
          </span>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/60 bg-white/15 backdrop-blur-sm">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <span className="text-white text-xs font-semibold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm tracking-wide">
              Replace photo
            </span>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }}
      />
    </div>
  );
}
