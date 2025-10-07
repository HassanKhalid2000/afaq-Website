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
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      try {
        const { data, error } = await resend.emails.send({
          from: 'noreply@afaqinfotech.com',
          to: ['info@afaqinfotech.com'],
          subject: `طلب جديد ${orderNumber} - ${customerData.fullName}`,
          html: emailContent.replace(/\n/g, '<br>'),
          text: emailContent,
        });
        
        if (error) {
          console.error('Resend error:', error);
          throw new Error('فشل في إرسال الإيميل');
        }
        
        console.log('✅ تم إرسال الإيميل بنجاح!', data);
      } catch (resendError) {
        console.error('Resend API Error:', resendError);
        // نستمر بالمحاكاة في حالة فشل Resend
      }
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
      message: 'تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.'
    });

  } catch (error) {
    console.error('Error sending order:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في إرسال الطلب' },
      { status: 500 }
    );
  }
}