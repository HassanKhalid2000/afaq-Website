'use client';

import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[1001] bg-gradient-to-r from-purple-900 to-pink-600 text-white py-1.5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm">
          {/* Contact Info - Right Side */}
          <div className="flex items-center gap-4">
            <Link href="mailto:info@afaqinfotech.com" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
              <i className="fas fa-envelope text-sm"></i>
              <span className="hidden md:inline">info@afaqinfotech.com</span>
            </Link>
            <Link href="tel:+966573673270" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
              <i className="fas fa-phone text-sm"></i>
              <span className="hidden md:inline"></span>
            </Link>
          </div>

          {/* Social Media - Left Side */}
          <div className="flex items-center gap-2">
            <Link
              href="https://www.instagram.com/afaqinfotech.sa/"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-sm"></i>
            </Link>
            <Link
              href="https://www.youtube.com/@AfaqInfoTech"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube text-sm"></i>
            </Link>
            <Link
              href="https://wa.me/+966573673271"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-sm"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/company/afaq-integrated-solution/about/?viewAsMember=true"
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in text-sm"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
