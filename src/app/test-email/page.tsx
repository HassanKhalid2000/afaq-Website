'use client';

import { useState } from 'react';

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const testData = {
    customerData: {
      fullName: 'أحمد محمد السعد',
      email: 'ahmed.test@example.com',
      phone: '+966501234567',
      message: 'هذا اختبار لنظام الإيميل'
    },
    cartItems: [
      {
        name: 'تصميم موقع ويب متجاوب',
        quantity: 1,
        price: 2500
      },
      {
        name: 'نظام إدارة محتوى',
        quantity: 1,
        price: 1800
      }
    ],
    totalPrice: 4300
  };

  const sendTestEmail = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: 'خطأ في الاتصال: ' + error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            🧪 اختبار نظام الإيميل
          </h1>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>ملاحظة:</strong> هذا اختبار لنظام إرسال الإيميلات. سيتم إرسال إيميل تجريبي إلى العنوان المحدد في الإعدادات.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">بيانات الاختبار:</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto" dir="ltr">
              {JSON.stringify(testData, null, 2)}
            </pre>
          </div>

          <button
            onClick={sendTestEmail}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-3"></div>
                جاري إرسال الاختبار...
              </div>
            ) : (
              '📧 إرسال إيميل اختبار'
            )}
          </button>

          {result && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">نتيجة الاختبار:</h3>
              <div className={`p-4 rounded-lg ${
                result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <pre className="text-sm overflow-auto" dir="ltr">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>

              {result.success && (
                <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  <div className="flex items-center">
                    <span className="text-2xl ml-3">✅</span>
                    <div>
                      <strong>نجح الاختبار!</strong>
                      <p className="text-sm mt-1">
                        رقم الطلب: {result.orderNumber}<br/>
                        {result.emailSent ? 'تم إرسال الإيميل فعلياً' : 'تم المحاكاة فقط'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {result.error && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  <div className="flex items-center">
                    <span className="text-2xl ml-3">❌</span>
                    <div>
                      <strong>فشل الاختبار!</strong>
                      <p className="text-sm mt-1">{result.error}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 text-center">
            <a 
              href="/"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← العودة إلى المتجر
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}