import Link from 'next/link';
import Image from 'next/image';
import WireframeBackground from './WireframeBackground';

export default function CTAFooterSection() {
  return (
    <section className="integrated-cta-footer">
      <div
        className="relative"
        style={{
          background: 'linear-gradient(to bottom right, #582a6e, #e3237b)'
        }}
      >
        {/* Wireframe Animation */}
        <WireframeBackground nodeCount={25} containerId="cta-footer-wireframe" />

        {/* CTA Content */}
        <div className="container mx-auto px-4 py-20 text-center text-white cta-content">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ابدأ رحلتك التقنية معنا اليوم
            </h2> 
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              احصل على استشارة مجانية واكتشف كيف يمكن لحلولنا التقنية أن تحول أعمالك
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                اتصل بنا الآن
              </Link>
              <Link
                href="/contact?consultation=true"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                احجز استشارة مجانية
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Image
                  src="/images/afaqLogo.png"
                  alt="آفاق المتكاملة لتكنولوجيا المعلومات"
                  width={64}
                  height={64}
                  className="h-16 w-auto mb-2"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                شريكك الموثوق في رحلة التحول الرقمي وتقديم الحلول التقنية المبتكرة
              </p>
              <div className="flex space-x-4 space-x-reverse">
                {/* Social Icons */}
                <Link
                  href="https://www.instagram.com/afaqinfotech.sa/"
                  target="_blank"
                  className="social-icon w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  href="https://wa.me/+966573673271"
                  target="_blank"
                  className="social-icon w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
                >
                  <i className="fab fa-whatsapp"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/afaq-integrated-solution/about/?viewAsMember=true"
                  target="_blank"
                  className="social-icon w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">عن الشركة</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">الخدمات</Link></li>
                <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">الحلول</Link></li>
                <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">المنتجات</Link></li>
                <li><Link href="/clients" className="text-gray-300 hover:text-white transition-colors">عملاؤنا</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">خدماتنا الرئيسية</h4>
              <ul className="space-y-4">
                <li><Link href="/services#design-development" className="text-gray-300 hover:text-white transition-colors">التصميم والتطوير</Link></li>
                <li><Link href="/services#infrastructure" className="text-gray-300 hover:text-white transition-colors">البنية التحتية</Link></li>
                <li><Link href="/services#consulting" className="text-gray-300 hover:text-white transition-colors">الاستشارات المتخصصة</Link></li>
                <li><Link href="/services#cybersecurity" className="text-gray-300 hover:text-white transition-colors">الأمن السيبراني</Link></li>
                <li><Link href="/services#cloud" className="text-gray-300 hover:text-white transition-colors">الحوسبة السحابية</Link></li>
                <li><Link href="/services#networks" className="text-gray-300 hover:text-white transition-colors">الشبكات والاتصالات</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">معلومات الاتصال</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <span className="text-gray-300">966573673270+</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <span className="text-gray-300">info@afaqinfotech.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <span className="text-gray-300">المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 آفاق المتكاملة لتكنولوجيا المعلومات. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}