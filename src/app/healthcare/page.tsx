import Header from '../components/Header';
import Footer from '../components/Footer';
import WireframeBackground from '../components/WireframeBackground';

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Page Header */}
      <section className="py-20" style={{
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 30%, #b91c1c 70%, #991b1b 100%)'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-heartbeat text-white text-4xl"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">القطاع الصحي</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              حلول تقنية متطورة ومتخصصة للمؤسسات الصحية من المستشفيات إلى العيادات والصيدليات
            </p>
          </div>
        </div>
      </section>

      {/* Healthcare Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              تقنيات طبية متقدمة لرعاية صحية أفضل
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              نقدم حلولاً تقنية شاملة ومتخصصة للقطاع الصحي، مصممة لتحسين جودة الرعاية الصحية وزيادة كفاءة العمليات الطبية والإدارية في المؤسسات الصحية من جميع الأحجام.
            </p>
          </div>
        </div>
      </section>

      {/* Healthcare Systems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">أنظمتنا الطبية المتطورة</h2>
            <p className="text-xl text-gray-600">حلول متكاملة لجميع احتياجات المؤسسات الصحية</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hospital Management System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                  background: 'linear-gradient(135deg, #dc2626, #ef4444)'
                }}>
                  <i className="fas fa-hospital text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">نظام إدارة المستشفيات (HIMS)</h3>
                <p className="text-gray-600">حل شامل لإدارة جميع عمليات المستشفى من التسجيل إلى الخروج</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-user-injured text-red-600"></i>
                      <span className="text-gray-700 font-medium">إدارة المرضى</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-file-medical text-red-600"></i>
                      <span className="text-gray-700 font-medium">الملفات الطبية الإلكترونية</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-calendar-check text-red-600"></i>
                      <span className="text-gray-700 font-medium">حجز المواعيد</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-bed text-red-600"></i>
                      <span className="text-gray-700 font-medium">إدارة الأسرة والغرف</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-user-md text-red-600"></i>
                      <span className="text-gray-700 font-medium">إدارة الكادر الطبي</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-prescription-bottle-alt text-red-600"></i>
                      <span className="text-gray-700 font-medium">إدارة الصيدلية</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-flask text-red-600"></i>
                      <span className="text-gray-700 font-medium">إدارة المختبرات</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-red-50 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <i className="fas fa-file-invoice-dollar text-red-600"></i>
                      <span className="text-gray-700 font-medium">الفواتير والمحاسبة</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-gray-800 mb-3">المميزات الإضافية:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• تكامل مع أنظمة التأمين الصحي</li>
                  <li>• تقارير طبية وإدارية شاملة</li>
                  <li>• نظام تنبيهات ذكي</li>
                  <li>• دعم متعدد اللغات</li>
                  <li>• واجهة سهلة الاستخدام</li>
                </ul>
              </div>

              <div className="flex space-x-4 space-x-reverse">
                <a href="/contact?demo=hospital" className="flex-1 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all" style={{
                  background: 'linear-gradient(135deg, #dc2626, #ef4444)'
                }}>
                  طلب عرض تقديمي
                </a>
                <a href="#" className="flex-1 border-2 border-red-600 text-red-600 text-center py-3 rounded-lg font-medium hover:bg-red-50 transition-all">
                  تحميل الكتيب
                </a>
              </div>
            </div>

            {/* Clinic Management System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-clinic-medical text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">نظام إدارة العيادات</h3>
                <p className="text-gray-600">حل مثالي للعيادات الخاصة ومراكز الرعاية الصحية الأولية</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <i className="fas fa-calendar-alt text-red-600 text-xl"></i>
                    <h4 className="font-bold text-gray-800">نظام المواعيد المتقدم</h4>
                  </div>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• حجز المواعيد أونلاين</li>
                    <li>• تذكير تلقائي للمرضى</li>
                    <li>• إدارة قائمة الانتظار</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <i className="fas fa-notes-medical text-green-600 text-xl"></i>
                    <h4 className="font-bold text-gray-800">السجلات الطبية الذكية</h4>
                  </div>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• تاريخ مرضي شامل</li>
                    <li>• تسجيل الفحوصات والنتائج</li>
                    <li>• أرشفة الصور والتقارير</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <i className="fas fa-prescription text-purple-600 text-xl"></i>
                    <h4 className="font-bold text-gray-800">وصفات إلكترونية</h4>
                  </div>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• كتابة الوصفات رقمياً</li>
                    <li>• قاعدة بيانات الأدوية</li>
                    <li>• تحذيرات التفاعلات الدوائية</li>
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4 space-x-reverse">
                <a href="/contact?demo=clinic" className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  طلب عرض تقديمي
                </a>
                <a href="#" className="flex-1 border-2 border-red-600 text-red-600 text-center py-3 rounded-lg font-medium hover:bg-red-50 transition-all">
                  تحميل الكتيب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacy & Radiology Systems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Pharmacy Management */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-pills text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">نظام إدارة الصيدليات</h3>
                <p className="text-gray-600">إدارة شاملة للمخزون الدوائي ونقاط البيع</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-boxes text-green-600 ml-2"></i>
                    إدارة المخزون الذكية
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• تتبع المخزون في الوقت الفعلي</li>
                    <li>• تنبيهات نفاد المخزون</li>
                    <li>• إدارة تواريخ الانتهاء</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-cash-register text-green-600 ml-2"></i>
                    نقاط البيع المتطورة
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• نظام باركود متقدم</li>
                    <li>• دعم وسائل الدفع المختلفة</li>
                    <li>• طباعة فواتير مخصصة</li>
                  </ul>
                </div>
              </div>

              <a href="/contact?demo=pharmacy" className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                اطلب عرضاً تقديمياً
              </a>
            </div>

            {/* Radiology Systems */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-purple-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-x-ray text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">أنظمة إدارة الأشعة</h3>
                <p className="text-gray-600">حلول متخصصة لأقسام الأشعة والتصوير الطبي</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-images text-purple-600 ml-2"></i>
                    أرشفة الصور الطبية
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• دعم معيار DICOM</li>
                    <li>• أرشفة آمنة ومضغوطة</li>
                    <li>• بحث سريع ومرن</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-file-medical-alt text-purple-600 ml-2"></i>
                    التقارير الإشعاعية
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• قوالب تقارير جاهزة</li>
                    <li>• توقيع إلكتروني</li>
                    <li>• تكامل مع أنظمة المستشفى</li>
                  </ul>
                </div>
              </div>

              <a href="/contact?demo=radiology" className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                اطلب عرضاً تقديمياً
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">فوائد حلولنا الطبية</h2>
            <p className="text-xl text-gray-600">كيف تحسن حلولنا التقنية من جودة الرعاية الصحية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تحسين الكفاءة</h3>
              <p className="text-gray-600">تقليل الأخطاء الطبية وزيادة سرعة الخدمة بنسبة تصل إلى 60%</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">أمان المعلومات</h3>
              <p className="text-gray-600">حماية كاملة لبيانات المرضى وفقاً لمعايير الأمان الطبي العالمية</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">توفير الوقت</h3>
              <p className="text-gray-600">تقليل وقت الانتظار وتسريع إجراءات التسجيل والفحص</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-hand-holding-usd text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">خفض التكاليف</h3>
              <p className="text-gray-600">تقليل التكاليف التشغيلية وتحسين إدارة الموارد</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">رضا المرضى</h3>
              <p className="text-gray-600">تحسين تجربة المريض وزيادة معدلات الرضا</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-bar text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تقارير متقدمة</h3>
              <p className="text-gray-600">تحليلات شاملة ورؤى واضحة لاتخاذ قرارات أفضل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Wireframe Background */}
      <section className="relative" style={{
        background: 'linear-gradient(135deg, rgba(87, 42, 110, 0.95) 0%, rgba(87, 42, 110, 0.9) 50%, rgba(228, 35, 123, 0.9) 100%)'
      }}>
        <div id="cta-wireframe" className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <WireframeBackground nodeCount={25} containerId="cta-wireframe" />
        </div>
        <div className="container mx-auto px-4 py-20 text-center text-white cta-content">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهزون لتطوير القطاع الصحي معكم
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              دعنا نساعدك في تحسين جودة الرعاية الصحية من خلال حلولنا التقنية المتطورة
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                تواصل معنا
              </a>
              <a href="/contact?demo=healthcare" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                اطلب عرض تقديمي
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
