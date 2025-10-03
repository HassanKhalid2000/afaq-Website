'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function TelecommunicationsPage() {
  const solutions = [
    { icon: 'fa-network-wired', title: 'شبكات الجيل الخامس 5G', description: 'بناء وتطوير البنية التحتية لشبكات الجيل الخامس بأعلى المعايير العالمية', features: ['تصميم وتنفيذ شبكات 5G', 'تحسين الأداء والسعة', 'إدارة الطيف الترددي', 'دعم تطبيقات IoT'], gradient: 'from-indigo-500 to-purple-600' },
    { icon: 'fa-server', title: 'أنظمة إدارة الشبكات', description: 'حلول متقدمة لإدارة ومراقبة شبكات الاتصالات بكفاءة عالية', features: ['مراقبة الشبكة في الوقت الفعلي', 'إدارة الأداء والجودة', 'كشف الأعطال والإنذار المبكر', 'تحليل البيانات والتقارير'], gradient: 'from-blue-500 to-indigo-600' },
    { icon: 'fa-broadcast-tower', title: 'منصات إنترنت الأشياء IoT', description: 'منصات شاملة لإدارة أجهزة إنترنت الأشياء والتطبيقات المتصلة', features: ['إدارة الأجهزة المتصلة', 'تحليل البيانات في الوقت الفعلي', 'بروتوكولات اتصال متعددة', 'أمن وحماية البيانات'], gradient: 'from-purple-500 to-violet-600' },
    { icon: 'fa-chart-bar', title: 'تحليلات البيانات الضخمة', description: 'أدوات تحليلية متقدمة لاستخلاص رؤى قيمة من بيانات الشبكات والعملاء', features: ['تحليل سلوك المشتركين', 'تحسين تجربة العملاء', 'التنبؤ بالطلب والاستخدام', 'الكشف عن الاحتيال'], gradient: 'from-cyan-500 to-blue-600' },
    { icon: 'fa-cloud', title: 'الاتصالات السحابية', description: 'حلول اتصالات سحابية متطورة تدعم التحول الرقمي للمؤسسات', features: ['مراكز اتصال سحابية', 'أنظمة PBX افتراضية', 'خدمات الصوت عبر الإنترنت', 'التكامل مع التطبيقات السحابية'], gradient: 'from-blue-400 to-cyan-500' },
    { icon: 'fa-mobile-alt', title: 'تطبيقات الاتصالات المتنقلة', description: 'تطوير تطبيقات متنقلة متقدمة لمشغلي الاتصالات', features: ['إدارة الحسابات والخدمات', 'الدفع الإلكتروني', 'دعم العملاء الذكي', 'العروض والحملات التسويقية'], gradient: 'from-indigo-500 to-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <section className="py-20 text-white" style={{ background: 'linear-gradient(to bottom right, #6366f1, #4f46e5, #7c3aed)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6"><i className="fas fa-broadcast-tower text-6xl opacity-90"></i></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">حلول قطاع الاتصالات</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">نمكن مشغلي الاتصالات ومقدمي خدمات الإنترنت من تطوير شبكاتهم وخدماتهم من خلال حلول تكنولوجية مبتكرة</p>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">استشارة تقنية مجانية</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">تصفح الحلول</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">حلولنا لقطاع الاتصالات</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">نقدم مجموعة شاملة من الحلول التكنولوجية المتطورة لمشغلي الاتصالات ومزودي الخدمات الرقمية</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-indigo-600">
                <div className="mb-6"><i className={`fas ${solution.icon} text-4xl text-indigo-600`}></i></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="text-gray-600 space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (<li key={idx}><i className="fas fa-check text-indigo-600 ml-2"></i>{feature}</li>))}
                </ul>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">اعرف المزيد</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="هل أنت مستعد لتطوير شبكتك؟" subtitle="احجز استشارة تقنية مجانية مع خبرائنا واكتشف كيف يمكن لحلولنا أن تعزز من كفاءة وجودة خدمات الاتصالات" />
      <Footer />
    </div>
  );
}
