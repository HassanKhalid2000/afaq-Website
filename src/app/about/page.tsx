import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />

      <PageHeader
        title="عن الشركة"
        subtitle="تعرف على قصتنا ورؤيتنا في قيادة التحول الرقمي"
      />

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                النبذة التعريفية
              </h2>
              <div
                className="w-24 h-1 mx-auto mb-8"
                style={{
                  background: 'linear-gradient(to right, #582a6e, #e3237b)'
                }}
              ></div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                تأسست آفاق المتكاملة لتكنولوجيا المعلومات لتلبية المتطلبات المتطورة للسوق في مجالات الشبكات، البرمجيات، الحلول الأمنية وتقنية المعلومات. نحن متخصصون في تقديم حلول شاملة تعزز الكفاءة التشغيلية وتضمن سلامة المؤسسات والمرافق.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                مع التزامنا بالتميز، نستفيد من أحدث التقنيات العالمية لتوفير بيئات آمنة وموثوقة عبر مختلف القطاعات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(to bottom right, #A78BFA, #582a6e)'
                  }}
                >
                  <i className="fas fa-eye text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">الرؤية</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                أن نكون الخيار الأول للعملاء من خلال تقديم خدمات ذات جودة عالية تفوق توقعاتهم، عبر حلول تقنية مبتكرة تدعم استدامة النمو وتفتح آفاقاً جديدة للتطوير.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bullseye text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">الرسالة</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                نلتزم ببناء علاقات طويلة المدى مع عملائنا، عبر تقديم خدمات متميزة تعتمد على الابتكار والتقنيات الحديثة بما يضمن قيمة حقيقية وتجربة فريدة، مع تركيزنا على تحقيق رضا العملاء وتجاوز توقعاتهم في كل مشروع.
              </p>
            </div>

            {/* Goals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-trophy text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">الأهداف</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                نسعى إلى الريادة في قطاع تقنية المعلومات من خلال تقديم حلول وخدمات متكاملة، تلبي احتياجات العملاء وتواكب تطلعات السوق العالمي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              الحوكمة المؤسسية
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{
                background: 'linear-gradient(to right, #582a6e, #e3237b)'
              }}
            ></div>
            <p
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: '#582a6e' }}
            >
              الالتزام • الشفافية • التميز
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Compliance & Standards */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="text-center mb-6">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(to bottom right, #582a6e, #582a6e)'
                  }}
                >
                  <i className="fas fa-certificate text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">الامتثال والمعايير</h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 font-medium mb-4">
                  نلتزم بأعلى معايير الجودة العالمية والمحلية:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#582a6e' }}
                    >
                      <i className="fas fa-shield-alt text-white text-sm"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">ISO 27001</p>
                      <p className="text-sm text-gray-600">لأمن المعلومات</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#582a6e' }}
                    >
                      <i className="fas fa-cogs text-white text-sm"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">COBIT</p>
                      <p className="text-sm text-gray-600">لحوكمة تقنية المعلومات</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#582a6e' }}
                    >
                      <i className="fas fa-handshake text-white text-sm"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">ITIL</p>
                      <p className="text-sm text-gray-600">لإدارة الخدمات</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Management */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-exclamation-triangle text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">إدارة المخاطر</h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 font-medium mb-4">
                  نطبق أفضل الممارسات في تحديد وإدارة المخاطر التقنية والتشغيلية:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-search text-white text-sm"></i>
                    </div>
                    <p className="text-gray-700">تقييم المخاطر الدوري</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-road text-white text-sm"></i>
                    </div>
                    <p className="text-gray-700">خطط الاستمرارية</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-bell text-white text-sm"></i>
                    </div>
                    <p className="text-gray-700">الاستجابة للحوادث</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Measurement */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">قياس الأداء</h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 font-medium mb-4">
                  نعتمد على مؤشرات أداء واضحة لضمان تحقيق أهداف العملاء:
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-tachometer-alt text-white text-sm"></i>
                    </div>
                    <p className="text-gray-700">KPIs متقدمة</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-file-alt text-white text-sm"></i>
                    </div>
                    <p className="text-gray-700">تقارير دورية شاملة</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-arrow-up text-white text-sm"></i>
                    </div>
                    <p className="text-gray-700">تحسين مستمر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              لماذا تختار آفاق المتكاملة؟
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{
                background: 'linear-gradient(to right, #582a6e, #e3237b)'
              }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">خبرة متميزة</h3>
              <p className="text-gray-600 leading-relaxed">
                فريق من الخبراء المتخصصين في أحدث التقنيات العالمية
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">حلول مبتكرة</h3>
              <p className="text-gray-600 leading-relaxed">
                نقدم حلولاً تقنية مبتكرة تواكب أحدث التطورات العالمية
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-clock text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">دعم على مدار الساعة</h3>
              <p className="text-gray-600 leading-relaxed">
                دعم فني متواصل لضمان استمرارية أعمالك بكفاءة عالية
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">أمان موثوق</h3>
              <p className="text-gray-600 leading-relaxed">
                أعلى معايير الأمان والحماية لبياناتك ومعلوماتك الحساسة
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-star text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">جودة عالية</h3>
              <p className="text-gray-600 leading-relaxed">
                التزام بأعلى معايير الجودة في جميع مراحل تنفيذ المشاريع
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">شراكة طويلة المدى</h3>
              <p className="text-gray-600 leading-relaxed">
                نؤمن ببناء علاقات شراكة مستدامة مع عملائنا الكرام
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}