'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function BusinessPage() {
  const solutions = [
    {
      icon: 'fa-cogs',
      title: 'نظام تخطيط موارد المؤسسة ERP',
      description: 'نظام متكامل لإدارة جميع موارد المؤسسة من المالية والمحاسبة إلى الموارد البشرية والمخازن في منصة واحدة',
      features: [
        'إدارة المالية والمحاسبة',
        'إدارة الموارد البشرية',
        'إدارة المخازن والمشتريات',
        'التقارير والتحليلات'
      ],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: 'fa-handshake',
      title: 'نظام إدارة علاقات العملاء CRM',
      description: 'منصة شاملة لإدارة العلاقات مع العملاء وتحسين خدمة العملاء وزيادة المبيعات',
      features: [
        'إدارة قاعدة بيانات العملاء',
        'تتبع المبيعات والفرص',
        'أتمتة التسويق',
        'خدمة العملاء المتقدمة'
      ],
      gradient: 'from-blue-500 to-indigo-700'
    },
    {
      icon: 'fa-users',
      title: 'نظام إدارة الموارد البشرية',
      description: 'حل متكامل لإدارة الموارد البشرية من التوظيف والتدريب إلى الرواتب وتقييم الأداء',
      features: [
        'إدارة الموظفين والتوظيف',
        'نظام الحضور والانصراف',
        'إدارة الرواتب والمزايا',
        'تقييم الأداء والتطوير'
      ],
      gradient: 'from-green-500 to-emerald-700'
    },
    {
      icon: 'fa-calculator',
      title: 'نظام المحاسبة والمالية',
      description: 'نظام محاسبي شامل يدعم جميع العمليات المالية والمحاسبية مع التقارير المالية المتقدمة',
      features: [
        'دليل الحسابات المرن',
        'القيود المحاسبية',
        'التقارير المالية',
        'إدارة الميزانيات'
      ],
      gradient: 'from-purple-500 to-violet-700'
    },
    {
      icon: 'fa-folder-open',
      title: 'نظام إدارة المستندات',
      description: 'حل متقدم لإدارة وأرشفة المستندات الرقمية مع إمكانيات البحث المتقدم والأمان العالي',
      features: [
        'أرشفة رقمية آمنة',
        'البحث المتقدم',
        'التوقيع الإلكتروني',
        'تدفق الموافقات'
      ],
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: 'fa-chart-pie',
      title: 'ذكاء الأعمال والتحليلات',
      description: 'أدوات تحليلية متطورة لاستخراج رؤى قيمة من بيانات الأعمال ودعم اتخاذ القرارات الاستراتيجية',
      features: [
        'لوحات معلومات تفاعلية',
        'تحليل البيانات المتقدم',
        'التقارير المخصصة',
        'التنبؤ والتوقعات'
      ],
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const industries = [
    { icon: 'fa-shopping-bag', title: 'التجارة الإلكترونية', description: 'حلول متكاملة للمتاجر الإلكترونية وإدارة الطلبات', gradient: 'from-red-500 to-pink-600' },
    { icon: 'fa-industry', title: 'التصنيع', description: 'أنظمة إدارة الإنتاج والجودة والصيانة', gradient: 'from-blue-500 to-cyan-600' },
    { icon: 'fa-utensils', title: 'المطاعم والضيافة', description: 'نقاط البيع وإدارة المطاعم والحجوزات', gradient: 'from-green-500 to-emerald-600' },
    { icon: 'fa-truck', title: 'الخدمات اللوجستية', description: 'إدارة النقل والتوزيع وتتبع الشحنات', gradient: 'from-purple-500 to-violet-600' }
  ];

  const features = [
    { icon: 'fa-rocket', title: 'التطوير السريع', description: 'منهجية تطوير مرنة تضمن تسليم المشاريع في الوقت المحدد', gradient: 'from-purple-600 to-purple-700' },
    { icon: 'fa-cog', title: 'التخصيص الكامل', description: 'حلول مخصصة تماماً لتلبية احتياجات كل عميل على حدة', gradient: 'from-purple-600 to-purple-700' },
    { icon: 'fa-chart-line', title: 'نتائج مثبتة', description: 'سجل حافل من النجاحات وتحسين أداء العملاء بشكل ملموس', gradient: 'from-purple-600 to-purple-700' },
    { icon: 'fa-headset', title: 'دعم مستمر', description: 'فريق دعم متخصص متاح على مدار الساعة لضمان استمرارية العمل', gradient: 'from-purple-600 to-purple-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="py-20 text-white" style={{
        background: 'linear-gradient(to right, #2563eb, #1e40af, #1e3a8a)'
      }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                حلول أعمال
                <span className="block text-yellow-300">متطورة ومبتكرة</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                نساعد الشركات والمؤسسات على تحسين كفاءتها وزيادة إنتاجيتها من خلال حلول تقنية متكاملة ومخصصة
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <a href="#solutions" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <i className="fas fa-rocket ml-2"></i>
                  اكتشف حلولنا
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center justify-center">
                  <i className="fas fa-phone ml-2"></i>
                  تواصل معنا
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-80 h-80 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                    <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <i className="fas fa-building text-orange-600 text-8xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              حلولنا <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">للأعمال</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من الحلول التقنية المتطورة التي تساعد الشركات على تحسين أدائها وزيادة ربحيتها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  <i className={`fas ${solution.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}><i className="fas fa-check text-orange-600 ml-2"></i>{feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors font-semibold">
                  اطلب المزيد من المعلومات
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              حلول <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">متخصصة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم حلولاً مخصصة لمختلف الصناعات والقطاعات التجارية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center border-t-4 border-orange-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${industry.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              لماذا <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">نحن</span>؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نتميز بخبرتنا الواسعة في مجال حلول الأعمال والتزامنا بتقديم أفضل الخدمات لعملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`fas ${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="هل أنت مستعد لتطوير أعمالك؟"
        subtitle="تواصل معنا اليوم واكتشف كيف يمكن لحلولنا التقنية أن تساعدك في تحقيق أهدافك التجارية"
        primaryButtonText="احجز استشارة مجانية"
        secondaryButtonText="شاهد منتجاتنا"
      />

      <Footer />
    </div>
  );
}
