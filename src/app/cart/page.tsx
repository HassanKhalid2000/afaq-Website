'use client';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import { getProductById, Product } from '../data/products';
import Link from 'next/link';

interface CartItem extends Product {
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = () => {
    const cartData = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    const items: CartItem[] = [];
    
    Object.entries(cartData).forEach(([productId, quantity]) => {
      const product = getProductById(productId);
      if (product && quantity > 0) {
        items.push({
          ...product,
          quantity: quantity as number
        });
      }
    });
    
    setCartItems(items);
    setIsLoading(false);
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    const cartData = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    cartData[productId] = newQuantity;
    localStorage.setItem('afaq-cart', JSON.stringify(cartData));
    loadCartItems();
  };

  const removeFromCart = (productId: string) => {
    const cartData = JSON.parse(localStorage.getItem('afaq-cart') || '{}');
    delete cartData[productId];
    localStorage.setItem('afaq-cart', JSON.stringify(cartData));
    loadCartItems();
  };

  const clearCart = () => {
    localStorage.removeItem('afaq-cart');
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (isLoading) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">جاري تحميل السلة...</p>
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
        title="سلة المشتريات"
        subtitle={`لديك ${getTotalItems()} منتج في سلة المشتريات`}
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "المتجر", href: "/store" },
          { label: "السلة", href: "/cart" }
        ]}
      />
      
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6">
          {cartItems.length === 0 ? (
            // Empty Cart State
            <div className="text-center py-16">
              <div className="w-32 h-32 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
                <i className="fas fa-shopping-cart text-gray-400 text-4xl"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">السلة فارغة</h2>
              <p className="text-gray-600 mb-8 text-lg">لم تقم بإضافة أي منتجات إلى سلة المشتريات بعد</p>
              <Link 
                href="/store"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <i className="fas fa-shopping-bag"></i>
                تصفح المنتجات
              </Link>
            </div>
          ) : (
            // Cart with Items
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">المنتجات المحددة</h2>
                    <button 
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2"
                    >
                      <i className="fas fa-trash"></i>
                      إفراغ السلة
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        {/* Product Image */}
                        <div className="w-24 h-24 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-2">
                          <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                          <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                          <div className="flex items-center gap-4">
                            <span className="text-purple-600 font-bold text-lg">
                              {item.price} {item.currency}
                            </span>
                            <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-2 bg-white rounded-lg p-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <i className="fas fa-minus text-gray-600 text-sm"></i>
                            </button>
                            <span className="font-bold text-gray-800 w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <i className="fas fa-plus text-gray-600 text-sm"></i>
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 text-sm"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-left">
                          <div className="text-lg font-bold text-gray-800">
                            {(item.price * item.quantity).toLocaleString()} {item.currency}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.quantity} × {item.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">ملخص الطلب</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>عدد المنتجات:</span>
                      <span>{getTotalItems()} منتج</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>المجموع الفرعي:</span>
                      <span>{getTotalPrice().toLocaleString()} ر.س</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-xl font-bold text-gray-800">
                        <span>المجموع الكلي:</span>
                        <span className="text-purple-600">{getTotalPrice().toLocaleString()} ر.س</span>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="/checkout"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-credit-card"></i>
                    إتمام الطلب
                  </Link>

                  <Link 
                    href="/store"
                    className="w-full mt-3 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold text-center hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-arrow-left"></i>
                    متابعة التسوق
                  </Link>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-shield-alt text-green-600 text-lg mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">معاملة آمنة</h4>
                      <p className="text-green-700 text-sm">
                        جميع بياناتك محمية بأعلى معايير الأمان والخصوصية
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}