'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function EducationPage() {
  const solutions = [
    {
      icon: 'fa-school',
      title: 'نظام إدارة المدارس',
      description: 'نظام شامل لإدارة جميع العمليات المدرسية من تسجيل الطلاب، إدارة الدرجات، والجداول الدراسية، إلى التواصل مع أولياء الأمور',
      features: [
        'إدارة الطلاب والمعلمين',
        'نظام الدرجات والتقييم',
        'الجداول الدراسية',
        'التواصل مع أولياء الأمور'
      ],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: 'fa-laptop',
      title: 'منصة التعليم الإلكتروني',
      description: 'منصة متقدمة للتعليم عن بُعد تدعم الفصول الافتراضية، المحتوى التفاعلي، والتقييمات الإلكترونية',
      features: [
        'الفصول الافتراضية',
        'المحتوى التفاعلي',
        'الواجبات والاختبارات',
        'تتبع تقدم الطلاب'
      ],
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: 'fa-university',
      title: 'نظام إدارة الجامعات',
      description: 'حل متكامل لإدارة الجامعات والكليات يشمل القبول، التسجيل، الشؤون الأكاديمية، والخدمات الطلابية',
      features: [
        'نظام القبول والتسجيل',
        'إدارة الكليات والأقسام',
        'الشؤون الأكاديمية',
        'الخدمات الطلابية'
      ],
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: 'fa-book-open',
      title: 'نظام إدارة المكتبات',
      description: 'نظام شامل لإدارة المكتبات الرقمية والتقليدية مع إمكانيات البحث المتقدم وإدارة الإعارة',
      features: [
        'فهرسة الكتب الرقمية',
        'نظام الإعارة والإرجاع',
        'البحث المتقدم',
        'التقارير والإحصائيات'
      ],
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: 'fa-chalkboard',
      title: 'الفصول الذكية',
      description: 'حلول الفصول الذكية التي تدمج التكنولوجيا الحديثة لتعزيز التفاعل والمشاركة في البيئة التعليمية',
      features: [
        'السبورات التفاعلية',
        'أنظمة العرض المتقدمة',
        'أجهزة التحكم الذكية',
        'المحتوى التفاعلي'
      ],
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: 'fa-chart-line',
      title: 'تحليلات التعلم',
      description: 'أدوات تحليلية متقدمة لفهم أداء الطلاب وتحسين فعالية التعليم من خلال البيانات والذكاء الاصطناعي',
      features: [
        'تحليل أداء الطلاب',
        'التنبؤ بالنتائج',
        'تقارير تفاعلية',
        'توصيات مخصصة'
      ],
      gradient: 'from-rose-500 to-pink-600'
    }
  ];

  const features = [
    {
      icon: 'fa-lightbulb',
      title: 'الابتكار المستمر',
      description: 'نواكب أحدث التطورات التقنية ونطور حلولاً مبتكرة تلبي احتياجات المستقبل',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fa-users',
      title: 'فريق متخصص',
      description: 'فريق من الخبراء والمتخصصين في تكنولوجيا التعليم وتطوير النظم التعليمية',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: 'fa-headset',
      title: 'دعم فني 24/7',
      description: 'نقدم دعماً فنياً متواصلاً لضمان استمرارية العملية التعليمية دون انقطاع',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fa-shield-alt',
      title: 'الأمان والموثوقية',
      description: 'نضمن أعلى معايير الأمان وحماية البيانات مع موثوقية عالية في الأداء',
      gradient: 'from-cyan-500 to-cyan-600'
    }
  ];

  const technologies = [
    { icon: 'fa-react', name: 'React', color: 'text-blue-500' },
    { icon: 'fa-angular', name: 'Angular', color: 'text-red-600' },
    { icon: 'fa-node-js', name: 'Node.js', color: 'text-green-600' },
    { icon: 'fa-python', name: 'Python', color: 'text-yellow-500' },
    { icon: 'fa-aws', name: 'AWS', color: 'text-orange-500' },
    { icon: 'fa-docker', name: 'Docker', color: 'text-blue-400' }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="py-20 text-white" style={{
        background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 30%, #15803d 70%, #166534 100%)'
      }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                حلول تكنولوجية
                <span className="block text-yellow-300">متطورة للتعليم</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed">
                نساعد المؤسسات التعليمية على الاستفادة من أحدث التقنيات لتحسين جودة التعليم وتطوير العملية التعليمية
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <a href="#solutions" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <i className="fas fa-rocket ml-2"></i>
                  اكتشف حلولنا
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
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
                      <i className="fas fa-graduation-cap text-green-600 text-8xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              حلولنا <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">التعليمية</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من الحلول التقنية المتطورة التي تساعد المؤسسات التعليمية على تحقيق أهدافها وتحسين جودة التعليم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-lg flex items-center justify-center mb-6`}>
                  <i className={`fas ${solution.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check text-green-600 ml-2"></i>
                      {feature}
                    </li>
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              لماذا <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">نحن</span>؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نتميز بخبرتنا الواسعة في مجال تكنولوجيا التعليم والتزامنا بتقديم أفضل الحلول المبتكرة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <i className={`fas ${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              التقنيات <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">المستخدمة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نستخدم أحدث التقنيات والأدوات لضمان تقديم حلول عالية الجودة والأداء
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`fab ${tech.icon} text-3xl ${tech.color}`}></i>
                </div>
                <span className="text-sm text-gray-600 font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="هل أنت مستعد لتطوير مؤسستك التعليمية؟"
        subtitle="تواصل معنا اليوم واكتشف كيف يمكن لحلولنا التقنية أن تساعدك في تحقيق أهدافك التعليمية"
        primaryButtonText="احجز استشارة مجانية"
        secondaryButtonText="شاهد منتجاتنا"
      />

      <Footer />
    </div>
  );
}
