'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function SecurityPage() {
  const solutions = [
    { icon: 'fa-shield-alt', title: 'الأمن السيبراني المتقدم', description: 'حلول شاملة لحماية الأنظمة والشبكات من التهديدات السيبرانية المتطورة', features: ['جدران الحماية المتقدمة', 'أنظمة كشف التسلل', 'حماية من البرمجيات الخبيثة', 'تحليل التهديدات في الوقت الفعلي'], gradient: 'from-red-600 to-red-800' },
    { icon: 'fa-lock', title: 'إدارة الهويات والصلاحيات', description: 'نظام متطور لإدارة هويات المستخدمين والتحكم في الصلاحيات', features: ['مصادقة متعددة العوامل', 'إدارة مركزية للهويات', 'التحكم في الوصول', 'مراقبة النشاطات الأمنية'], gradient: 'from-red-500 to-red-700' },
    { icon: 'fa-database', title: 'حماية البيانات والتشفير', description: 'حلول متقدمة لحماية البيانات الحساسة وتشفيرها', features: ['تشفير البيانات المتقدم', 'إدارة المفاتيح الأمنية', 'حماية قواعد البيانات', 'منع تسرب البيانات'], gradient: 'from-red-600 to-red-800' },
    { icon: 'fa-binoculars', title: 'مراكز العمليات الأمنية SOC', description: 'مراكز متطورة لمراقبة وإدارة الأمن السيبراني على مدار الساعة', features: ['مراقبة أمنية 24/7', 'تحليل الأحداث الأمنية', 'الاستجابة للحوادث', 'التقارير والتحليلات'], gradient: 'from-red-500 to-red-700' },
    { icon: 'fa-user-shield', title: 'التدريب والتوعية الأمنية', description: 'برامج تدريبية شاملة لرفع مستوى الوعي الأمني لدى الموظفين', features: ['تدريب على الأمن السيبراني', 'اختبارات التصيد الاحتيالي', 'سياسات الأمن المعلوماتي', 'شهادات أمنية معتمدة'], gradient: 'from-red-600 to-red-800' },
    { icon: 'fa-clipboard-check', title: 'الامتثال والحوكمة الأمنية', description: 'ضمان الامتثال للمعايير واللوائح الأمنية الدولية', features: ['تقييم الامتثال', 'إدارة السياسات الأمنية', 'التدقيق الأمني', 'إدارة المخاطر الأمنية'], gradient: 'from-red-500 to-red-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <section className="py-20 text-white" style={{ background: 'linear-gradient(to bottom right, #dc2626, #b91c1c, #991b1b)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6"><i className="fas fa-shield-alt text-6xl opacity-90"></i></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">حلول القطاع الأمني</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">نحمي المؤسسات والأفراد من التهديدات السيبرانية والأمنية من خلال حلول تكنولوجية متقدمة وشاملة</p>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">تقييم أمني مجاني</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">تصفح الحلول</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">حلولنا للقطاع الأمني</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">نقدم مجموعة شاملة من الحلول الأمنية المتقدمة لحماية البيانات والأنظمة والأفراد من التهديدات المتطورة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-red-600">
                <div className="mb-6"><i className={`fas ${solution.icon} text-4xl text-red-600`}></i></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="text-gray-600 space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (<li key={idx}><i className="fas fa-check text-red-600 ml-2"></i>{feature}</li>))}
                </ul>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">اعرف المزيد</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="هل أنت مستعد لتأمين مؤسستك؟" subtitle="احصل على تقييم أمني مجاني واكتشف كيف يمكن لحلولنا أن تحمي بياناتك وأنظمتك من التهديدات السيبرانية" />
      <Footer />
    </div>
  );
}
