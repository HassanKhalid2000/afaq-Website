'use client';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function OrderSuccessPage() {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // توليد رقم طلب وهمي
    const orderNum = `AFQ-${Date.now()}`;
    setOrderNumber(orderNum);
  }, []);

  return (
    <main>
      <Header />
      
      <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          
          {/* Success Animation */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center animate-bounce">
              <i className="fas fa-check text-white text-4xl"></i>
            </div>
            
            <div className="animate-pulse">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                تم إرسال طلبك بنجاح! 🎉
              </h1>
            </div>
          </div>

          {/* Order Details */}
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">تفاصيل الطلب</h2>
              <div className="bg-gray-100 p-4 rounded-xl">
                <span className="text-lg font-mono text-purple-600 font-bold">
                  رقم الطلب: {orderNumber}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <i className="fas fa-clock text-blue-600 text-xl"></i>
                  <h3 className="font-bold text-blue-800">الخطوة التالية</h3>
                </div>
                <p className="text-blue-700 leading-relaxed">
                  سيتواصل معك فريق المبيعات خلال <strong>24 ساعة</strong> لتأكيد الطلب وترتيب عملية الدفع والتفعيل.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                  <h3 className="font-bold text-green-800">ضمان الخدمة</h3>
                </div>
                <p className="text-green-700 leading-relaxed">
                  جميع خدماتنا مضمونة بأعلى مستوى من الجودة والأمان مع دعم فني متميز.
                </p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">ماذا يحدث بعد ذلك؟</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">مراجعة الطلب</h3>
                <p className="opacity-90">سيقوم فريقنا بمراجعة طلبك والتأكد من جميع التفاصيل</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">التواصل معك</h3>
                <p className="opacity-90">سنتواصل معك لتأكيد الطلب وترتيب عملية الدفع</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">تفعيل الخدمة</h3>
                <p className="opacity-90">بعد تأكيد الدفع، سيتم تفعيل خدمتك فوراً</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
              <i className="fas fa-headset text-purple-600"></i>
              تحتاج مساعدة فورية؟
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="tel:+966123456789" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="fas fa-phone"></i>
                اتصل بنا: 966123456789+
              </a>
              
              <a 
                href="mailto:info@afaqinfotech.com" 
                className="bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="fas fa-envelope"></i>
                info@afaqinfotech.com
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              href="/store"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-all duration-300"
            >
              <i className="fas fa-shopping-bag"></i>
              تصفح المنتجات الأخرى
            </Link>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300"
            >
              <i className="fas fa-home"></i>
              العودة إلى الرئيسية
            </Link>
          </div>

          {/* Save Order Number Reminder */}
          <div className="mt-8 max-w-lg mx-auto bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <i className="fas fa-exclamation-triangle text-yellow-600 text-lg mt-1"></i>
              <div>
                <h4 className="font-bold text-yellow-800 mb-2">تذكير مهم</h4>
                <p className="text-yellow-700 text-sm">
                  يرجى حفظ رقم الطلب <strong>{orderNumber}</strong> للمراجعة المستقبلية والاستفسارات.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}