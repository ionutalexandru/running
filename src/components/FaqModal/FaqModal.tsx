import React, { useState } from 'react';
import { FaqData } from '@/lib/mucMarathon/faqData'; 
import FaqItem from './FaqItem';

type Language = keyof FaqData;

type FaqModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: FaqData;
};

const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose, data }) => {
  const [lang, setLang] = useState<Language>('es');

  if (!isOpen) return null;

  const content = data[lang];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-60 transition-opacity duration-300 sm:items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full flex-col bg-white shadow-2xl
                   h-[90vh] sm:h-auto 
                   sm:max-w-2xl 
                   rounded-t-2xl sm:rounded-xl                    
                   sm:m-4"
      >
        <div className="flex-shrink-0 border-b border-gray-200 p-4 sm:p-6">
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{content.title}</h2>
            <div className="ml-3 flex items-center gap-2">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${lang === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${lang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                EN
              </button>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 sm:p-6">
          <div className="space-y-2">
            {content.faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} imageUrl={faq.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqModal;