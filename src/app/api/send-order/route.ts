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

    // **إرسال الإيميل مع Resend:**
    let emailSentStatus = false;
    let emailError = null;
    let internalEmailSent = false;
    let customerEmailSent = false;

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_your_api_key_here') {
      const resend = new Resend(process.env.RESEND_API_KEY);

      try {
        // Internal email (to AFAQ - info@afaqinfotech.com)
        const internalHtml = `
            <!DOCTYPE html>
            <html dir="rtl" lang="ar">
            <head>
              <meta charset="utf-8">
              <title>طلب جديد - آفاق</title>
              <style>
                body {
                  font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f3f4f6;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: white;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .header {
                  background: linear-gradient(135deg, #582a6e 0%, #e3237b 100%);
                  color: white;
                  padding: 30px 20px;
                  text-align: center;
                }
                .header h1 { margin: 0; font-size: 24px; }
                .content {
                  background: #ffffff;
                  padding: 30px 20px;
                  line-height: 1.8;
                  color: #374151;
                }
                .info-section {
                  background: #f9fafb;
                  padding: 15px;
                  border-radius: 8px;
                  margin: 15px 0;
                  border-right: 4px solid #582a6e;
                }
                .info-section h3 {
                  color: #582a6e;
                  margin-top: 0;
                  margin-bottom: 10px;
                }
                .order-item {
                  padding: 10px 0;
                  border-bottom: 1px solid #e5e7eb;
                }
                .order-item:last-child { border-bottom: none; }
                .total {
                  font-size: 20px;
                  font-weight: bold;
                  color: #582a6e;
                  padding: 15px;
                  background: #f3f4f6;
                  border-radius: 8px;
                  margin-top: 15px;
                  text-align: center;
                }
                .footer {
                  background: #374151;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  font-size: 14px;
                }
                .action-box {
                  background: #fef3c7;
                  border: 2px solid #fbbf24;
                  border-radius: 8px;
                  padding: 15px;
                  margin: 20px 0;
                }
                .action-box h3 {
                  color: #92400e;
                  margin-top: 0;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🛒 طلب جديد من متجر آفاق</h1>
                </div>
                <div class="content">
                  <div class="info-section">
                    <h3>📋 معلومات الطلب</h3>
                    <div><strong>رقم الطلب:</strong> ${orderNumber}</div>
                    <div><strong>تاريخ الطلب:</strong> ${orderDate}</div>
                    <div><strong>الوقت:</strong> ${new Date().toLocaleTimeString('ar-SA')}</div>
                  </div>

                  <div class="info-section">
                    <h3>👤 بيانات العميل</h3>
                    <div><strong>الاسم الكامل:</strong> ${customerData.fullName}</div>
                    <div><strong>البريد الإلكتروني:</strong> ${customerData.email}</div>
                    <div><strong>رقم الهاتف:</strong> ${customerData.phone}</div>
                    ${customerData.message ? `<div style="margin-top: 10px;"><strong>رسالة إضافية:</strong><br/><em>${customerData.message}</em></div>` : ''}
                  </div>

                  <div class="info-section">
                    <h3>🛒 تفاصيل الطلب</h3>
                    ${cartItems.map((item: { name: string; quantity: number; price: number }) => `
                      <div class="order-item">
                        <div><strong>${item.name}</strong></div>
                        <div>الكمية: ${item.quantity} × ${item.price.toLocaleString()} ر.س = <strong>${(item.price * item.quantity).toLocaleString()} ر.س</strong></div>
                      </div>
                    `).join('')}
                    <div class="total">
                      المجموع الكلي: ${totalPrice.toLocaleString()} ر.س
                    </div>
                  </div>

                  <div class="action-box">
                    <h3>🔔 الإجراءات المطلوبة:</h3>
                    <ul style="margin: 10px 0; padding-right: 20px;">
                      <li>التواصل مع العميل خلال 24 ساعة</li>
                      <li>تأكيد تفاصيل الطلب</li>
                      <li>ترتيب عملية الدفع</li>
                      <li>تفعيل الخدمات بعد تأكيد الدفع</li>
                    </ul>
                  </div>
                </div>
                <div class="footer">
                  <p style="margin: 5px 0;">هذا الإيميل تم إرساله تلقائياً من متجر آفاق المتكاملة</p>
                  <p style="margin: 5px 0; opacity: 0.8;">تاريخ الإرسال: ${new Date().toLocaleString('ar-SA')}</p>
                </div>
              </div>
            </body>
            </html>
        `;

        // Use onboarding@resend.dev for testing (works without verified domain)
        const fromEmail = 'AFAQ Store <onboarding@resend.dev>';

        const { data: internalData, error: internalError } = await resend.emails.send({
          from: fromEmail,
          to: [process.env.TO_EMAIL || 'info@afaqinfotech.com'],
          subject: `🛒 طلب جديد ${orderNumber} - ${customerData.fullName}`,
          html: internalHtml,
          reply_to: customerData.email,
        });

        if (internalError) {
          emailError = internalError;
          throw new Error('فشل في إرسال الإيميل الداخلي: ' + JSON.stringify(internalError));
        }
        internalEmailSent = true;

        // Customer confirmation email
        const customerText = `مرحبا ${customerData.fullName},\n\nتم استلام طلبك بنجاح.\nرقم الطلب: ${orderNumber}\nالتاريخ: ${orderDate}\nالمجموع: ${totalPrice.toLocaleString()} ر.س\n\nسنقوم بالتواصل معك خلال 24 ساعة.\n\nشكراً لثقتكم،\nفريق آفاق المتكاملة`;
        const customerHtml = `
            <!DOCTYPE html>
            <html dir="rtl" lang="ar">
            <head>
              <meta charset="utf-8">
              <title>تأكيد طلبك - آفاق</title>
              <style>
                body {
                  font-family: 'Segoe UI', Tahoma, Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f3f4f6;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: white;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .header {
                  background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                  color: white;
                  padding: 30px 20px;
                  text-align: center;
                }
                .header h1 { margin: 0; font-size: 24px; }
                .content {
                  background: #ffffff;
                  padding: 30px 20px;
                  line-height: 1.8;
                  color: #374151;
                }
                .order-box {
                  background: #f0fdf4;
                  border: 2px solid #86efac;
                  border-radius: 8px;
                  padding: 20px;
                  margin: 20px 0;
                  text-align: center;
                }
                .order-number {
                  font-size: 20px;
                  font-weight: bold;
                  color: #059669;
                  font-family: monospace;
                }
                .info-row {
                  margin: 10px 0;
                  padding: 10px;
                  background: #f9fafb;
                  border-radius: 6px;
                }
                .items-list {
                  background: #f9fafb;
                  padding: 15px;
                  border-radius: 8px;
                  margin: 15px 0;
                }
                .item {
                  padding: 8px 0;
                  border-bottom: 1px solid #e5e7eb;
                }
                .item:last-child { border-bottom: none; }
                .total {
                  font-size: 20px;
                  font-weight: bold;
                  color: #059669;
                  text-align: center;
                  padding: 15px;
                  background: #ecfdf5;
                  border-radius: 8px;
                  margin: 15px 0;
                }
                .footer {
                  background: #065f46;
                  color: white;
                  padding: 20px;
                  text-align: center;
                  font-size: 14px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>✅ تم استلام طلبك بنجاح</h1>
                </div>
                <div class="content">
                  <p>مرحباً <strong>${customerData.fullName}</strong>,</p>
                  <p>شكراً لتسوقك من آفاق المتكاملة لتكنولوجيا المعلومات. تم استلام طلبك بنجاح وسيتواصل معك فريقنا خلال 24 ساعة لتأكيد الطلب وترتيب عملية الدفع والتفعيل.</p>

                  <div class="order-box">
                    <div style="color: #065f46; margin-bottom: 8px;">رقم الطلب</div>
                    <div class="order-number">${orderNumber}</div>
                  </div>

                  <div class="info-row"><strong>تاريخ الطلب:</strong> ${orderDate}</div>
                  <div class="info-row"><strong>المجموع الكلي:</strong> ${totalPrice.toLocaleString()} ر.س</div>

                  <div class="items-list">
                    <h3 style="margin-top: 0; color: #374151;">ملخص الطلب:</h3>
                    ${cartItems.map((item: { name: string; quantity: number; price: number }) => `
                      <div class="item">
                        <div><strong>${item.name}</strong></div>
                        <div style="color: #6b7280; font-size: 14px;">الكمية: ${item.quantity} × ${item.price.toLocaleString()} ر.س</div>
                      </div>
                    `).join('')}
                  </div>

                  <div class="total">
                    المجموع: ${totalPrice.toLocaleString()} ر.س
                  </div>

                  <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
                    💡 يرجى حفظ رقم الطلب للمراجعة المستقبلية.
                  </p>
                </div>
                <div class="footer">
                  <p style="margin: 5px 0;">لأي استفسار، تواصل معنا:</p>
                  <p style="margin: 5px 0; font-weight: bold;">info@afaqinfotech.com</p>
                  <p style="margin: 15px 0 5px 0; opacity: 0.8; font-size: 12px;">آفاق المتكاملة لتكنولوجيا المعلومات</p>
                </div>
              </div>
            </body>
            </html>
        `;

        const { data: customerDataResp, error: customerError } = await resend.emails.send({
          from: fromEmail,
          to: [customerData.email],
          subject: `✅ تأكيد طلبك ${orderNumber} - آفاق المتكاملة`,
          html: customerHtml,
          text: customerText,
        });

        if (customerError) {
          emailError = customerError;
        } else {
          customerEmailSent = true;
        }

        emailSentStatus = internalEmailSent;
      } catch (resendError) {
        emailError = resendError;
        emailSentStatus = false;
      }
    }

    return NextResponse.json({
      success: true,
      orderNumber,
      message: emailSentStatus 
        ? 'تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.' 
        : 'تم استلام طلبك بنجاح! (الإيميل في وضع المحاكاة)',
      emailSent: emailSentStatus,
      internalEmailSent,
      customerEmailSent,
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