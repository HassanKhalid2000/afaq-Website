# 📧 دليل إعداد إرسال الإيميل للمتجر الإلكتروني

## 🎯 المشكلة الحالية
حالياً النظام يحاكي إرسال الإيميل فقط. لتفعيل الإرسال الحقيقي، تحتاج لاتباع إحدى الطرق التالية:

## ⚡ الطريقة الأسرع: استخدام Resend (مُوصى بها)

### 1️⃣ إنشاء حساب Resend:
- اذهب إلى: https://resend.com
- سجل حساب جديد (مجاني)
- احصل على API Key

### 2️⃣ تحديث ملف .env.local:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3️⃣ تفعيل الكود في route.ts:
أزل التعليق من السطور 69-80 في `/src/app/api/send-order/route.ts`

### 4️⃣ تثبيت حزمة resend:
```bash
npm install resend
```

---

## 🔧 الطريقة التقليدية: Gmail SMTP

### 1️⃣ إعداد Gmail:
- اذهب إلى Google Account Settings
- Security → 2-Step Verification (فعل إذا لم يكن مفعل)
- App passwords → Create new app password
- احفظ كلمة المرور (16 حرف)

### 2️⃣ تحديث ملف .env.local:
```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### 3️⃣ تفعيل الكود في route.ts:
أزل التعليق من السطور 44-50 وأضف:
```typescript
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
```

---

## 🏢 الطريقة الاحترافية: SMTP مخصص

إذا كان لديك نطاق خاص (مثل afaqinfotech.com):

### 1️⃣ احصل على إعدادات SMTP من مزود الاستضافة
### 2️⃣ تحديث ملف .env.local:
```bash
SMTP_HOST=smtp.afaqinfotech.com
SMTP_PORT=587
SMTP_USER=noreply@afaqinfotech.com
SMTP_PASSWORD=your-password
```

### 3️⃣ تفعيل الكود في route.ts:
```typescript
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
```

---

## 🔄 خطوات التفعيل السريع

### للتجربة السريعة مع Resend:

1. **سجل في Resend:** https://resend.com
2. **احصل على API Key**
3. **عدل الملف:** `src/app/api/send-order/route.ts`
4. **أزل التعليق من السطور 69-80**
5. **أضف API Key في .env.local**
6. **ثبت resend:** `npm install resend`

### كود التفعيل المطلوب:

```typescript
// أضف في بداية الملف
import { Resend } from 'resend';

// أضف داخل دالة POST
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@afaqinfotech.com',
  to: ['info@afaqinfotech.com'],
  subject: \`طلب جديد \${orderNumber} - \${customerData.fullName}\`,
  html: emailContent.replace(/\\n/g, '<br>'),
});
```

---

## 🚨 ملاحظات مهمة

1. **أمان الملفات:** تأكد أن `.env.local` مُضاف إلى `.gitignore`
2. **النطاق المخصص:** لاستخدام نطاقك الخاص، تحتاج للتحقق منه في Resend
3. **حدود الإرسال:** Resend يوفر 3000 إيميل مجاناً شهرياً
4. **اختبار الإرسال:** جرب إرسال إيميل تجريبي أولاً

---

## 🆘 إذا احتجت مساعدة

1. تحقق من console logs في المتصفح
2. تحقق من server logs
3. تأكد من صحة المعلومات في .env.local
4. جرب إرسال إيميل تجريبي بسيط أولاً

## 📞 الدعم الفني
إذا واجهت مشاكل، يرجى المراسلة مع:
- رسائل الخطأ الكاملة
- إعدادات البيئة (بدون كلمات المرور)
- خطوات إعادة الإنتاج