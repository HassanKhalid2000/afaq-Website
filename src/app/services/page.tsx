import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Header />

      <PageHeader
        title="خدماتنا"
        subtitle="مجموعة شاملة من الخدمات التقنية المتطورة لدعم نمو أعمالك"
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              خدمات متكاملة لجميع احتياجاتك التقنية
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{
                background: 'linear-gradient(to right, #582a6e, #e3237b)'
              }}
            ></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              نقدم مجموعة شاملة من الخدمات التقنية المتخصصة التي تغطي كافة جوانب التحول الرقمي والتطوير التقني
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Design & Development */}
      <section id="design-development" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center ml-4">
                <i className="fas fa-paint-brush text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">خدمات التصميم والتطوير الرقمي</h2>
                <p className="text-gray-600 text-lg">حلول إبداعية متقدمة للهوية الرقمية</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-globe text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تطوير مواقع الويب</h3>
              <p className="text-gray-600 mb-4">تطوير مواقع ويب حسب الطلب، تصميم متجاوب ومتوافق مع الأجهزة</p>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> تصميم متجاوب</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> محسن لمحركات البحث</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> أداء عالي</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-code text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تطوير البرمجيات</h3>
              <p className="text-gray-600 mb-4">تطوير برمجيات مخصصة للمؤسسات والأفراد</p>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> حلول مخصصة</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> تقنيات حديثة</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> دعم مستمر</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تطوير التطبيقات</h3>
              <p className="text-gray-600 mb-4">تطوير تطبيقات الهواتف (iOS / Android) حسب الحاجة</p>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> متعدد المنصات</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> واجهة متطورة</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> أداء محسن</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-palette text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التصميم الجرافيكي</h3>
              <p className="text-gray-600 mb-4">تصميم شعارات، هوية بصرية، مواد تسويقية</p>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> هوية بصرية متميزة</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> مواد تسويقية</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 ml-2"></i> تصميم احترافي</li>
              </ul>
            </div>
          </div>

          {/* Additional Service Item - Media Production */}
          <div className="mt-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-video text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">الإنتاج الإعلامي</h3>
                  <p className="text-gray-600">إنتاج محتوى مرئي وصوتي، فيديوهات تسويقية، عروض</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <i className="fas fa-camera text-3xl text-indigo-500 mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">التصوير الاحترافي</h4>
                  <p className="text-gray-600 text-sm">تصوير فوتوغرافي ومقاطع فيديو عالية الجودة</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-film text-3xl text-indigo-500 mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">الإنتاج والمونتاج</h4>
                  <p className="text-gray-600 text-sm">إنتاج ومونتاج المحتوى المرئي بأحدث التقنيات</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-bullhorn text-3xl text-indigo-500 mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">المحتوى التسويقي</h4>
                  <p className="text-gray-600 text-sm">إنتاج محتوى تسويقي مؤثر وجذاب</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Infrastructure & Hosting */}
      <section id="infrastructure" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center ml-4">
                <i className="fas fa-server text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">خدمات البنية التحتية والاستضافة</h2>
                <p className="text-gray-600 text-lg">حلول متطورة للاستضافة والشبكات</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-cloud text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">استضافة الويب</h3>
              <p className="text-gray-700 mb-6 text-center">استضافة مواقع، باقات مختلفة حسب حجم الموقع واحتياجات العميل</p>

              <div className="space-y-4">
                <div className="p-3 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-rocket text-blue-600"></i>
                    <span className="text-gray-700 font-medium">استضافة عالية الأداء</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-shield-alt text-blue-600"></i>
                    <span className="text-gray-700 font-medium">حماية متقدمة</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-headset text-blue-600"></i>
                    <span className="text-gray-700 font-medium">دعم فني 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-network-wired text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">الشبكات والأمن</h3>
              <p className="text-gray-700 mb-6 text-center">استشارات شبكات وحماية المعلومات</p>

              <div className="space-y-4">
                <div className="p-3 rounded-lg hover:bg-green-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-sitemap text-green-600"></i>
                    <span className="text-gray-700 font-medium">تصميم الشبكات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg hover:bg-green-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-lock text-green-600"></i>
                    <span className="text-gray-700 font-medium">أمن المعلومات</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg hover:bg-green-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-tools text-green-600"></i>
                    <span className="text-gray-700 font-medium">الصيانة والدعم</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">أنظمة المباني الذكية</h3>
              <p className="text-gray-700 mb-6 text-center">أنظمة التحكم الذكية للمباني والمنازل (BMS / Smart Home)</p>

              <div className="space-y-4">
                <div className="p-3 rounded-lg hover:bg-purple-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-thermometer-half text-purple-600"></i>
                    <span className="text-gray-700 font-medium">التحكم بالمناخ</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg hover:bg-purple-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-lightbulb text-purple-600"></i>
                    <span className="text-gray-700 font-medium">الإضاءة الذكية</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg hover:bg-purple-200 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-video text-purple-600"></i>
                    <span className="text-gray-700 font-medium">أنظمة المراقبة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Consulting Services */}
      <section id="consulting" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center ml-4">
                <i className="fas fa-user-tie text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">خدمات الاستشارات المتخصصة</h2>
                <p className="text-gray-600 text-lg">استشارات تقنية وإدارية متخصصة</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-laptop-code text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">استشارات تقنية المعلومات</h3>
              <p className="text-gray-600 text-sm">استشارات شاملة في مجال التقنية والحلول الرقمية</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-cogs text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">إعادة هندسة الأعمال</h3>
              <p className="text-gray-600 text-sm">تحسين العمليات الداخلية وتقليل الهدر وزيادة الكفاءة</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">تحليل الأعمال</h3>
              <p className="text-gray-600 text-sm">دراسة العمليات وتحليل البيانات لدعم اتخاذ القرار</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-digital-tachograph text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">التحول الرقمي</h3>
              <p className="text-gray-600 text-sm">استشارات التحول الرقمي والتطوير التقني</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: IT Infrastructure */}
      <section id="it-infrastructure" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center ml-4">
                <i className="fas fa-database text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">خدمات البنية التحتية لتقنية المعلومات</h2>
                <p className="text-gray-600 text-lg">حلول البنية التحتية المتقدمة والخوادم</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">خدماتنا الأساسية</h3>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-sitemap text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">تصميم الشبكات المتطورة</h4>
                      <p className="text-gray-600 text-sm">شبكات عالية الأداء ومرونة في التوسع</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-server text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">إدارة الخوادم والتخزين</h4>
                      <p className="text-gray-600 text-sm">حلول خوادم متطورة وأنظمة تخزين آمنة</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <i className="fas fa-tools text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">الصيانة والدعم الفني</h4>
                      <p className="text-gray-600 text-sm">دعم فني شامل ومستمر على مدار الساعة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">المميزات التقنية</h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-tachometer-alt text-3xl mb-3" style={{ color: '#582a6e' }}></i>
                  <h4 className="font-bold text-gray-800">أداء عالي</h4>
                  <p className="text-gray-600 text-sm">سرعة ومرونة في الأداء</p>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-shield-alt text-3xl mb-3" style={{ color: '#582a6e' }}></i>
                  <h4 className="font-bold text-gray-800">أمان متقدم</h4>
                  <p className="text-gray-600 text-sm">حماية شاملة للبيانات</p>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-expand-arrows-alt text-3xl mb-3" style={{ color: '#582a6e' }}></i>
                  <h4 className="font-bold text-gray-800">قابلية التوسع</h4>
                  <p className="text-gray-600 text-sm">مرونة في التوسع المستقبلي</p>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-clock text-3xl mb-3" style={{ color: '#582a6e' }}></i>
                  <h4 className="font-bold text-gray-800">استمرارية العمل</h4>
                  <p className="text-gray-600 text-sm">ضمان استمرار الخدمة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Cybersecurity */}
      <section id="cybersecurity" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center ml-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">الأمن السيبراني</h2>
                <p className="text-gray-600 text-lg">حلول أمنية شاملة لحماية البيانات والأنظمة</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">حلول أمنية شاملة لحماية البيانات والأنظمة من التهديدات السيبرانية</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">ISO 27001</h4>
                <p className="text-gray-600">نظام إدارة أمن المعلومات وفقاً للمعايير الدولية</p>
              </div>

              <div className="text-center p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-eye text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">SOC Implementation</h4>
                <p className="text-gray-600">مركز عمليات الأمان لمراقبة والاستجابة للتهديدات</p>
              </div>

              <div className="text-center p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bug text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">IDS/IPS Systems</h4>
                <p className="text-gray-600">أنظمة كشف ومنع التسلل المتطورة</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
              <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">خدمات إضافية</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <i className="fas fa-search text-2xl text-red-500 mb-2"></i>
                  <p className="text-gray-700 font-medium">تقييم المخاطر</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-user-shield text-2xl text-red-500 mb-2"></i>
                  <p className="text-gray-700 font-medium">اختبار الاختراق</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-graduation-cap text-2xl text-red-500 mb-2"></i>
                  <p className="text-gray-700 font-medium">تدريب الموظفين</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-clipboard-check text-2xl text-red-500 mb-2"></i>
                  <p className="text-gray-700 font-medium">مراجعة الامتثال</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Cloud Computing */}
      <section id="cloud" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center ml-4">
                <i className="fas fa-cloud text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">الحوسبة السحابية</h2>
                <p className="text-gray-600 text-lg">خدمات سحابية متقدمة لتحسين الكفاءة وتقليل التكاليف</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-layer-group text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">SaaS Solutions</h3>
                <p className="text-gray-600">حلول البرمجيات كخدمة</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-cyan-600"></i>
                  <span className="text-gray-700">تطبيقات جاهزة للاستخدام</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-cyan-600"></i>
                  <span className="text-gray-700">تحديثات تلقائية</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-cyan-600"></i>
                  <span className="text-gray-700">وصول من أي مكان</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-cyan-600"></i>
                  <span className="text-gray-700">تكلفة مرنة</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-exchange-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Cloud Migration</h3>
                <p className="text-gray-600">نقل الأنظمة إلى السحابة</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span className="text-gray-700">تقييم البنية الحالية</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span className="text-gray-700">خطة نقل مخصصة</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span className="text-gray-700">نقل آمن للبيانات</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span className="text-gray-700">تدريب الفريق</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-network-wired text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Hybrid Cloud</h3>
                <p className="text-gray-600">الحلول السحابية المختلطة</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-purple-600"></i>
                  <span className="text-gray-700">مرونة في التشغيل</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-purple-600"></i>
                  <span className="text-gray-700">توزيع الأحمال الذكي</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-purple-600"></i>
                  <span className="text-gray-700">تحكم أمني متقدم</span>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fas fa-check-circle text-purple-600"></i>
                  <span className="text-gray-700">تكامل سلس</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 7: Networks & Communications */}
      <section id="networks" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center ml-4">
                <i className="fas fa-broadcast-tower text-white text-2xl"></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">الشبكات والاتصالات</h2>
                <p className="text-gray-600 text-lg">حلول شبكات متطورة وأنظمة اتصالات حديثة للمؤسسات</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-route text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">SD-WAN Technology</h3>
                <p className="text-gray-600 mb-6">تقنية الشبكات المعرفة برمجياً</p>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">مرونة في الإدارة</h4>
                  <p className="text-gray-600 text-sm">إدارة مركزية للشبكة بمرونة عالية</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">تحسين الأداء</h4>
                  <p className="text-gray-600 text-sm">توجيه ذكي للبيانات وتحسين السرعة</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">خفض التكاليف</h4>
                  <p className="text-gray-600 text-sm">تقليل تكاليف الاتصالات بكفاءة</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">VoIP Systems</h3>
                <p className="text-gray-600 mb-6">أنظمة الصوت عبر الإنترنت</p>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">جودة صوت عالية</h4>
                  <p className="text-gray-600 text-sm">صوت واضح وجودة اتصال ممتازة</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">مميزات متقدمة</h4>
                  <p className="text-gray-600 text-sm">خدمات متقدمة مثل مؤتمرات الفيديو</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">سهولة الإدارة</h4>
                  <p className="text-gray-600 text-sm">إدارة مبسطة وواجهة سهلة الاستخدام</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Network Security</h3>
                <p className="text-gray-600 mb-6">أمان الشبكات المتقدم</p>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">حماية شاملة</h4>
                  <p className="text-gray-600 text-sm">حماية متعددة الطبقات ضد التهديدات</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">مراقبة مستمرة</h4>
                  <p className="text-gray-600 text-sm">مراقبة الشبكة على مدار الساعة</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-1">استجابة سريعة</h4>
                  <p className="text-gray-600 text-sm">استجابة فورية للتهديدات الأمنية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="اختر الخدمة التي تناسب احتياجاتك"
        subtitle="فريق خبرائنا مستعد لمساعدتك في اختيار وتنفيذ الحلول التقنية المناسبة لأعمالك"
        primaryButtonText="احجز استشارة مجانية"
        primaryButtonHref="/contact?consultation=true"
        secondaryButtonText="تواصل معنا"
        secondaryButtonHref="/contact"
      />
      <Footer />
    </>
  );
}