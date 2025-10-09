'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function FinancePage() {
  const solutions = [
    { icon: 'fa-university', title: 'نظام الخدمات المصرفية الأساسية', description: 'نظام شامل لإدارة العمليات المصرفية الأساسية مع دعم المعاملات الرقمية', features: ['إدارة الحسابات والعملاء', 'معالجة المعاملات في الوقت الفعلي', 'إدارة القروض والائتمان', 'تقارير مالية متقدمة'], gradient: 'from-blue-500 to-blue-800' },
    { icon: 'fa-credit-card', title: 'بوابة الدفع الإلكتروني', description: 'حل متكامل لمعالجة المدفوعات الإلكترونية مع دعم جميع طرق الدفع', features: ['دعم بطاقات الائتمان والخصم', 'محافظ رقمية ومدفوعات موبايل', 'حماية ضد الاحتيال', 'تشفير متقدم للبيانات'], gradient: 'from-green-500 to-green-700' },
    { icon: 'fa-shield-alt', title: 'إدارة المخاطر والامتثال', description: 'نظام متقدم لإدارة المخاطر المالية وضمان الامتثال للوائح التنظيمية', features: ['تحليل وتقييم المخاطر', 'مراقبة الامتثال التنظيمي', 'تقارير المراجعة والتدقيق', 'كشف الأنشطة المشبوهة'], gradient: 'from-blue-500 to-blue-800' },
    { icon: 'fa-chart-line', title: 'إدارة الثروات والاستثمار', description: 'منصة شاملة لإدارة الثروات والاستثمارات مع أدوات تحليل متقدمة', features: ['إدارة المحافظ الاستثمارية', 'تحليل الأسواق المالية', 'استشارات استثمارية ذكية', 'تقارير الأداء التفصيلية'], gradient: 'from-green-500 to-green-700' },
    { icon: 'fa-users', title: 'إدارة علاقات العملاء المصرفية', description: 'نظام متطور لإدارة علاقات العملاء المصرفية مع تحليل سلوك العملاء', features: ['ملفات العملاء الشاملة', 'تحليل سلوك العملاء', 'حملات تسويقية مستهدفة', 'دعم عملاء متعدد القنوات'], gradient: 'from-blue-500 to-blue-800' },
    { icon: 'fa-mobile-alt', title: 'الخدمات المصرفية عبر الهاتف', description: 'تطبيق مصرفي متطور للهواتف الذكية مع واجهة سهلة الاستخدام', features: ['واجهة مستخدم بديهية', 'المصادقة الحيوم ترية', 'التحويلات السريعة', 'إشعارات فورية للمعاملات'], gradient: 'from-green-500 to-green-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <section className="py-20 text-white" style={{ background: 'linear-gradient(to bottom right, #10b981, #059669, #047857)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6"><i className="fas fa-chart-pie text-6xl opacity-90"></i></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">حلول القطاع المالي</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">نمكن المؤسسات المالية من تحقيق التحول الرقمي وتعزيز الأمان المالي من خلال حلول تكنولوجية مبتكرة</p>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">استشارة مجانية</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">تصفح الحلول</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">حلولنا للقطاع المالي</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">نقدم مجموعة شاملة من الحلول التكنولوجية المتخصصة للمؤسسات المالية والمصرفية</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-green-600">
                <div className="mb-6"><i className={`fas ${solution.icon} text-4xl text-green-600`}></i></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="text-gray-600 space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (<li key={idx}><i className="fas fa-check text-green-600 ml-2"></i>{feature}</li>))}
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">اعرف المزيد</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="هل أنت مستعد لتطوير خدماتك المالية؟" subtitle="احجز استشارة مجانية مع خبرائنا واكتشف كيف يمكن لحلولنا أن تعزز من كفاءة وأمان مؤسستك المالية" />
      <Footer />
    </div>
  );
}
