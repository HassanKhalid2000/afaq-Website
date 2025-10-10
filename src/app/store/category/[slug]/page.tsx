'use client';
import { useState, use } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageHeader from '../../../components/PageHeader';
import Toast from '../../../components/Toast';
import { getCategoryBySlug, getProductsByCategory, Product } from '../../../data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const category = getCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(resolvedParams.slug);

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

    // Show toast notification
    setToastMessage('تم إضافة المنتج إلى السلة بنجاح!');
    setShowToast(true);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, count) => total + count, 0);
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div
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
          loading="lazy"
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
            {product.price.toLocaleString()} <span className="text-lg text-purple-600">{product.currency}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
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
  );

  return (
    <main>
      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
      <Header />
      <PageHeader
        title={category.name}
        subtitle={category.description}
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "المتجر", href: "/store" },
          { label: category.name, href: `/store/category/${category.slug}` }
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                <i className={`fas ${category.icon}`}></i>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{category.name}</h2>
                <p className="text-gray-600">
                  {products.length} {products.length === 1 ? 'منتج' : 'منتجات'} متاحة
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/store"
                className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                <i className="fas fa-arrow-right"></i>
                العودة للمتجر
              </Link>
              <Link
                href="/cart"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <i className="fas fa-shopping-cart"></i>
                السلة ({getCartItemCount()})
              </Link>
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl text-gray-300 mb-4">
                <i className="fas fa-box-open"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">لا توجد منتجات في هذه الفئة</h3>
              <p className="text-gray-600 mb-6">تحقق مرة أخرى لاحقاً للحصول على منتجات جديدة</p>
              <Link
                href="/store"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                تصفح جميع المنتجات
              </Link>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">هل تحتاج مساعدة في اختيار المنتج المناسب؟</h3>
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
