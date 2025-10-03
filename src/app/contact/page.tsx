'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Page Header */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, #572a6e, #572a6e, #e4237b)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              نحن هنا لخدمتك ومساعدتك في تحقيق أهدافك التقنية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">اتصل بنا</h3>
              <p className="text-gray-600 mb-4">تواصل معنا هاتفياً</p>
              <a href="tel:+966573673270" className="text-purple-600 font-bold text-lg hover:text-purple-800 transition-colors">
                +966573673270
              </a>
              <p className="text-gray-500 text-sm mt-2">الأحد - الخميس<br/>8:00 ص - 6:00 م</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">راسلنا إلكترونياً</h3>
              <p className="text-gray-600 mb-4">أرسل لنا رسالتك</p>
              <a href="mailto:info@afaqinfotech.com" className="text-green-600 font-bold text-lg hover:text-green-800 transition-colors">
                info@afaqinfotech.com
              </a>
              <p className="text-gray-500 text-sm mt-2">سنرد خلال 24 ساعة</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">موقعنا</h3>
              <p className="text-gray-600 mb-4">زوروا مكاتبنا</p>
              <p className="text-blue-600 font-bold">الرياض</p>
              <p className="text-gray-500 text-sm mt-2">المملكة العربية السعودية<br/>3522 الامير أحمد بن عبدالعزيز - حي لبن 6057</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-headset text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">الدعم الفني</h3>
              <p className="text-gray-600 mb-4">مساعدة تقنية فورية</p>
              <a href="tel:+966573673271" className="text-red-600 font-bold text-lg hover:text-red-800 transition-colors">
                +966573673271
              </a>
              <p className="text-gray-500 text-sm mt-2">متاح 24/7<br/>دعم مستمر</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">أرسل لنا رسالة</h2>
                <p className="text-gray-600">املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</p>
              </div>

              {showSuccess && (
                <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
                  <i className="fas fa-check-circle ml-2"></i>
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="أدخل اسمك الكامل" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">جهة العمل</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="اسم الشركة أو المؤسسة" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="+966 XX XXX XXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الخدمة المطلوبة</label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">اختر الخدمة</option>
                    <option value="consultation">استشارة مجانية</option>
                    <option value="website">تطوير موقع إلكتروني</option>
                    <option value="software">تطوير برمجيات</option>
                    <option value="mobile">تطوير تطبيق جوال</option>
                    <option value="erp">نظام ERP</option>
                    <option value="crm">نظام CRM</option>
                    <option value="hospital">نظام إدارة مستشفيات</option>
                    <option value="school">نظام إدارة مدارس</option>
                    <option value="security">حلول الأمن السيبراني</option>
                    <option value="cloud">الحوسبة السحابية</option>
                    <option value="network">حلول الشبكات</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الرسالة *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="اكتب رسالتك هنا..."></textarea>
                </div>

                <button type="submit" className="w-full text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-300" style={{ background: 'linear-gradient(to right, #582a6e, #e4237b)' }}>
                  <i className="fas fa-paper-plane ml-2"></i>
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Map & Social */}
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">موقعنا على الخريطة</h2>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-6 flex-grow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.7048392680132!2d46.602633030447535!3d24.62991019863004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1bb7be8c4779%3A0x1379c4a7f4ed463f!2z2KLZgdin2YIg2KfZhNmF2KrZg9in2YXZhNipINmE2KrZgtmG2YrYqSDYp9mE2YXYudmE2YjZhdin2KogQWZhcSBJbnRlZ3JhdGVkIGZvciBJbmZvcm1hdGlvbiBUZWNobm9sb2d5!5e0!3m2!1sar!2ssa!4v1759445199894!5m2!1sar!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="mt-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-4">طرق أخرى للتواصل</h3>
                <div className="grid grid-cols-2 gap-5">
                  <a href="https://wa.me/+966573673271" target="_blank" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fab fa-whatsapp text-white text-lg"></i>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-gray-800 text-sm">واتساب</h4>
                    </div>
                  </a>

                  <a href="https://www.youtube.com/@AfaqInfoTech" target="_blank" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fab fa-youtube text-white text-lg"></i>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-gray-800 text-sm">يوتيوب</h4>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/company/afaq-integrated-solution/about/?viewAsMember=true" target="_blank" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fab fa-linkedin text-white text-lg"></i>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-gray-800 text-sm">لينكد إن</h4>
                    </div>
                  </a>

                  <a href="https://www.instagram.com/afaqinfotech.sa/" target="_blank" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fab fa-instagram text-white text-lg"></i>
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-gray-800 text-sm">انستغرام</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
