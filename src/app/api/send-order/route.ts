import { NextRequest, NextResponse } from 'next/server';

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

    // في البيئة الحقيقية، ستحتاج إلى استخدام خدمة إرسال إيميل مثل:
    // - NodeMailer مع SMTP
    // - SendGrid
    // - Amazon SES
    // - Resend
    
    // هنا نحاكي الإرسال
    console.log('Order Email Content:', emailContent);
    
    // محاكاة تأخير الشبكة
    await new Promise(resolve => setTimeout(resolve, 1500));

    // في التطبيق الحقيقي، استخدم هذا الكود:
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com', // أو خدمة SMTP الخاصة بك
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

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