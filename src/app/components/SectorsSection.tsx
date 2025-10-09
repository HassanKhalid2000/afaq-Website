import Link from 'next/link';

export default function SectorsSection() {
  const sectors = [
    {
      title: "القطاع الصحي",
      description: "أنظمة إدارة المستشفيات والعيادات والصيدليات مع حلول تقنية الأشعة المتطورة",
      icon: "fas fa-heartbeat",
      href: "/healthcare",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "القطاع التعليمي",
      description: "أنظمة إدارة المدارس والجامعات وحلول التعليم الإلكتروني المتطورة",
      icon: "fas fa-graduation-cap",
      href: "/education",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "قطاع الأعمال",
      description: "أنظمة ERP وCRM والموارد البشرية مع حلول إدارة المشاريع والمبيعات",
      icon: "fas fa-building",
      href: "/business",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "القطاع الحكومي",
      description: "منصات الحكومة الإلكترونية وأنظمة إدارة الوثائق والخدمات الرقمية للمواطنين",
      icon: "fas fa-landmark",
      href: "/government",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "القطاع الصناعي",
      description: "حلول الأتمتة الصناعية وإنترنت الأشياء وأنظمة إدارة الإنتاج والجودة",
      icon: "fas fa-industry",
      href: "/industrial",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "القطاع المالي",
      description: "الخدمات المصرفية الرقمية وبوابات الدفع وأنظمة إدارة المخاطر المالية",
      icon: "fas fa-university",
      href: "/finance",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "القطاع الأمني",
      description: "حلول الأمن السيبراني وحماية البيانات وأنظمة كشف التهديدات والاستجابة",
      icon: "fas fa-shield-alt",
      href: "/security",
      gradient: "from-red-600 to-red-800"
    },
    {
      title: "قطاع الاتصالات",
      description: "بنية شبكات 5G ومنصات إنترنت الأشياء وحلول الاتصالات السحابية",
      icon: "fas fa-satellite-dish",
      href: "/telecommunications",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
            القطاعات الرئيسية
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-800 to-teal-600 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            حلول متخصصة ومبتكرة تلبي احتياجات مختلف القطاعات بكفاءة وجودة عالية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${sector.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{sector.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {sector.description}
              </p>
              <Link
                href={sector.href}
                className={`block text-center bg-gradient-to-r ${sector.gradient} text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300`}
              >
                اكتشف المزيد
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}