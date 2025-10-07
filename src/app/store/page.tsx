'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { products, Product } from '../data/products';
import Link from 'next/link';

export default function StorePage() {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    
    // Store in localStorage
    const currentCart = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    currentCart[productId] = (currentCart[productId] || 0) + 1;
    localStorage.setItem('afaq-cart', JSON.stringify(currentCart));
    
    // Trigger cart update event
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show success message
    alert('تم إضافة المنتج إلى السلة بنجاح!');
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, count) => total + count, 0);
  };

  return (
    <main>
      <Header />
      <PageHeader 
        title="متجر آفاق"
        subtitle="اكتشف مجموعتنا المتميزة من خدمات الاستضافة والحلول التقنية"
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "المتجر", href: "/store" }
        ]}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Cart Summary */}
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">منتجاتنا</h2>
            <Link 
              href="/cart"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <i className="fas fa-shopping-cart"></i>
              السلة ({getCartItemCount()})
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
              >
                {product.isPopular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    الأكثر طلباً
                  </div>
                )}
                
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="text-2xl font-bold text-gray-800">
                      {product.price} <span className="text-lg text-purple-600">{product.currency}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">الميزات الرئيسية:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <i className="fas fa-check text-green-500 text-xs"></i>
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-purple-600 font-semibold">
                          وميزات أخرى كثيرة...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => addToCart(product.id)}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <i className="fas fa-cart-plus"></i>
                      إضافة للسلة
                    </button>
                    <Link 
                      href={`/store/product/${product.id}`}
                      className="bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                    >
                      <i className="fas fa-info-circle"></i>
                      التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">هل تحتاج مساعدة في اختيار الخطة المناسبة؟</h3>
            <p className="text-xl mb-8 opacity-90">
              فريقنا المتخصص مستعد لمساعدتك في اختيار الحل الأمثل لاحتياجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+966123456789" 
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <i className="fas fa-phone"></i>
                اتصل بنا الآن
              </a>
              <a 
                href="mailto:info@afaqinfotech.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <i className="fas fa-envelope"></i>
                راسلنا بالإيميل
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}