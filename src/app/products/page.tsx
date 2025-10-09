import Header from '../components/Header';
import Footer from '../components/Footer';
import WireframeBackground from '../components/WireframeBackground';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />

      {/* Page Header */}
      <section className="py-20" style={{
        background: 'linear-gradient(to bottom right, #572a6e, #572a6e, #e4237b)'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">المنتجات والأنظمة الجاهزة</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              مجموعة شاملة من الأنظمة الجاهزة المطورة خصيصاً لمختلف القطاعات
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              أنظمة متطورة جاهزة للتطبيق
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{
              background: 'linear-gradient(to right, #572a6e, #e4237b)'
            }}></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              نوفر لك مجموعة متكاملة من الأنظمة الجاهزة المطورة بأحدث التقنيات لتلبية احتياجات مختلف القطاعات
            </p>
          </div>
        </div>
      </section>

      {/* Category 1: Enterprise Management Systems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-building text-white text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">أنظمة إدارة المؤسسات</h2>
              <p className="text-xl text-gray-600">حلول متكاملة لإدارة جميع جوانب المؤسسة</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* ERP System */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-sitemap text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">نظام تخطيط موارد المؤسسات (ERP)</h3>
                <p className="text-gray-600">حلول شاملة لإدارة الموارد حسب حجم المؤسسة</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-blue-600"></i>
                    <span className="text-gray-700">إدارة الموارد المالية</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-blue-600"></i>
                    <span className="text-gray-700">إدارة المخزون والمشتريات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-blue-600"></i>
                    <span className="text-gray-700">إدارة الموارد البشرية</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-blue-600"></i>
                    <span className="text-gray-700">التقارير والتحليلات</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/contact?demo=erp" className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="block w-full border-2 border-blue-500 text-blue-500 text-center py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300">
                  تحميل كتيب PDF
                </a>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tasks text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">نظام إدارة المشاريع</h3>
                <p className="text-gray-600">إدارة المشاريع حسب متطلبات المشروع</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-green-600"></i>
                    <span className="text-gray-700">تخطيط وجدولة المشاريع</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-green-600"></i>
                    <span className="text-gray-700">إدارة الفرق والمهام</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-green-600"></i>
                    <span className="text-gray-700">متابعة التقدم والأداء</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-green-600"></i>
                    <span className="text-gray-700">إدارة الميزانيات</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/contact?demo=project" className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="block w-full border-2 border-green-500 text-green-500 text-center py-3 rounded-lg font-medium hover:bg-green-50 transition-all duration-300">
                  تحميل كتيب PDF
                </a>
              </div>
            </div>

            {/* Sales Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">نظام إدارة المبيعات</h3>
                <p className="text-gray-600">إدارة المبيعات حسب حجم المؤسسة</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-purple-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-purple-600"></i>
                    <span className="text-gray-700">إدارة العملاء المحتملين</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-purple-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-purple-600"></i>
                    <span className="text-gray-700">معالجة الطلبات والفواتير</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-purple-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-purple-600"></i>
                    <span className="text-gray-700">تتبع أداء المبيعات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-purple-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-purple-600"></i>
                    <span className="text-gray-700">التقارير التحليلية</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/contact?demo=sales" className="block w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="block w-full border-2 border-purple-500 text-purple-500 text-center py-3 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300">
                  تحميل كتيب PDF
                </a>
              </div>
            </div>

            {/* Accounting System */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calculator text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">نظام إدارة الحسابات</h3>
                <p className="text-gray-600">إدارة الحسابات حسب حجم المؤسسة</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-indigo-600"></i>
                    <span className="text-gray-700">دليل الحسابات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-indigo-600"></i>
                    <span className="text-gray-700">القيود اليومية</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-indigo-600"></i>
                    <span className="text-gray-700">القوائم المالية</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-indigo-600"></i>
                    <span className="text-gray-700">التقارير المحاسبية</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/contact?demo=accounting" className="block w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="block w-full border-2 border-indigo-500 text-indigo-500 text-center py-3 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300">
                  تحميل كتيب PDF
                </a>
              </div>
            </div>

            {/* CRM System */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">نظام إدارة علاقات العملاء (CRM)</h3>
                <p className="text-gray-600">3 باقات مختلفة لإدارة العملاء</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-pink-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-pink-600"></i>
                    <span className="text-gray-700">إدارة بيانات العملاء</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-pink-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-pink-600"></i>
                    <span className="text-gray-700">متابعة التفاعلات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-pink-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-pink-600"></i>
                    <span className="text-gray-700">الحملات التسويقية</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-pink-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-check-circle text-pink-600"></i>
                    <span className="text-gray-700">تحليل سلوك العملاء</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/contact?demo=crm" className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="block w-full border-2 border-pink-500 text-pink-500 text-center py-3 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300">
                  تحميل كتيب PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2: Healthcare Systems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heartbeat text-white text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">أنظمة القطاع الصحي</h2>
              <p className="text-xl text-gray-600">حلول متخصصة للمؤسسات الصحية</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Hospital Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hospital text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">نظام إدارة المستشفيات</h3>
                <p className="text-gray-600 text-sm">حسب حجم المستشفى</p>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-red-600 text-xs"></i>
                  <span className="text-gray-700">إدارة المرضى</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-red-600 text-xs"></i>
                  <span className="text-gray-700">الملفات الطبية</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-red-600 text-xs"></i>
                  <span className="text-gray-700">المواعيد والحجوزات</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-red-600 text-xs"></i>
                  <span className="text-gray-700">الفواتير والمحاسبة</span>
                </div>
              </div>

              <div className="space-y-3">
                <a href="/contact?demo=hospital" className="block w-full bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                  طلب Demo
                </a>
                <a href="#" className="block w-full border border-red-500 text-red-500 text-center py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-all duration-300">
                  كتيب PDF
                </a>
              </div>
            </div>

            {/* Clinic Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clinic-medical text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">نظام إدارة العيادات</h3>
                <p className="text-gray-600 text-sm">حسب حجم العيادة</p>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-blue-600 text-xs"></i>
                  <span className="text-gray-700">حجز المواعيد</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-blue-600 text-xs"></i>
                  <span className="text-gray-700">السجلات الطبية</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-blue-600 text-xs"></i>
                  <span className="text-gray-700">وصفات الأدوية</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-blue-600 text-xs"></i>
                  <span className="text-gray-700">إدارة الأطباء</span>
                </div>
              </div>

              <div className="space-y-3">
                <a href="/contact?demo=clinic" className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                  طلب Demo
                </a>
                <a href="#" className="block w-full border border-blue-500 text-blue-500 text-center py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-all duration-300">
                  كتيب PDF
                </a>
              </div>
            </div>

            {/* Pharmacy Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-pills text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">نظام إدارة الصيدليات</h3>
                <p className="text-gray-600 text-sm">حسب حجم الصيدلية</p>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-green-600 text-xs"></i>
                  <span className="text-gray-700">إدارة المخزون</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-green-600 text-xs"></i>
                  <span className="text-gray-700">صرف الأدوية</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-green-600 text-xs"></i>
                  <span className="text-gray-700">تواريخ الانتهاء</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-green-600 text-xs"></i>
                  <span className="text-gray-700">نقاط البيع</span>
                </div>
              </div>

              <div className="space-y-3">
                <a href="/contact?demo=pharmacy" className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                  طلب Demo
                </a>
                <a href="#" className="block w-full border border-green-500 text-green-500 text-center py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition-all duration-300">
                  كتيب PDF
                </a>
              </div>
            </div>

            {/* Radiology Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-x-ray text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">أنظمة إدارة وتقنيات الأشعة</h3>
                <p className="text-gray-600 text-sm">حلول متخصصة للأقسام الإشعاعية</p>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-purple-600 text-xs"></i>
                  <span className="text-gray-700">إدارة الفحوصات</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-purple-600 text-xs"></i>
                  <span className="text-gray-700">أرشفة الصور</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-purple-600 text-xs"></i>
                  <span className="text-gray-700">التقارير الإشعاعية</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check text-purple-600 text-xs"></i>
                  <span className="text-gray-700">DICOM Integration</span>
                </div>
              </div>

              <div className="space-y-3">
                <a href="/contact?demo=radiology" className="block w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                  طلب Demo
                </a>
                <a href="#" className="block w-full border border-purple-500 text-purple-500 text-center py-2 rounded-lg text-sm font-medium hover:bg-purple-50 transition-all duration-300">
                  كتيب PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3: Educational Systems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-graduation-cap text-white text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">أنظمة القطاع التعليمي</h2>
              <p className="text-xl text-gray-600">حلول تعليمية متقدمة</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* School Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-school text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">نظام إدارة المدارس</h3>
                  <p className="text-gray-600">حسب حجم المدرسة</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-user-graduate text-green-600"></i>
                    <span className="text-gray-700">إدارة الطلاب</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-chalkboard-teacher text-green-600"></i>
                    <span className="text-gray-700">إدارة المعلمين</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-calendar-check text-green-600"></i>
                    <span className="text-gray-700">الجداول الدراسية</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-chart-bar text-green-600"></i>
                    <span className="text-gray-700">الدرجات والتقييمات</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-users text-green-600"></i>
                    <span className="text-gray-700">تواصل أولياء الأمور</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-file-alt text-green-600"></i>
                    <span className="text-gray-700">التقارير الشاملة</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 space-x-reverse">
                <a href="/contact?demo=school" className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="flex-1 border-2 border-green-500 text-green-500 text-center py-3 rounded-lg font-medium hover:bg-green-50 transition-all duration-300">
                  كتيب PDF
                </a>
              </div>
            </div>

            {/* Learning Management System */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-laptop text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">نظام إدارة التعلم (LMS)</h3>
                  <p className="text-gray-600">حسب المؤسسة التعليمية</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-video text-blue-600"></i>
                    <span className="text-gray-700">المحتوى الرقمي</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-tasks text-blue-600"></i>
                    <span className="text-gray-700">الواجبات والتكليفات</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-comments text-blue-600"></i>
                    <span className="text-gray-700">المنتديات والنقاشات</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-clipboard-check text-blue-600"></i>
                    <span className="text-gray-700">الاختبارات الإلكترونية</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-certificate text-blue-600"></i>
                    <span className="text-gray-700">الشهادات والإنجازات</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-analytics text-blue-600"></i>
                    <span className="text-gray-700">تحليل الأداء</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 space-x-reverse">
                <a href="/contact?demo=lms" className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="flex-1 border-2 border-blue-500 text-blue-500 text-center py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300">
                  كتيب PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 4: Service Sector Systems */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-concierge-bell text-white text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">أنظمة قطاع الخدمات</h2>
              <p className="text-xl text-gray-600">حلول متخصصة لقطاعات الخدمات المختلفة</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hotel Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hotel text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">نظام إدارة الفنادق</h3>
                <p className="text-gray-600">حسب حجم الفندق</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-bed text-indigo-600"></i>
                    <span className="text-gray-700">إدارة الغرف والحجوزات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-users text-indigo-600"></i>
                    <span className="text-gray-700">إدارة النزلاء</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-credit-card text-indigo-600"></i>
                    <span className="text-gray-700">الفواتير والمدفوعات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-indigo-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-concierge-bell text-indigo-600"></i>
                    <span className="text-gray-700">خدمات النزلاء</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/contact?demo=hotel" className="block w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="block w-full border-2 border-indigo-500 text-indigo-500 text-center py-3 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300">
                  تحميل كتيب PDF
                </a>
              </div>
            </div>

            {/* Real Estate Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">نظام إدارة العقارات</h3>
                <p className="text-gray-600">حسب حجم الشركة</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-home text-orange-600"></i>
                    <span className="text-gray-700">إدارة العقارات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-handshake text-orange-600"></i>
                    <span className="text-gray-700">إدارة العملاء</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-file-contract text-orange-600"></i>
                    <span className="text-gray-700">العقود والإيجارات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-money-bill-wave text-orange-600"></i>
                    <span className="text-gray-700">المدفوعات والإيرادات</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/contact?demo=realestate" className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="block w-full border-2 border-orange-500 text-orange-500 text-center py-3 rounded-lg font-medium hover:bg-orange-50 transition-all duration-300">
                  تحميل كتيب PDF
                </a>
              </div>
            </div>

            {/* Scientific Journals Management */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-journal-whills text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">نظام إدارة الدوريات العلمية</h3>
                <p className="text-gray-600">حسب الطلب والمتطلبات الخاصة</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-teal-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-edit text-teal-600"></i>
                    <span className="text-gray-700">إدارة المقالات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-teal-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-user-check text-teal-600"></i>
                    <span className="text-gray-700">عملية المراجعة</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-teal-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-print text-teal-600"></i>
                    <span className="text-gray-700">النشر والتوزيع</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg transition-all duration-300 hover:bg-teal-50 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-chart-pie text-teal-600"></i>
                    <span className="text-gray-700">الإحصائيات والتقارير</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/contact?demo=journals" className="block w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  طلب تجربة Demo
                </a>
                <a href="#" className="block w-full border-2 border-teal-500 text-teal-500 text-center py-3 rounded-lg font-medium hover:bg-teal-50 transition-all duration-300">
                  تحميل كتيب PDF
                </a>
              </div>
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
              اختر النظام المناسب لمؤسستك
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              فريق خبرائنا مستعد لمساعدتك في اختيار وتنفيذ الأنظمة المناسبة لأعمالك
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a href="/contact?demo=all" style={{ color: '#572a6e' }} className="bg-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                طلب تجربة شاملة
              </a>
              <a href="/contact?consultation=true" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                استشارة مجانية
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
