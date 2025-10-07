'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TestEmailPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testEmail = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const response = await fetch('/api/test-email');
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: 'فشل في الاتصال بالخادم', details: error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />
      
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              🧪 اختبار إرسال الإيميل
            </h1>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-blue-800 mb-4">📋 حالة النظام الحالية</h2>
              <div className="space-y-2 text-blue-700">
                <p>• الإيميل حالياً في وضع <strong>المحاكاة</strong></p>
                <p>• لتفعيل الإرسال الحقيقي، اتبع الخطوات أدناه</p>
                <p>• الطلبات تظهر في Console Logs</p>
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={testEmail}
                disabled={loading}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg'
                } text-white`}
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    جاري الاختبار...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    اختبار إرسال الإيميل
                  </>
                )}
              </button>
            </div>

            {result && (
              <div className={`rounded-xl p-6 mb-8 ${
                result.error ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
              }`}>
                <h3 className={`text-lg font-bold mb-3 ${
                  result.error ? 'text-red-800' : 'text-green-800'
                }`}>
                  {result.error ? '❌ خطأ في الاختبار' : '✅ نتيجة الاختبار'}
                </h3>
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">🚀 خطوات تفعيل الإرسال الحقيقي</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">📧 الطريقة الأولى: Resend</h3>
                  <ol className="space-y-2 text-sm">
                    <li>1. سجل في <a href="https://resend.com" target="_blank" className="underline">resend.com</a></li>
                    <li>2. احصل على API Key</li>
                    <li>3. أضف في .env.local:</li>
                    <li className="bg-black bg-opacity-20 p-2 rounded font-mono">
                      RESEND_API_KEY=re_xxx...
                    </li>
                    <li>4. أعد تشغيل الخادم</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">📬 الطريقة الثانية: Gmail</h3>
                  <ol className="space-y-2 text-sm">
                    <li>1. فعل 2FA في Gmail</li>
                    <li>2. أنشئ App Password</li>
                    <li>3. أضف في .env.local:</li>
                    <li className="bg-black bg-opacity-20 p-2 rounded font-mono text-xs">
                      GMAIL_USER=your@gmail.com<br/>
                      GMAIL_APP_PASSWORD=xxxx
                    </li>
                    <li>4. فعل الكود في API</li>
                  </ol>
                </div>
              </div>

              <div className="mt-6 bg-white bg-opacity-20 rounded-xl p-4">
                <h4 className="font-bold mb-2">📁 ملفات مهمة:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <code>/src/app/api/send-order/route.ts</code> - API الإرسال</li>
                  <li>• <code>/.env.local</code> - إعدادات البيئة</li>
                  <li>• <code>/EMAIL_SETUP.md</code> - دليل التفصيلي</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="/store"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                <i className="fas fa-arrow-right"></i>
                العودة إلى المتجر
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}