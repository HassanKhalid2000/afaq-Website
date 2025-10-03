import Image from 'next/image';

export default function ClientsCarousel() {
  const clients = [
    { name: "شركة الفنار", logo: "/images/Alfanar_brand_logo.png" },
    { name: "شركة المحمل", logo: "/images/Al-Mahmal.jpg" },
    { name: "عيادات ميلا", logo: "/images/logo.png" },
    { name: "SMSA Express", logo: "/images/SMSA_Express_logo_(English_version).svg.png" },
    { name: "STC Solutions", logo: "/images/Solutions.PNG" },
    { name: "مؤسسة أبعاد الفخامة", logo: "/images/Ubaad.png" }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            عملاؤنا الكرام
          </h2>
          <p className="text-gray-600">نفخر بثقة عملائنا وشراكتهم معنا</p>
        </div>

        <div className="clients-carousel-wrapper">
          <div className="clients-carousel-track">
            {/* Render logos 3 times for seamless infinite scroll */}
            {[...Array(3)].map((_, setIndex) => (
              clients.map((client, index) => (
                <div key={`set-${setIndex}-${index}`} className="clients-carousel-item">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={192}
                    height={128}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}