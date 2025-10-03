interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundStyle?: React.CSSProperties;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundStyle = {
    background: 'linear-gradient(to bottom right, #582a6e, #e3237b)'
  }
}: PageHeaderProps) {
  return (
    <section className="py-20" style={backgroundStyle}>
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}