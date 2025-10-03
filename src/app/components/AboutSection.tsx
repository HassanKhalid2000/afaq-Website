export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
            من نحن
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-800 to-teal-600 mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto">
            آفاق المتكاملة لتكنولوجيا المعلومات، شريكك الموثوق لتقديم حلول تقنية مبتكرة في الشبكات، الأمن، والبرمجيات. نضع خبرتنا بين يديك لرفع الكفاءة وحماية أعمالك.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
            <p className="text-gray-600 leading-relaxed">
              أن نكون الخيار الأول للعملاء من خلال تقديم خدمات ذات جودة عالية تفوق توقعاتهم
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-bullseye text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h3>
            <p className="text-gray-600 leading-relaxed">
              نلتزم ببناء علاقات طويلة المدى مع عملائنا، عبر تقديم خدمات متميزة تعتمد على الابتكار
            </p>
          </div>

          {/* Goals */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-trophy text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">أهدافنا</h3>
            <p className="text-gray-600 leading-relaxed">
              نسعى إلى الريادة في قطاع تقنية المعلومات من خلال تقديم حلول وخدمات متكاملة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}