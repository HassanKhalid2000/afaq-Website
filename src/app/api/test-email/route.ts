import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // اختبار بسيط لإرسال إيميل
    
    // ===== للاختبار مع Resend =====
    /*
    import { Resend } from 'resend';
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.send({
      from: 'test@afaqinfotech.com',
      to: ['info@afaqinfotech.com'],
      subject: 'اختبار إرسال إيميل من متجر آفاق',
      html: '<h2>مرحبا!</h2><p>هذا اختبار لإرسال الإيميل من النظام.</p>',
    });
    
    if (error) {
      throw new Error(`Resend error: ${error.message}`);
    }
    */

    // ===== للاختبار مع NodeMailer =====
    /*
    import nodemailer from 'nodemailer';
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'info@afaqinfotech.com',
      subject: 'اختبار إرسال إيميل من متجر آفاق',
      html: '<h2>مرحبا!</h2><p>هذا اختبار لإرسال الإيميل من النظام.</p>',
    });
    */

    // محاكاة حاليا
    console.log('🧪 اختبار إرسال الإيميل...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'تم اختبار النظام بنجاح! (محاكاة)',
      instructions: [
        '1. أضف معلومات SMTP في .env.local',
        '2. أزل التعليق من الكود المناسب أعلاه',
        '3. أعد تشغيل الخادم',
        '4. جرب هذا الرابط مرة أخرى'
      ]
    });

  } catch (error) {
    console.error('Error in email test:', error);
    return NextResponse.json(
      { 
        error: 'فشل اختبار الإيميل', 
        details: error instanceof Error ? error.message : 'خطأ غير معروف'
      },
      { status: 500 }
    );
  }
}