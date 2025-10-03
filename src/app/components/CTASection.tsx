import Link from 'next/link';
import WireframeBackground from './WireframeBackground';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundStyle?: React.CSSProperties;
}

export default function CTASection({
  title = "ابدأ رحلتك التقنية معنا اليوم",
  subtitle = "احصل على استشارة مجانية واكتشف كيف يمكن لحلولنا التقنية أن تحول أعمالك",
  primaryButtonText = "اتصل بنا الآن",
  primaryButtonHref = "/contact",
  secondaryButtonText = "احجز استشارة مجانية",
  secondaryButtonHref = "/contact?consultation=true",
  backgroundStyle = {
    background: 'linear-gradient(to bottom right, #582a6e, #e3237b)'
  }
}: CTASectionProps) {
  return (
    <section
      className="relative"
      style={backgroundStyle}
    >
      {/* Wireframe Animation */}
      <WireframeBackground nodeCount={25} containerId="cta-wireframe" />

      {/* CTA Content */}
      <div className="container mx-auto px-4 py-20 text-center text-white cta-content">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <Link
              href={primaryButtonHref}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonHref}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}