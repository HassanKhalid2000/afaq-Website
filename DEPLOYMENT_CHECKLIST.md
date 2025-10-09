# ✅ قائمة التحقق من النشر - آفاق المتكاملة

استخدم هذه القائمة لضمان نشر ناجح للموقع على VPS.

---

## 📋 قبل البدء

- [ ] لديك VPS جاهز (Ubuntu 20.04/22.04 أو CentOS 8+)
- [ ] لديك معلومات الدخول SSH (IP، username، password/key)
- [ ] الدومين (afaqinfotech.com) يشير إلى IP الخاص بـ VPS
- [ ] لديك حساب Resend.com و API Key جاهز
- [ ] لديك البريد info@afaqinfotech.com جاهز للاستقبال

---

## 🔧 إعداد VPS - الأساسيات

- [ ] اتصلت بـ VPS عبر SSH بنجاح
- [ ] حدثت النظام: `sudo apt update && sudo apt upgrade -y`
- [ ] ثبتت الأدوات: `curl`, `git`, `build-essential`
- [ ] أعددت الجدار الناري (UFW):
  - [ ] `sudo ufw allow OpenSSH`
  - [ ] `sudo ufw allow 'Nginx Full'`
  - [ ] `sudo ufw enable`

---

## 📦 Node.js و NPM

- [ ] ثبتت NVM (Node Version Manager)
- [ ] ثبتت Node.js 20: `nvm install 20`
- [ ] تأكدت من النسخة: `node --version` (يجب أن يكون v20.x.x)
- [ ] تأكدت من npm: `npm --version`

---

## 🚀 PM2 Process Manager

- [ ] ثبتت PM2: `npm install -g pm2`
- [ ] تأكدت من النسخة: `pm2 --version`
- [ ] أعددت PM2 للبدء التلقائي: `pm2 startup systemd`
- [ ] نفذت الأمر الذي ظهر من pm2 startup

---

## 📁 رفع المشروع

اختر طريقة واحدة:

### الطريقة 1: Git (موصى بها)
- [ ] رفعت المشروع على GitHub/GitLab
- [ ] استنسخت المشروع: `git clone ...`
- [ ] الملفات موجودة في `~/afaq-Website`

### الطريقة 2: rsync
- [ ] رفعت الملفات: `rsync -avz --exclude 'node_modules' ...`
- [ ] تأكدت من وجود جميع الملفات

### الطريقة 3: SFTP
- [ ] رفعت المجلد بالكامل عبر FileZilla/WinSCP
- [ ] تأكدت من وجود package.json

---

## ⚙️ إعداد المشروع

- [ ] دخلت إلى مجلد المشروع: `cd ~/afaq-Website`
- [ ] ثبتت dependencies: `npm install`
- [ ] أنشأت ملف `.env.local`:
  - [ ] أضفت `RESEND_API_KEY=re_...`
  - [ ] أضفت `FROM_EMAIL=noreply@afaqinfotech.com`
  - [ ] أضفت `TO_EMAIL=info@afaqinfotech.com`
  - [ ] أضفت `NODE_ENV=production`
- [ ] بنيت المشروع: `npm run build`
- [ ] البناء نجح بدون أخطاء
- [ ] أنشأت مجلد logs: `mkdir -p logs`

---

## 🔄 تشغيل مع PM2

- [ ] جعلت deploy.sh قابل للتنفيذ: `chmod +x deploy.sh`
- [ ] شغلت التطبيق: `pm2 start ecosystem.config.js`
- [ ] تأكدت من الحالة: `pm2 status` (يجب أن يكون online)
- [ ] راجعت السجلات: `pm2 logs afaq-website` (لا توجد أخطاء)
- [ ] حفظت قائمة PM2: `pm2 save`
- [ ] اختبرت محلياً: `curl http://localhost:3000` (يستجيب بنجاح)

---

## 🌐 Nginx - Web Server

- [ ] ثبتت Nginx: `sudo apt install nginx`
- [ ] أزلت الإعداد الافتراضي: `sudo rm /etc/nginx/sites-enabled/default`
- [ ] نسخت ملف الإعداد: `sudo cp nginx.conf /etc/nginx/sites-available/afaqinfotech.com`
- [ ] أو أنشأت ملف جديد بالمحتوى الصحيح
- [ ] فعّلت الموقع: `sudo ln -s /etc/nginx/sites-available/afaqinfotech.com /etc/nginx/sites-enabled/`
- [ ] اختبرت الإعداد: `sudo nginx -t` (يجب أن يكون successful)
- [ ] أعدت تشغيل Nginx: `sudo systemctl restart nginx`
- [ ] فعّلت البدء التلقائي: `sudo systemctl enable nginx`
- [ ] تأكدت من الحالة: `sudo systemctl status nginx` (active)

---

## 🔒 SSL/HTTPS - Let's Encrypt

- [ ] ثبتت Certbot: `sudo apt install certbot python3-certbot-nginx`
- [ ] الدومين يشير إلى VPS (تحقق: `ping afaqinfotech.com`)
- [ ] حصلت على شهادة: `sudo certbot --nginx -d afaqinfotech.com -d www.afaqinfotech.com`
- [ ] أدخلت بريدك الإلكتروني
- [ ] وافقت على الشروط
- [ ] اخترت redirect HTTP → HTTPS
- [ ] الشهادة صدرت بنجاح
- [ ] اختبرت التجديد: `sudo certbot renew --dry-run`

---

## ✅ اختبار الموقع

