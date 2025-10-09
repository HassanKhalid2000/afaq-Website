'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import CartCounter from './CartCounter';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky-header bg-white ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="logo-container">
            <div className="flex items-center">
              <Image
                src="/images/afaqLogo.png"
                alt="آفاق المتكاملة لتكنولوجيا المعلومات"
                width={120}
                height={120}
                className={`logo-img ${isScrolled ? 'logo-scrolled' : ''}`}
              />
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className={`nav-link text-gray-700 hover:text-purple-600 font-medium ${pathname === '/' ? 'active' : ''}`}>
              الرئيسية
            </Link>
            <Link href="/about" className={`nav-link text-gray-700 hover:text-purple-600 font-medium ${pathname === '/about' ? 'active' : ''}`}>
              عن الشركة
            </Link>
            <Link href="/services" className={`nav-link text-gray-700 hover:text-purple-600 font-medium ${pathname === '/services' ? 'active' : ''}`}>
              الخدمات
            </Link>
            <Link href="/solutions" className={`nav-link text-gray-700 hover:text-purple-600 font-medium ${pathname === '/solutions' ? 'active' : ''}`}>
              الحلول
            </Link>
            <Link href="/products" className={`nav-link text-gray-700 hover:text-purple-600 font-medium ${pathname === '/products' ? 'active' : ''}`}>
              المنتجات
            </Link>
            <Link href="/store" className={`nav-link text-gray-700 hover:text-purple-600 font-medium ${pathname.startsWith('/store') ? 'active' : ''}`}>
              المتجر
            </Link>

            {/* Sectors Dropdown */}
            <div className="relative group px-4">
              <Link href="#" className={`nav-link text-gray-700 hover:text-purple-600 font-medium flex items-center ${['/healthcare', '/education', '/business', '/government', '/industrial', '/finance', '/security', '/telecommunications'].includes(pathname) ? 'active' : ''}`}>
                القطاعات
                <i className="fas fa-chevron-down mr-2 text-sm"></i>
              </Link>
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                <Link href="/healthcare" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  القطاع الصحي
                </Link>
                <Link href="/education" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  القطاع التعليمي
                </Link>
                <Link href="/business" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  قطاع الأعمال
                </Link>
                <Link href="/government" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  القطاع الحكومي
                </Link>
                <Link href="/industrial" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  القطاع الصناعي
                </Link>
                <Link href="/finance" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  القطاع المالي
                </Link>
                <Link href="/security" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  القطاع الأمني
                </Link>
                <Link href="/telecommunications" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                  قطاع الاتصالات
                </Link>
              </div>
            </div>

            <Link href="/clients" className={`nav-link text-gray-700 hover:text-purple-600 font-medium ${pathname === '/clients' ? 'active' : ''}`}>
              عملاؤنا
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <CartCounter />
            <Link
              href="/contact"
              className="bg-white border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              اتصل بنا
            </Link>
            <Link
              href="/contact"
              className="text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(to right, #582a6e, #e3237b)'
              }}
            >
              اطلب استشارة
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-purple-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium px-2">
                الرئيسية
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 font-medium px-2">
                عن الشركة
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium px-2">
                الخدمات
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-purple-600 font-medium px-2">
                الحلول
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-purple-600 font-medium px-2">
                المنتجات
              </Link>
              <Link href="/store" className="text-gray-700 hover:text-purple-600 font-medium px-2">
                المتجر
              </Link>

              {/* Mobile Sectors */}
              <div className="pr-4">
                <p className="text-sm text-gray-500 font-semibold mb-2">القطاعات:</p>
                <Link href="/healthcare" className="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">
                  القطاع الصحي
                </Link>
                <Link href="/education" className="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">
                  القطاع التعليمي
                </Link>
                <Link href="/business" className="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">
                  قطاع الأعمال
                </Link>
                <Link href="/government" className="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">
                  القطاع الحكومي
                </Link>
                <Link href="/industrial" className="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">
                  القطاع الصناعي
                </Link>
                <Link href="/finance" className="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">
                  القطاع المالي
                </Link>
                <Link href="/security" className="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">
                  القطاع الأمني
                </Link>
                <Link href="/telecommunications" className="block text-gray-600 hover:text-purple-600 font-medium px-2 py-1">
                  قطاع الاتصالات
                </Link>
              </div>

              <Link href="/clients" className="text-gray-700 hover:text-purple-600 font-medium px-2">
                عملاؤنا
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium px-2">
                اتصل بنا
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-3 px-2 pt-3 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="bg-white border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg font-medium text-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  اتصل بنا
                </Link>
                <Link
                  href="/contact"
                  className="text-white px-6 py-2 rounded-lg font-medium text-center hover:opacity-90 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to right, #582a6e, #e3237b)'
                  }}
                >
                  اطلب استشارة
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}