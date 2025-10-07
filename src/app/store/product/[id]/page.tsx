'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import { getProductById, Product } from '../../../data/products';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = getProductById(productId);
    setProduct(foundProduct || null);
  }, [productId]);

  const addToCart = (productId: string, quantity: number = 1) => {
    const currentCart = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    currentCart[productId] = (currentCart[productId] || 0) + quantity;
    localStorage.setItem('afaq-cart', JSON.stringify(currentCart));
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
    
    alert(`تم إضافة ${quantity} من المنتج إلى السلة بنجاح!`);
  };

  if (!product) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">المنتج غير موجود</h2>
            <Link href="/store" className="text-purple-600 hover:underline">
              العودة إلى المتجر
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <PageHeader 
        title={product.name}
        subtitle="تفاصيل المنتج الكاملة والميزات المتاحة"
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "المتجر", href: "/store" },
          { label: product.name, href: `/store/product/${product.id}` }
        ]}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-2xl"
                />
                {product.isPopular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold">
                    <i className="fas fa-star ml-2"></i>
                    الأكثر طلباً
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-4 py-2 rounded-full">
                  {product.category}
                </span>
                <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2">
                  {product.name}
                </h1>
                <div className="text-4xl font-bold text-purple-600 mb-6">
                  {product.price} <span className="text-2xl">{product.currency}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  ميزات الخطة
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-lg font-semibold text-gray-700">الكمية:</span>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <i className="fas fa-minus text-gray-600"></i>
                    </button>
                    <span className="text-xl font-bold text-gray-800 w-8 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <i className="fas fa-plus text-gray-600"></i>
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => addToCart(product.id, quantity)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-cart-plus"></i>
                    إضافة إلى السلة ({quantity * product.price} {product.currency})
                  </button>
                  <Link 
                    href="/cart"
                    className="bg-gray-100 text-gray-700 py-4 px-6 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                  >
                    <i className="fas fa-shopping-cart"></i>
                    عرض السلة
                  </Link>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <i className="fas fa-headset"></i>
                  هل تحتاج مساعدة؟
                </h4>
                <p className="mb-4 opacity-90">
                  فريقنا المتخصص مستعد للإجابة على جميع استفساراتك ومساعدتك في اختيار الحل الأمثل
                </p>
                <div className="flex gap-3">
                  <a 
                    href="tel:+966123456789" 
                    className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <i className="fas fa-phone"></i>
                    اتصل بنا
                  </a>
                  <a 
                    href="mailto:info@afaqinfotech.com" 
                    className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
                  >
                    <i className="fas fa-envelope"></i>
                    راسلنا
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products or Additional Info */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">لماذا تختار آفاق؟</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">الأمان العالي</h4>
                <p className="text-gray-600">حماية متقدمة لبياناتك ومواقعك مع أحدث تقنيات الأمان</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">دعم 24/7</h4>
                <p className="text-gray-600">فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-rocket text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">الأداء السريع</h4>
                <p className="text-gray-600">خوادم عالية الأداء تضمن سرعة تحميل مثالية لموقعك</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}