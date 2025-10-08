import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerData, cartItems, totalPrice } = body;

    // التحقق من صحة البيانات
    if (!customerData || !cartItems || cartItems.length === 0) {
      return NextResponse.json(
        { error: 'بيانات غير مكتملة' },
        { status: 400 }
      );
    }

    // إنشاء محتوى الإيميل
    const orderNumber = `AFQ-${Date.now()}`;
    const orderDate = new Date().toLocaleDateString('ar-SA');
    
    const orderDetails = cartItems.map((item: { name: string; quantity: number; price: number }) => 
      `• ${item.name} - الكمية: ${item.quantity} - السعر الفردي: ${item.price} ر.س - المجموع: ${item.price * item.quantity} ر.س`
    ).join('\n');

    const emailContent = `
طلب جديد من متجر آفاق المتكاملة لتكنولوجيا المعلومات

═══════════════════════════════════════════════════════════════

📋 معلومات الطلب:
رقم الطلب: ${orderNumber}
تاريخ الطلب: ${orderDate}
الوقت: ${new Date().toLocaleTimeString('ar-SA')}

═══════════════════════════════════════════════════════════════

👤 بيانات العميل:
الاسم الكامل: ${customerData.fullName}
البريد الإلكتروني: ${customerData.email}
رقم الهاتف: ${customerData.phone}

═══════════════════════════════════════════════════════════════

🛒 تفاصيل الطلب:
${orderDetails}

═══════════════════════════════════════════════════════════════

💰 ملخص المالي:
المجموع الكلي: ${totalPrice.toLocaleString()} ر.س

═══════════════════════════════════════════════════════════════

${customerData.message ? `📝 رسالة إضافية من العميل:\n${customerData.message}\n\n═══════════════════════════════════════════════════════════════\n\n` : ''}

🔔 الإجراءات المطلوبة:
1. التواصل مع العميل خلال 24 ساعة
2. تأكيد تفاصيل الطلب
3. ترتيب عملية الدفع
4. تفعيل الخدمات بعد تأكيد الدفع

═══════════════════════════════════════════════════════════════

هذا الإيميل تم إرساله تلقائياً من متجر آفاق الإلكتروني
تاريخ الإرسال: ${new Date().toLocaleString('ar-SA')}
    `;

    // **اختر إحدى الطرق التالية لإرسال الإيميل:**

    // =========== الطريقة الأولى: Gmail SMTP ===========
    // تحتاج إلى إنشاء App Password من Google Account
    /*
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',        // ضع إيميلك هنا
        pass: 'your-app-password',           // ضع App Password هنا
      },
    });
    */

    // =========== الطريقة الثانية: SMTP مخصص ===========
    // إذا كان لديك خادم SMTP خاص
    /*
    const transporter = nodemailer.createTransporter({
      host: 'smtp.your-domain.com',         // خادم SMTP الخاص بك
      port: 587,                            // المنفذ (587 للTLS، 465 للSSL)
      secure: false,                        // true للمنفذ 465، false لباقي المنافذ
      auth: {
        user: 'noreply@afaqinfotech.com',   // إيميل الإرسال
        pass: 'your-smtp-password',         // كلمة مرور SMTP
      },
    });
    */

    // =========== الطريقة الثالثة: استخدام Resend (الأفضل) ===========
    // سهل الاستخدام ومجاني للاستخدام المحدود
    // قم بالتسجيل في resend.com واحصل على API key
    
    // **تفعيل إرسال الإيميل مع Resend:**
    let emailSentStatus = false;
    let emailError = null;
    
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_test_key_placeholder') {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      try {
        console.log('🔄 محاولة إرسال الإيميل عبر Resend...');
        
        const { data, error } = await resend.emails.send({
          from: process.env.FROM_EMAIL || 'Onboarding <onboarding@resend.dev>',
          to: [process.env.TO_EMAIL || 'info@afaqinfotech.com'],
          subject: `طلب جديد ${orderNumber} - ${customerData.fullName}`,
          html: `
            <!DOCTYPE html>
            <html dir="rtl" lang="ar">
            <head>
              <meta charset="utf-8">
              <title>طلب جديد - آفاق</title>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
                .footer { background: #374151; color: white; padding: 15px; text-align: center; border-radius: 0 0 10px 10px; }
                .section { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3b82f6; }
                .highlight { color: #1f2937; font-weight: bold; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🛒 طلب جديد من متجر آفاق</h1>
                </div>
                <div class="content">
                  ${emailContent.replace(/\n/g, '<br>')}
                </div>
                <div class="footer">
                  <p>هذا الإيميل تم إرساله تلقائياً من نظام آفاق المتكاملة</p>
                </div>
              </div>
            </body>
            </html>
          `,
          text: emailContent,
        });
        
        if (error) {
          console.error('❌ خطأ Resend:', error);
          emailError = error;
          throw new Error('فشل في إرسال الإيميل: ' + JSON.stringify(error));
        }
        
        emailSentStatus = true;
        console.log('✅ تم إرسال الإيميل بنجاح مع Resend!', data);
        console.log('📧 ID الإيميل:', data?.id);
        
      } catch (resendError) {
        console.error('❌ خطأ في Resend API:', resendError);
        emailError = resendError;
        emailSentStatus = false;
      }
    } else {
      console.log('⚠️ لم يتم تعيين RESEND_API_KEY، سيتم المحاكاة فقط');
    }

    // =========== المحاكاة الحالية ===========
    // حاليا نحاكي الإرسال فقط - أزل هذا القسم بعد تفعيل الإرسال الحقيقي
    console.log('📧 محاكاة إرسال إيميل إلى info@afaqinfotech.com');
    console.log('محتوى الإيميل:', emailContent);
    console.log('===============================');
    
    // محاكاة تأخير الشبكة
    await new Promise(resolve => setTimeout(resolve, 1500));

    // =========== إرسال الإيميل الفعلي ===========
    // أزل التعليق من إحدى الطرق أعلاه واستخدمها
    /*
    await transporter.sendMail({
      from: '"متجر آفاق" <noreply@afaqinfotech.com>',
      to: 'info@afaqinfotech.com',
      subject: `طلب جديد ${orderNumber} - ${customerData.fullName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'), // تحويل إلى HTML
    });
    */

    return NextResponse.json({
      success: true,
      orderNumber,
      message: emailSentStatus 
        ? 'تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.' 
        : 'تم استلام طلبك بنجاح! (الإيميل في وضع المحاكاة)',
      emailSent: emailSentStatus,
      emailError: emailError ? String(emailError) : null,
      resendConfigured: !!process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_test_key_placeholder'
    });

  } catch (error) {
    console.error('Error sending order:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إرسال الطلب' },
      { status: 500 }
    );
  }
}