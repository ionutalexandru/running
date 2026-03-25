import React from 'react';
import Image from 'next/image';

type FaqItemProps = {
  question: string;
  answer: string;
  imageUrl?: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, imageUrl }) => {
  return (
    <details className="group border-b border-gray-200 py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-800">
        {question}
        <span className="transition-transform duration-300 group-open:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
      <div 
        className="mt-4 text-gray-600 prose"
        dangerouslySetInnerHTML={{ __html: answer }} 
      />
      {imageUrl && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={`Imagen para: ${question}`}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 640px) 90vw, 600px"
              loading="lazy"
            />
          </div>
        )}
    </details>
  );
};

export default FaqItem;