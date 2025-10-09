'use client';

import { useState } from 'react';

export default function SetupPage() {
  const [apiKey, setApiKey] = useState('');
  const [toEmail, setToEmail] = useState('info@afaqinfotech.com');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<any>(null);

  const checkConfiguration = async () => {
    setIsChecking(true);
    setResult(null);

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerData: {
            fullName: 'اختبار الإعداد',
            email: 'test@example.com',
            phone: '+966500000000',
            message: 'هذا اختبار تأكيد إعداد Resend API'
          },
          cartItems: [
            {
              name: 'اختبار المنتج',
              quantity: 1,
              price: 100
            }
          ],
          totalPrice: 100
        })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: 'خطأ في الاتصال: ' + error });
    } finally {
      setIsChecking(false);
    }
  };

  const copyEnvFile = () => {
    const envContent = `# إعدادات Resend API
RESEND_API_KEY=${apiKey}
TO_EMAIL=${toEmail}
FROM_EMAIL=onboarding@resend.dev
`;
    navigator.clipboard.writeText(envContent);
    alert('تم نسخ محتوى .env.local إلى الحافظة!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            ⚙️ إعداد نظام الإيميل - Resend API
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* الإعداد */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">🔧 إعدادات الـ API</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resend API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="re_xxxxxxxxxxxxxxxxxxxxxxx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dir="ltr"
                />
                <p className="text-xs text-gray-500 mt-1">
                  احصل عليه من <a href="https://resend.com/api-keys" target="_blank" className="text-blue-600 underline">resend.com</a>
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  إيميل الاستقبال
                </label>
                <input
                  type="email"
                  value={toEmail}
                  onChange={(e) => setToEmail(e.target.value)}
                  placeholder="info@afaqinfotech.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dir="ltr"
                />
                <p className="text-xs text-gray-500 mt-1">
                  الإيميل الذي ستصل إليه طلبات المتجر
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={copyEnvFile}
                  disabled={!apiKey}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                >
                  📋 نسخ إعدادات .env.local
                </button>
                
                <button
                  onClick={checkConfiguration}
                  disabled={isChecking}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                >
                  {isChecking ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-3"></div>
                      جاري الاختبار...
                    </div>
                  ) : (
                    '🧪 اختبار الإعداد الحالي'
                  )}
                </button>
              </div>
            </div>

            {/* التعليمات */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">📋 خطوات الإعداد</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <h3 className="font-semibold text-blue-800 mb-2">1. إنشاء حساب Resend</h3>
                <p className="text-blue-700 text-sm">
                  توجه إلى <a href="https://resend.com" target="_blank" className="underline">resend.com</a> وأنشئ حساباً مجانياً
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                <h3 className="font-semibold text-green-800 mb-2">2. إنشاء API Key</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• انتقل إلى API Keys في اللوحة</li>
                  <li>• انقر Create API Key</li>
                  <li>• اختر "Sending access"</li>
                  <li>• انسخ المفتاح فوراً</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <h3 className="font-semibold text-yellow-800 mb-2">3. إعداد المشروع</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• الصق API Key في الحقل أعلاه</li>
                  <li>• انقر "نسخ إعدادات .env.local"</li>
                  <li>• الصق المحتوى في ملف .env.local</li>
                  <li>• أعد تشغيل الخادم</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-semibold mb-2">📊 الخطة المجانية</h3>
                <ul className="text-sm space-y-1">
                  <li>• 3,000 إيميل شهرياً</li>
                  <li>• 100 إيميل يومياً</li>
                  <li>• مثالية للمتاجر الصغيرة</li>
                </ul>
              </div>
            </div>
          </div>

          {/* نتائج الاختبار */}
          {result && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">📊 نتائج الاختبار:</h3>
              <div className={`p-4 rounded-lg ${
                result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className="mb-4">
                  {result.success ? (
                    <div className="flex items-center text-green-700">
                      <span className="text-2xl ml-3">✅</span>
                      <div>
                        <strong>نجح الاختبار!</strong>
                        <p className="text-sm mt-1">رقم الطلب: {result.orderNumber}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-700">
                      <span className="text-2xl ml-3">❌</span>
                      <div>
                        <strong>فشل الاختبار!</strong>
                        <p className="text-sm mt-1">{result.error}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>حالة Resend:</span>
                    <span className={result.resendConfigured ? 'text-green-600' : 'text-yellow-600'}>
                      {result.resendConfigured ? '✅ مُعد' : '⚠️ غير مُعد'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>إرسال الإيميل:</span>
                    <span className={result.emailSent ? 'text-green-600' : 'text-gray-600'}>
                      {result.emailSent ? '✅ تم الإرسال' : '🔄 محاكاة'}
                    </span>
                  </div>
                  {result.emailError && (
                    <div className="text-red-600 text-xs mt-2 p-2 bg-red-100 rounded">
                      <strong>خطأ الإيميل:</strong> {result.emailError}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center space-x-4">
            <a 
              href="/test-email"
              className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              🧪 صفحة الاختبار المفصلة
            </a>
            <a 
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              🏠 العودة للمتجر
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}