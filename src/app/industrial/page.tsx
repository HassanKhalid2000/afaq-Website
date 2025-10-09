'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function IndustrialPage() {
  const solutions = [
    { icon: 'fa-cogs', title: 'نظام إدارة التصنيع', description: 'نظام شامل لإدارة العمليات الصناعية من التخطيط إلى التنفيذ والمراقبة', features: ['تخطيط ومراقبة الإنتاج', 'إدارة المخزون والمواد الخام', 'مراقبة الجودة والمطابقة', 'تقارير الأداء والإنتاجية'], gradient: 'from-orange-600 to-red-600' },
    { icon: 'fa-truck', title: 'إدارة سلسلة التوريد', description: 'حل متكامل لإدارة سلسلة التوريد من الموردين إلى العملاء', features: ['إدارة الموردين والشراكات', 'تتبع الشحنات والمخزون', 'تحسين مسارات التوزيع', 'إدارة المخاطر والامتثال'], gradient: 'from-amber-600 to-amber-700' },
    { icon: 'fa-wifi', title: 'إنترنت الأشياء والتصنيع الذكي', description: 'تطبيق تقنيات إنترنت الأشياء لتحويل المصانع إلى بيئات ذكية ومترابطة', features: ['أجهزة استشعار ذكية', 'مراقبة الأداء في الوقت الفعلي', 'صيانة تنبؤية', 'تحسين استهلاك الطاقة'], gradient: 'from-orange-600 to-red-600' },
    { icon: 'fa-medal', title: 'إدارة الجودة والمطابقة', description: 'نظام شامل لضمان الجودة والمطابقة للمعايير الدولية', features: ['إدارة معايير الجودة', 'اختبارات ومراجعات دورية', 'تتبع الشكاوى والإجراءات التصحيحية', 'إعداد تقارير المطابقة'], gradient: 'from-amber-600 to-amber-700' },
    { icon: 'fa-tools', title: 'إدارة الأصول والصيانة', description: 'نظام متقدم لإدارة الأصول والمعدات الصناعية مع جدولة الصيانة الوقائية', features: ['جرد وتتبع الأصول', 'جدولة الصيانة الدورية', 'إدارة قطع الغيار والمخزون', 'تحليل دورة الحياة للمعدات'], gradient: 'from-orange-600 to-red-600' },
    { icon: 'fa-chart-line', title: 'ذكاء الأعمال والتحليلات', description: 'حلول تحليلية متقدمة لتحويل البيانات الصناعية إلى رؤى قابلة للتنفيذ', features: ['لوحات تحكم تفاعلية', 'تحليل الأداء والإنتاجية', 'تنبؤات الطلب والمبيعات', 'تحليل التكاليف والربحية'], gradient: 'from-amber-600 to-amber-700' }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <section className="py-20 text-white" style={{ background: 'linear-gradient(to right, #ea580c, #dc2626, #b91c1c)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6"><i className="fas fa-industry text-6xl opacity-90"></i></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">حلول القطاع الصناعي</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              نساعد الشركات الصناعية في تحقيق التحول الرقمي وتحسين الكفاءة التشغيلية من خلال حلول تكنولوجية متقدمة ومتكاملة
            </p>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">استشارة مجانية</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">تصفح الحلول</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">حلولنا للقطاع الصناعي</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">نقدم مجموعة شاملة من الحلول التكنولوجية المتخصصة لتطوير وتحسين العمليات الصناعية</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-orange-600">
                <div className="mb-6"><i className={`fas ${solution.icon} text-4xl text-orange-600`}></i></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="text-gray-600 space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (<li key={idx}><i className="fas fa-check text-orange-600 ml-2"></i>{feature}</li>))}
                </ul>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">اعرف المزيد</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="هل أنت مستعد لتطوير قطاعك الصناعي؟" subtitle="احجز استشارة مجانية مع خبرائنا واكتشف كيف يمكن لحلولنا أن تحدث نقلة نوعية في عملياتك الصناعية" />
      <Footer />
    </div>
  );
}
