'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function GovernmentPage() {
  const solutions = [
    {
      icon: 'fa-globe',
      title: 'منصة الحكومة الإلكترونية',
      description: 'منصة شاملة لتقديم الخدمات الحكومية الإلكترونية للمواطنين والشركات بكفاءة عالية',
      features: ['بوابة الخدمات الموحدة', 'نظام الهوية الرقمية', 'المدفوعات الإلكترونية', 'تتبع الطلبات والمعاملات'],
      color: 'blue'
    },
    {
      icon: 'fa-file-alt',
      title: 'إدارة الوثائق الرقمية',
      description: 'نظام متقدم لرقمنة وإدارة الوثائق الحكومية مع ضمان الأمان والاستعلام السريع',
      features: ['أرشفة إلكترونية آمنة', 'البحث المتقدم والفهرسة', 'تدفق الموافقات الآلي', 'التوقيع الإلكتروني المعتمد'],
      color: 'green'
    },
    {
      icon: 'fa-city',
      title: 'المدن الذكية',
      description: 'حلول متكاملة لتطوير المدن الذكية وإدارة البنية التحتية بكفاءة عالية',
      features: ['أنظمة النقل الذكية', 'إدارة الطاقة والمياه', 'شبكة الإضاءة الذكية', 'مراقبة جودة الهواء'],
      color: 'purple'
    },
    {
      icon: 'fa-chart-line',
      title: 'تحليل البيانات الحكومية',
      description: 'أدوات تحليلية متقدمة لاستخراج رؤى قيمة من البيانات الحكومية ودعم اتخاذ القرار',
      features: ['لوحات مؤشرات الأداء', 'التحليل التنبؤي', 'التقارير التفاعلية', 'مراقبة الأداء المؤسسي'],
      color: 'orange'
    },
    {
      icon: 'fa-shield-alt',
      title: 'الأمن السيبراني الحكومي',
      description: 'حلول أمنية متطورة لحماية البيانات الحكومية والبنية التحتية الرقمية',
      features: ['مراكز العمليات الأمنية', 'حماية البيانات الحساسة', 'أنظمة كشف التسلل', 'إدارة الهويات والصلاحيات'],
      color: 'red'
    },
    {
      icon: 'fa-tasks',
      title: 'إدارة سير العمل',
      description: 'أنظمة متقدمة لأتمتة العمليات الحكومية وتحسين كفاءة الإجراءات الإدارية',
      features: ['أتمتة العمليات الإدارية', 'تتبع المعاملات المباشر', 'إدارة المهام والمواعيد', 'نظام الإشعارات الذكية'],
      color: 'teal'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 30%, #1e40af 70%, #1e3a8a 100%)' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                حلول رقمية
                <span className="block text-yellow-300">للقطاع الحكومي</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                نساعد المؤسسات الحكومية على تحقيق التحول الرقمي وتطوير الخدمات العامة الذكية
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <a href="#solutions" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <i className="fas fa-rocket ml-2"></i>اكتشف حلولنا
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                  <i className="fas fa-phone ml-2"></i>تواصل معنا
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-96 h-96 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="w-80 h-80 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <i className="fas fa-landmark text-blue-600 text-8xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              حلولنا <span className="text-blue-600">الحكومية</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم حلولاً متطورة للمؤسسات الحكومية لتحقيق التحول الرقمي وتطوير الخدمات العامة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-br from-${solution.color}-500 to-${solution.color}-700 rounded-lg flex items-center justify-center mb-6`}>
                  <i className={`fas ${solution.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}><i className="fas fa-check text-blue-600 ml-2"></i>{feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  اطلب المزيد من المعلومات
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="هل أنت مستعد لتطوير مؤسستك الحكومية؟"
        subtitle="تواصل معنا اليوم واكتشف كيف يمكن لحلولنا التقنية أن تساعدك في تحقيق التحول الرقمي"
      />

      <Footer />
    </div>
  );
}