### من VPS:
- [ ] `curl http://localhost:3000` - يعمل
- [ ] `curl http://afaqinfotech.com` - يعمل
- [ ] `curl https://afaqinfotech.com` - يعمل (SSL)

### من المتصفح:
- [ ] http://afaqinfotech.com - يفتح
- [ ] https://afaqinfotech.com - يفتح (قفل أخضر)
- [ ] www.afaqinfotech.com - يفتح
- [ ] الصفحة الرئيسية تظهر بشكل صحيح
- [ ] جميع الصور تظهر
- [ ] القوائم تعمل
- [ ] الخطوط العربية تظهر بشكل صحيح

---

## 🛒 اختبار المتجر والبريد

- [ ] فتحت `/store`
- [ ] أضفت منتج إلى السلة
- [ ] ذهبت إلى `/cart`
- [ ] ذهبت إلى `/checkout`
- [ ] ملأت النموذج ببيانات حقيقية
- [ ] أرسلت الطلب
- [ ] ظهرت صفحة النجاح `/order-success`
- [ ] وصل إيميل إلى `info@afaqinfotech.com` بتفاصيل الطلب:
  - [ ] رقم الطلب موجود
  - [ ] بيانات العميل صحيحة
  - [ ] تفاصيل المنتجات موجودة
  - [ ] المبلغ الإجمالي صحيح
- [ ] وصل إيميل تأكيد للعميل

---

## 📊 المراقبة والأمان

- [ ] راجعت سجلات PM2: `pm2 logs` (لا توجد أخطاء)
- [ ] راجعت سجلات Nginx: `sudo tail -f /var/log/nginx/error.log`
- [ ] تحققت من استخدام الموارد: `htop` أو `pm2 monit`
- [ ] الذاكرة المستخدمة معقولة (< 80%)
- [ ] المعالج لا يعمل بكامل طاقته باستمرار
- [ ] المساحة الحرة كافية: `df -h`

---

## 🔄 النسخ الاحتياطي

- [ ] أنشأت نسخة احتياطية أولية:
  ```bash
  cd ~
  tar -czf afaq-backup-initial.tar.gz afaq-Website/
  ```
- [ ] نزلت النسخة الاحتياطية لجهازك
- [ ] جدولت نسخ احتياطية دورية (اختياري)

---

## 📝 التوثيق

- [ ] حفظت معلومات الدخول SSH بأمان
- [ ] سجلت عنوان IP للـ VPS
- [ ] سجلت Resend API Key في مكان آمن
- [ ] قرأت `VPS_DEPLOYMENT_GUIDE.md`
- [ ] قرأت `QUICK_DEPLOY_REFERENCE.md`
- [ ] وضعت إشارة على الملفات المهمة

---

## 🚀 بعد النشر

- [ ] أعلمت العميل/الفريق أن الموقع حي
- [ ] راقبت السجلات لمدة ساعة على الأقل
- [ ] اختبرت جميع الصفحات الرئيسية:
  - [ ] `/` - الرئيسية
  - [ ] `/about` - من نحن
  - [ ] `/solutions` - الحلول
  - [ ] `/store` - المتجر
  - [ ] `/contact` - التواصل
- [ ] تحققت من سرعة الموقع
- [ ] اختبرت على أجهزة مختلفة (موبايل، ديسكتوب)

---

## 🔧 الصيانة الدورية

### يومياً:
- [ ] `pm2 status` - تحقق من حالة التطبيق
- [ ] `pm2 logs --lines 50` - راجع السجلات

### أسبوعياً:
- [ ] `sudo apt update && sudo apt upgrade` - تحديثات الأمان
- [ ] `pm2 logs --lines 500` - راجع السجلات المفصلة
- [ ] `df -h` - تحقق من المساحة

### شهرياً:
- [ ] نسخة احتياطية كاملة
- [ ] مراجعة أداء الموقع
- [ ] تحديث dependencies: `npm audit`

---

## ⚠️ ماذا لو حدثت مشكلة؟

### الموقع لا يفتح:
1. [ ] تحقق: `pm2 status`
2. [ ] تحقق: `sudo systemctl status nginx`
3. [ ] راجع: `pm2 logs`
4. [ ] راجع: `sudo tail -100 /var/log/nginx/error.log`

### البريد لا يُرسل:
1. [ ] تحقق من `.env.local`
2. [ ] تحقق من RESEND_API_KEY
3. [ ] راجع: `pm2 logs | grep email`
4. [ ] اذهب إلى resend.com وتحقق من الحصة

### الموقع بطيء:
1. [ ] تحقق: `htop` أو `pm2 monit`
2. [ ] تحقق من الذاكرة: `free -h`
3. [ ] امسح cache: `pm2 restart afaq-website`

---

## 🎉 تهانينا!

إذا أكملت جميع العناصر أعلاه، فموقع آفاق المتكاملة الآن:

✅ يعمل على VPS
✅ آمن مع HTTPS
✅ يرسل إيميلات تلقائياً
✅ يعيد التشغيل تلقائياً عند الحاجة
✅ جاهز للعملاء!

---

## 📞 للدعم

راجع الملفات التالية:
- `VPS_DEPLOYMENT_GUIDE.md` - دليل شامل
- `QUICK_DEPLOY_REFERENCE.md` - مرجع سريع
- `EMAIL_SETUP_GUIDE.md` - دليل البريد الإلكتروني

---

**💡 نصيحة:** اطبع هذه القائمة أو احفظها كـ PDF واستخدمها في كل مرة تنشر فيها تحديث!

التاريخ: ___________
بواسطة: ___________
الحالة: ⬜ مكتمل ⬜ قيد التنفيذ ⬜ متوقف
