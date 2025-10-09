// Simple email test script
require('dotenv').config({ path: '.env.local' });
const { Resend } = require('resend');

async function testEmail() {
  console.log('🧪 اختبار إرسال البريد الإلكتروني...\n');

  // Check if API key exists
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY غير موجود في .env.local');
    process.exit(1);
  }

  console.log('✓ API Key موجود:', process.env.RESEND_API_KEY.substring(0, 10) + '...');
  console.log('✓ TO_EMAIL:', process.env.TO_EMAIL || 'info@afaqinfotech.com');
  console.log('\n🔄 جاري الإرسال...\n');

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'AFAQ Store <onboarding@resend.dev>',
      to: [process.env.TO_EMAIL || 'info@afaqinfotech.com'],
      subject: '✅ اختبار البريد الإلكتروني - آفاق',
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="utf-8">
          <title>اختبار البريد</title>
        </head>
        <body style="font-family: Arial, sans-serif; padding: 20px; direction: rtl;">
          <div style="max-width: 600px; margin: 0 auto; background: #f0f9ff; padding: 20px; border-radius: 10px;">
            <h1 style="color: #0369a1;">✅ اختبار ناجح!</h1>
            <p>هذا بريد اختبار من موقع آفاق المتكاملة.</p>
            <p>إذا استلمت هذا الإيميل، فالنظام يعمل بشكل صحيح!</p>
            <hr/>
            <p style="color: #64748b; font-size: 14px;">
              التاريخ: ${new Date().toLocaleString('ar-SA')}<br/>
              من: نظام آفاق الإلكتروني
            </p>
          </div>
        </body>
        </html>
      `,
      text: 'هذا بريد اختبار من موقع آفاق المتكاملة. إذا استلمت هذا الإيميل، فالنظام يعمل بشكل صحيح!',
    });

    if (error) {
      console.error('❌ فشل الإرسال:', error);
      console.error('\nالتفاصيل:', JSON.stringify(error, null, 2));
      process.exit(1);
    }

    console.log('✅ تم إرسال البريد بنجاح!');
    console.log('📧 معرف البريد:', data.id);
    console.log('\n📬 تحقق من البريد في:', process.env.TO_EMAIL || 'info@afaqinfotech.com');
    console.log('\n💡 نصيحة: تحقق أيضاً من مجلد Spam/Junk');
    console.log('💡 راجع Resend Dashboard: https://resend.com/emails');
  } catch (err) {
    console.error('❌ خطأ غير متوقع:', err.message);
    console.error(err);
    process.exit(1);
  }
}

testEmail();
