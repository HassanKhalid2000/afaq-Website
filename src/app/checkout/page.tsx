'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import Toast from '../components/Toast';
import { getProductById, Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CustomerData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerData, setCustomerData] = useState<CustomerData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('success');

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
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!customerData.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    }

    if (!customerData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(customerData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!customerData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^(05|9665)\d{8}$/.test(customerData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'رقم الهاتف غير صحيح (مثال: 0512345678)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (cartItems.length === 0) {
      setToastMessage('السلة فارغة. يرجى إضافة منتجات قبل إتمام الطلب.');
      setToastType('error');
      setShowToast(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // إرسال البيانات إلى API
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerData,
          cartItems,
          totalPrice: getTotalPrice()
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'فشل في إرسال الطلب');
      }

      // إفراغ السلة
      localStorage.removeItem('afaq-cart');

      // عرض رسالة النجاح
      setToastMessage(`تم إرسال طلبك بنجاح! شكراً لك ${customerData.fullName}. سيقوم فريق المبيعات بالتواصل معك خلال 24 ساعة. رقم الطلب: ${result.orderNumber}`);
      setToastType('success');
      setShowToast(true);

      // التوجه إلى صفحة تأكيد بعد 3 ثواني
      setTimeout(() => {
        router.push('/order-success');
      }, 3000);

    } catch (error) {
      console.error('Error submitting order:', error);
      setToastMessage('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.');
      setToastType('error');
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof CustomerData, value: string) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
    // مسح الخطأ عند الكتابة
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (cartItems.length === 0) {
    return (
      <main>
        <Header />
        <PageHeader 
          title="إتمام الطلب"
          subtitle="قم بإنهاء عملية الشراء"
          breadcrumb={[
            { label: "الرئيسية", href: "/" },
            { label: "المتجر", href: "/store" },
            { label: "السلة", href: "/cart" },
            { label: "إتمام الطلب", href: "/checkout" }
          ]}
        />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <i className="fas fa-shopping-cart text-gray-400 text-4xl mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">لا توجد منتجات في السلة</h2>
            <p className="text-gray-600 mb-6">يرجى إضافة منتجات إلى السلة قبل إتمام الطلب</p>
            <a href="/store" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              العودة إلى المتجر
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
      <Header />
      <PageHeader 
        title="إتمام الطلب"
        subtitle="املأ بياناتك لإنهاء عملية الشراء"
        breadcrumb={[
          { label: "الرئيسية", href: "/" },
          { label: "المتجر", href: "/store" },
          { label: "السلة", href: "/cart" },
          { label: "إتمام الطلب", href: "/checkout" }
        ]}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Customer Information Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <i className="fas fa-user text-purple-600"></i>
                بيانات العميل
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={customerData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                    placeholder="أدخل اسمك الكامل"
                  />
                  {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={customerData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={customerData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    رسالة إضافية (اختيارية)
                  </label>
                  <textarea
                    id="message"
                    value={customerData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="أي تفاصيل إضافية أو طلبات خاصة..."
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-start gap-3">
                  <i className="fas fa-info-circle text-blue-600 text-lg mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-1">ملاحظة مهمة</h4>
                    <p className="text-blue-700 text-sm">
                      بعد إرسال الطلب، سيقوم فريق المبيعات بالتواصل معك خلال 24 ساعة لتأكيد الطلب وترتيب عملية الدفع والتفعيل.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <i className="fas fa-clipboard-list text-purple-600"></i>
                  ملخص الطلب
                </h3>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-600">الكمية: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-gray-800">
                          {(item.price * item.quantity).toLocaleString()} ر.س
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-2xl font-bold text-purple-600">
                    <span>المجموع الكلي:</span>
                    <span>{getTotalPrice().toLocaleString()} ر.س</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      جاري إرسال الطلب...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      إرسال الطلب
                    </>
                  )}
                </button>
              </div>

              {/* Security & Contact Info */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-headset"></i>
                  تحتاج مساعدة؟
                </h4>
                <p className="mb-4 opacity-90">
                  فريقنا مستعد لمساعدتك في أي استفسار
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a 
                    href="tel:+966123456789" 
                    className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-3 rounded-xl font-semibold hover:bg-opacity-30 transition-all duration-300 flex items-center gap-2 text-center justify-center"
                  >
                    <i className="fas fa-phone"></i>
                    اتصل بنا
                  </a>
                  <a 
                    href="mailto:info@afaqinfotech.com" 
                    className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-3 rounded-xl font-semibold hover:bg-opacity-30 transition-all duration-300 flex items-center gap-2 text-center justify-center"
                  >
                    <i className="fas fa-envelope"></i>
                    راسلنا
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}