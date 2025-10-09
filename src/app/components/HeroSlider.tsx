'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSlider() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    "حلول برمجية متكاملة",
    "أنظمة أمنية متقدمة",
    "بنية تحتية ذكية",
    "خدمات سحابية آمنة",
    "استشارات تقنية متخصصة"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        timeout = setTimeout(() => {}, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/img1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Typewriter Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight min-h-[80px] md:min-h-[120px]">
            <span className="inline-block">
              {displayedText}
              <span
                className={`inline-block w-1 h-[1.2em] bg-white ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 0.1s' }}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed opacity-90 max-w-2xl mx-auto animate-fade-in">
            تدعم أعمالك وتضمن لك بيئة عمل آمنة ومستقرة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-8">
            <Link
              href="/services"
              className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center"
            >
              اكتشف خدماتنا
              <i className="fas fa-arrow-left mr-2 text-sm"></i>
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              احجز استشارة مجانية
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-in-out 0.5s both;
        }
      `}</style>
    </section>
  );
}
