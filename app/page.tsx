'use client';

import { useState, type ChangeEvent } from 'react';
import Image from 'next/image';

export default function Home() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <main className="container mx-auto text-center">
        <div className="space-y-4">
          <div className="relative inline-block">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
            />
            <button 
              type="button" 
              className="px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-semibold hover:bg-violet-100"
            >
              {image ? 'Change image' : 'Choose image'}
            </button>
          </div>

          {image && (
            <div className="mt-8">
              <div className="relative w-64 h-64 mx-auto rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt="Uploaded preview"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex gap-2 justify-center">
                <button
                  className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-full hover:bg-violet-600 transition-colors"
                >
                  🥣
                </button>
                <button
                  onClick={() => setImage(null)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  Remove Image
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
