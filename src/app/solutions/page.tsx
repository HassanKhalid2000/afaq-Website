import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />

      {/* Page Header */}
      <section className="py-20" style={{
        background: 'linear-gradient(to bottom right, #572a6e, #572a6e, #e4237b)'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">حلولنا المتكاملة</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              حلول تقنية متطورة ومبتكرة لتلبية احتياجات مختلف القطاعات
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              حلول شاملة لتحديات اليوم ومستقبل الغد
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{
              background: 'linear-gradient(to right, #572a6e, #e4237b)'
            }}></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              نقدم مجموعة متكاملة من الحلول التقنية المبتكرة التي تعزز من كفاءة أعمالك وتحقق أهدافك الاستراتيجية
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Governance Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                background: 'linear-gradient(to bottom right, #572a6e, #572a6e)'
              }}>
                <i className="fas fa-balance-scale text-white text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">الحوكمة المؤسسية</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نؤمن أن الحوكمة المؤسسية هي أساس نجاح أي مؤسسة، لذلك نقدم حلولاً متكاملة تركز على:
              </p>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold" style={{ color: '#572a6e' }}>الالتزام • الشفافية • التميز</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">الامتثال والمعايير</h3>
              </div>

              <p className="text-gray-700 mb-6 text-center">نلتزم بأعلى معايير الجودة العالمية والمحلية</p>

              <div className="space-y-4">
                <div className="p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-shield-alt text-blue-600"></i>
                    <div>
                      <h4 className="font-bold text-gray-800">ISO 27001</h4>
                      <p className="text-gray-600 text-sm">لأمن المعلومات</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-cogs text-blue-600"></i>
                    <div>
                      <h4 className="font-bold text-gray-800">COBIT</h4>
                      <p className="text-gray-600 text-sm">لحوكمة تقنية المعلومات</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-handshake text-blue-600"></i>
                    <div>
                      <h4 className="font-bold text-gray-800">ITIL</h4>
                      <p className="text-gray-600 text-sm">لإدارة الخدمات</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">إدارة المخاطر</h3>
              </div>

              <p className="text-gray-700 mb-6 text-center">نطبق أفضل الممارسات في تحديد وإدارة المخاطر التقنية والتشغيلية</p>

              <div className="space-y-4">
                <div className="p-4 rounded-lg hover:bg-red-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-search text-red-600"></i>
                    <span className="text-gray-700 font-medium">تقييم المخاطر الدوري</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg hover:bg-red-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-road text-red-600"></i>
                    <span className="text-gray-700 font-medium">خطط الاستمرارية</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg hover:bg-red-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-bell text-red-600"></i>
                    <span className="text-gray-700 font-medium">الاستجابة للحوادث</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">قياس الأداء</h3>
              </div>

              <p className="text-gray-700 mb-6 text-center">نعتمد على مؤشرات أداء واضحة لضمان تحقيق أهداف العملاء</p>

              <div className="space-y-4">
                <div className="p-4 rounded-lg hover:bg-green-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-tachometer-alt text-green-600"></i>
                    <span className="text-gray-700 font-medium">KPIs متقدمة</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg hover:bg-green-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-file-alt text-green-600"></i>
                    <span className="text-gray-700 font-medium">تقارير دورية شاملة</span>
                  </div>
                </div>
                <div className="p-4 rounded-lg hover:bg-green-50 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-arrow-up text-green-600"></i>
                    <span className="text-gray-700 font-medium">تحسين مستمر</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Business Intelligence */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-brain text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">تحليل الأعمال وذكاء الأعمال (BI)</h3>
                  <p className="text-purple-700 font-medium">أدوات ذكية لتحويل البيانات إلى قرارات استراتيجية فعّالة</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-chart-bar text-purple-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">تحليل البيانات</h4>
                  <p className="text-gray-600 text-sm">استخراج رؤى قيمة من بياناتك</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-chart-line text-purple-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">التنبؤ والتحليل</h4>
                  <p className="text-gray-600 text-sm">توقعات مستقبلية دقيقة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-tachometer-alt text-purple-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">لوحات القيادة</h4>
                  <p className="text-gray-600 text-sm">عرض مباشر للمؤشرات الحيوية</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-users text-purple-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">تحليل العملاء</h4>
                  <p className="text-gray-600 text-sm">فهم عميق لسلوك واحتياجات العملاء</p>
                </div>
              </div>
            </div>

            {/* Information Security */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 shadow-lg border border-teal-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">أمن المعلومات</h3>
                  <p className="text-teal-700 font-medium">حماية شاملة لأصولك الرقمية من التهديدات الحديثة</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-lock text-teal-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">الحماية السيبرانية</h4>
                  <p className="text-gray-600 text-sm">دفاع متقدم ضد التهديدات</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-key text-teal-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">التشفير والأمان</h4>
                  <p className="text-gray-600 text-sm">حماية معلوماتك الحساسة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-user-shield text-teal-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">اختبار الاختراق</h4>
                  <p className="text-gray-600 text-sm">اكتشاف الثغرات قبل المهاجمين</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-eye text-teal-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">المراقبة الأمنية</h4>
                  <p className="text-gray-600 text-sm">رصد مستمر للتهديدات</p>
                </div>
              </div>
            </div>

            {/* Monitoring & Security */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-video text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">المراقبة والأمان المادي</h3>
                  <p className="text-blue-700 font-medium">أنظمة مراقبة متقدمة لحماية منشآتكم على مدار الساعة</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-camera text-blue-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">كاميرات المراقبة</h4>
                  <p className="text-gray-600 text-sm">تقنيات تصوير عالية الدقة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-fingerprint text-blue-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">الأنظمة البيومترية</h4>
                  <p className="text-gray-600 text-sm">تحكم دقيق بالوصول</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-door-open text-blue-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">أنظمة الدخول</h4>
                  <p className="text-gray-600 text-sm">إدارة ذكية للدخول والخروج</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-bell text-blue-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">أنظمة الإنذار</h4>
                  <p className="text-gray-600 text-sm">استجابة فورية للحوادث</p>
                </div>
              </div>
            </div>

            {/* Digital Transformation */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-lg border border-indigo-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-rocket text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">التحول الرقمي</h3>
                  <p className="text-indigo-700 font-medium">مرافقتكم في رحلة رقمنة أعمالكم بأحدث التقنيات</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-sitemap text-indigo-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">استراتيجية التحول</h4>
                  <p className="text-gray-600 text-sm">خارطة طريق واضحة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-robot text-indigo-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">الأتمتة</h4>
                  <p className="text-gray-600 text-sm">تبسيط العمليات وزيادة الكفاءة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-cloud text-indigo-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">الحوسبة السحابية</h4>
                  <p className="text-gray-600 text-sm">مرونة وقابلية للتوسع</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-graduation-cap text-indigo-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">التدريب والدعم</h4>
                  <p className="text-gray-600 text-sm">تمكين فريق العمل</p>
                </div>
              </div>
            </div>

            {/* Smart Buildings */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-building text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">المباني الذكية</h3>
                  <p className="text-green-700 font-medium">تقنيات حديثة لإدارة المباني بكفاءة وتوفير الطاقة</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-thermometer-half text-green-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">التحكم بالمناخ</h4>
                  <p className="text-gray-600 text-sm">تكييف ذكي للبيئة الداخلية</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-lightbulb text-green-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">الإضاءة الذكية</h4>
                  <p className="text-gray-600 text-sm">توفير الطاقة وزيادة الراحة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-bolt text-green-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">إدارة الطاقة</h4>
                  <p className="text-gray-600 text-sm">تقليل الاستهلاك والتكاليف</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-mobile-alt text-green-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">التحكم عن بُعد</h4>
                  <p className="text-gray-600 text-sm">إدارة من أي مكان</p>
                </div>
              </div>
            </div>

            {/* Media Production */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg border border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center ml-4">
                  <i className="fas fa-film text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">الإنتاج الإعلامي</h3>
                  <p className="text-pink-700 font-medium">خدمات إنتاج احترافية بأحدث التقنيات والمعدات</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-video text-pink-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">الإنتاج المرئي</h4>
                  <p className="text-gray-600 text-sm">فيديوهات احترافية عالية الجودة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-microphone text-pink-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">الإنتاج الصوتي</h4>
                  <p className="text-gray-600 text-sm">استوديوهات تسجيل متطورة</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-palette text-pink-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">التصميم الإبداعي</h4>
                  <p className="text-gray-600 text-sm">جرافيك وموشن جرافيك</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <i className="fas fa-broadcast-tower text-pink-600 text-2xl mb-3"></i>
                  <h4 className="font-bold text-gray-800 mb-2">البث المباشر</h4>
                  <p className="text-gray-600 text-sm">بث احترافي متعدد المنصات</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        title="هل أنت مستعد لتطبيق الحل المناسب؟"
        subtitle="دعنا نساعدك في اختيار الحل الأمثل الذي يحقق أهدافك ويعزز نجاحك"
        primaryButtonText="تواصل معنا"
        primaryButtonHref="/contact"
        secondaryButtonText="اطلب استشارة"
        secondaryButtonHref="/contact?consultation=true"
      />

      <Footer />
    </div>
  );
}
