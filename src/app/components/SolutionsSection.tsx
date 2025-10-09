export default function SolutionsSection() {
  const solutions = [
    {
      title: "الحوكمة المؤسسية",
      description: "الالتزام والشفافية والتميز في إدارة المؤسسات",
      icon: "fas fa-shield-alt",
      bgGradient: "from-blue-50 to-blue-100",
      iconGradient: "from-blue-600 to-blue-800"
    },
    {
      title: "البنية التحتية",
      description: "مراكز البيانات وحلول الخوادم المتطورة",
      icon: "fas fa-server",
      bgGradient: "from-teal-50 to-teal-100",
      iconGradient: "from-teal-500 to-teal-600"
    },
    {
      title: "حلول الأمن",
      description: "أمن المعلومات والحماية السيبرانية",
      icon: "fas fa-lock",
      bgGradient: "from-red-50 to-red-100",
      iconGradient: "from-red-500 to-red-600"
    },
    {
      title: "حلول الشبكات",
      description: "شبكات متقدمة وأنظمة اتصالات حديثة",
      icon: "fas fa-network-wired",
      bgGradient: "from-green-50 to-green-100",
      iconGradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
            أبرز الحلول والخدمات
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-800 to-teal-600 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            تقنيات متطورة وحلول شاملة تضمن نجاح مشاريعك الرقمية وتحقق أهدافك المستقبلية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className={`bg-gradient-to-br ${solution.bgGradient} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${solution.iconGradient} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${solution.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}