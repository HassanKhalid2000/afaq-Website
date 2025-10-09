import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      {/* Page Header */}
      <section className="py-20" style={{
        background: 'linear-gradient(to bottom right, #572a6e, #572a6e, #e4237b)'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">عملاؤنا المميزون</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              نفخر بثقة عملائنا وننجح في تقديم حلول تقنية مبتكرة تلبي احتياجاتهم وتحقق أهدافهم
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                background: 'linear-gradient(to bottom right, #582a6e, #e3237b)'
              }}>
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <h3 className="text-4xl font-bold mb-2" style={{ color: '#582a6e' }}>300+</h3>
              <p className="text-gray-600 font-medium">عميل راض</p>
            </div>

            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-project-diagram text-white text-3xl"></i>
              </div>
              <h3 className="text-4xl font-bold mb-2" style={{ color: '#582a6e' }}>500+</h3>
              <p className="text-gray-600 font-medium">مشروع منجز</p>
            </div>

            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-industry text-white text-3xl"></i>
              </div>
              <h3 className="text-4xl font-bold mb-2" style={{ color: '#582a6e' }}>8</h3>
              <p className="text-gray-600 font-medium">قطاعات متخصصة</p>
            </div>

            <div className="p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-white text-3xl"></i>
              </div>
              <h3 className="text-4xl font-bold mb-2" style={{ color: '#582a6e' }}>15+</h3>
              <p className="text-gray-600 font-medium">سنة خبرة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">عملاؤنا الكرام</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              شركات ومؤسسات رائدة اختارت آفاق المتكاملة كشريك تقني موثوق لتحقيق أهدافها الرقمية
            </p>
          </div>

          {/* Main Client Logos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img src="/images/Alfanar_brand_logo.png" alt="شركة الفنار" className="h-24 w-auto mx-auto" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img src="/images/Al-Mahmal.jpg" alt="شركة المحمل" className="h-24 w-auto mx-auto" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img src="/images/logo.png" alt="عيادات ميلا" className="h-24 w-auto mx-auto" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img src="/images/SMSA_Express_logo_(English_version).svg.png" alt="SMSA Express" className="h-24 w-auto mx-auto" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img src="/images/Solutions.PNG" alt="STC Solutions" className="h-24 w-auto mx-auto" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img src="/images/Ubaad.png" alt="مؤسسة أبعاد الفخامة" className="h-24 w-auto mx-auto" />
            </div>
          </div>

          {/* Moving Carousel */}
          <div className="relative overflow-hidden bg-white rounded-xl p-8 shadow-lg">
            <div className="clients-carousel-wrapper">
              <div className="clients-carousel-track">
                {/* Render logos 3 times for seamless infinite scroll */}
                {[...Array(3)].map((_, setIndex) => (
                  [
                    { logo: "/images/Alfanar_brand_logo.png", alt: "شركة الفنار" },
                    { logo: "/images/Al-Mahmal.jpg", alt: "شركة المحمل" },
                    { logo: "/images/logo.png", alt: "عيادات ميلا" },
                    { logo: "/images/SMSA_Express_logo_(English_version).svg.png", alt: "SMSA Express" },
                    { logo: "/images/Solutions.PNG", alt: "STC Solutions" },
                    { logo: "/images/Ubaad.png", alt: "مؤسسة أبعاد الفخامة" }
                  ].map((client, index) => (
                    <div key={`set-${setIndex}-${index}`} className="clients-carousel-item">
                      <img src={client.logo} alt={client.alt} className="max-w-full max-h-full object-contain" />
                    </div>
                  ))
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="هل أنت مستعد لتكون عميلنا التالي؟"
        subtitle="انضم إلى قائمة عملائنا المميزين واحصل على حلول تقنية متكاملة تدفع بأعمالك نحو المستقبل"
        primaryButtonText="تواصل معنا الآن"
        secondaryButtonText="احجز استشارة مجانية"
      />

      <Footer />
    </div>
  );
}
