# 🚀 نشر موقع آفاق المتكاملة على VPS

## 📦 ملفات النشر الجاهزة

تم إنشاء جميع الملفات اللازمة لنشر الموقع على VPS:

### 📄 الملفات المُنشأة:

1. **`VPS_DEPLOYMENT_GUIDE.md`** 📘
   - دليل شامل خطوة بخطوة
   - يشرح كل التفاصيل من البداية للنهاية
   - مناسب للمبتدئين

2. **`QUICK_DEPLOY_REFERENCE.md`** ⚡
   - مرجع سريع للأوامر
   - للرجوع السريع بعد النشر
   - حل المشاكل الشائعة

3. **`DEPLOYMENT_CHECKLIST.md`** ✅
   - قائمة تحقق كاملة
   - تأكد من عدم نسيان أي خطوة
   - يمكن طباعتها

4. **`ecosystem.config.js`** ⚙️
   - إعدادات PM2 (مدير العمليات)
   - جاهز للاستخدام
   - يشغل التطبيق تلقائياً

5. **`nginx.conf`** 🌐
   - إعدادات Nginx
   - يتضمن HTTP و HTTPS
   - security headers

6. **`deploy.sh`** 🔄
   - سكربت نشر تلقائي
   - يحدث ويشغل الموقع بأمر واحد
   - يوفر الوقت

7. **`.env.local`** 🔐
   - متغيرات البيئة
   - **مهم:** أضف Resend API Key قبل النشر
   - لا يُرفع على Git

---

## 🎯 الخطوات السريعة (للخبراء)

إذا كنت تعرف ماذا تفعل:

```bash
# 1. على VPS - تثبيت المتطلبات
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
npm install -g pm2
sudo apt install nginx certbot python3-certbot-nginx

# 2. رفع المشروع
rsync -avz --exclude 'node_modules' . user@vps:/home/user/afaq-Website/

# 3. على VPS - النشر
cd ~/afaq-Website
npm install
nano .env.local  # أضف RESEND_API_KEY
npm run build
pm2 start ecosystem.config.js
pm2 save

# 4. إعداد Nginx
sudo cp nginx.conf /etc/nginx/sites-available/afaqinfotech.com
sudo ln -s /etc/nginx/sites-available/afaqinfotech.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# 5. SSL
sudo certbot --nginx -d afaqinfotech.com -d www.afaqinfotech.com

# ✅ جاهز!
```

---

## 📚 للمبتدئين - ابدأ هنا

### الخطوة 1️⃣: احصل على VPS

احصل على VPS من أي من هذه الشركات:
- **DigitalOcean** (موصى به للمبتدئين) - $4-6/شهر
- **Linode/Akamai** - $5/شهر
- **Vultr** - $2.50-6/شهر
- **AWS Lightsail** - $3.50/شهر
- **Hetzner** (الأرخص) - €3-5/شهر

**المتطلبات المطلوبة:**
- نظام: Ubuntu 22.04 LTS
- RAM: 2GB على الأقل
- Storage: 20GB
- CPU: 1 vCore

### الخطوة 2️⃣: اجعل الدومين يشير إلى VPS

في لوحة تحكم الدومين (GoDaddy، Namecheap، إلخ):

```
نوع السجل: A
الاسم: @
القيمة: [IP الخاص بـ VPS]
TTL: 600

نوع السجل: A
الاسم: www
القيمة: [IP الخاص بـ VPS]
TTL: 600
```

انتظر 5-30 دقيقة حتى ينتشر DNS.

### الخطوة 3️⃣: احصل على Resend API Key

1. اذهب إلى [resend.com](https://resend.com)
2. أنشئ حساب مجاني
3. اذهب إلى [API Keys](https://resend.com/api-keys)
4. اضغط "Create API Key"
5. انسخ المفتاح (يبدأ بـ `re_...`)

### الخطوة 4️⃣: اتبع الدليل الشامل

افتح **`VPS_DEPLOYMENT_GUIDE.md`** واتبع الخطوات بالترتيب.

---

## 🔑 معلومات مهمة

### المنافذ المستخدمة:
- **3000** - Next.js (محلي فقط)
- **80** - HTTP (Nginx)
- **443** - HTTPS (Nginx)
- **22** - SSH

### مسارات مهمة على VPS:
```
~/afaq-Website/               # المشروع
~/afaq-Website/.env.local     # متغيرات البيئة
~/afaq-Website/logs/          # سجلات PM2
/etc/nginx/sites-available/   # إعدادات Nginx
/var/log/nginx/               # سجلات Nginx
```

### الأوامر الأكثر استخداماً:
```bash
pm2 list                      # حالة التطبيق
pm2 logs afaq-website         # السجلات
pm2 restart afaq-website      # إعادة تشغيل
./deploy.sh                   # نشر تحديث
sudo systemctl restart nginx  # إعادة تشغيل Nginx
```

---

## 📧 إعداد البريد الإلكتروني

### قبل النشر - مهم جداً!

1. افتح ملف `.env.local`
2. استبدل `re_your_api_key_here` بمفتاح Resend الحقيقي
3. تأكد من:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   TO_EMAIL=info@afaqinfotech.com
   ```

### بعد النشر:

اختبر البريد:
1. اذهب إلى `https://afaqinfotech.com/store`
2. أضف منتج
3. اذهب إلى Checkout
4. املأ النموذج
5. أرسل الطلب
6. تحقق من `info@afaqinfotech.com`

**إذا لم يصل الإيميل:**
```bash
pm2 logs afaq-website | grep -i email
pm2 logs afaq-website | grep -i resend
```

راجع **`EMAIL_SETUP_GUIDE.md`** للمزيد.

---

## 🔄 كيفية تحديث الموقع بعد النشر

### إذا كنت تستخدم Git:

```bash
# على جهازك
git add .
git commit -m "تحديث الموقع"
git push

# على VPS
ssh user@vps_ip
cd ~/afaq-Website
./deploy.sh
```

### إذا كنت ترفع يدوياً:

```bash
# من جهازك
rsync -avz --exclude 'node_modules' --exclude '.next' \
  . user@vps_ip:/home/user/afaq-Website/

# على VPS
ssh user@vps_ip
cd ~/afaq-Website
./deploy.sh
```

سكربت `deploy.sh` يقوم بـ:
- تحديث الملفات
- `npm install`
- `npm run build`
- `pm2 restart`

---

## 🐛 مشاكل شائعة وحلولها

### المشكلة: الموقع لا يفتح

```bash
# تحقق من PM2
pm2 status

# إذا كان offline
pm2 restart afaq-website

# راجع السجلات
pm2 logs afaq-website
```

### المشكلة: خطأ 502 Bad Gateway

```bash
# تأكد أن التطبيق يعمل
pm2 list
curl http://localhost:3000

# أعد تشغيل Nginx
sudo systemctl restart nginx
```

### المشكلة: البريد لا يُرسل

```bash
# تحقق من .env.local
cat .env.local | grep RESEND

# تحقق من السجلات
pm2 logs --lines 100 | grep -i resend

# أعد التشغيل
pm2 restart afaq-website
```

### المشكلة: npm run build فشل

```bash
# امسح وأعد التثبيت
rm -rf node_modules .next
npm install
npm run build
```

---

## 📊 المراقبة والصيانة

### يومياً:
```bash
pm2 status                    # الحالة
pm2 logs --lines 50          # السجلات
```

### أسبوعياً:
```bash
sudo apt update && sudo apt upgrade    # تحديثات الأمان
df -h                                  # مساحة القرص
free -h                                # الذاكرة
```

### شهرياً:
```bash
# نسخة احتياطية
cd ~
tar -czf afaq-backup-$(date +%Y%m%d).tar.gz afaq-Website/

# تحديث packages
cd ~/afaq-Website
npm audit
npm update
npm run build
pm2 restart afaq-website
```

---

## 🎓 مصادر التعلم

### للمبتدئين في Linux:
- [Linux Journey](https://linuxjourney.com/)
- [Ubuntu Server Guide](https://ubuntu.com/server/docs)

### للمبتدئين في Next.js:
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

### PM2:
- [PM2 Documentation](https://pm2.keymetrics.io/docs)
- [PM2 Quick Start](https://pm2.keymetrics.io/docs/usage/quick-start/)

### Nginx:
- [Nginx Beginner's Guide](https://nginx.org/en/docs/beginners_guide.html)
- [DigitalOcean Nginx Tutorials](https://www.digitalocean.com/community/tags/nginx)

---

## ✅ الخلاصة

لديك الآن كل ما تحتاجه لنشر موقع آفاق على VPS:

✅ **7 ملفات جاهزة** للنشر والإعداد
✅ **3 أدلة شاملة** (شامل، سريع، قائمة تحقق)
✅ **سكربت نشر تلقائي** يوفر الوقت
✅ **إعدادات جاهزة** لـ PM2 و Nginx
✅ **نظام بريد إلكتروني** جاهز للعمل

### خطواتك التالية:

1. 📖 اقرأ **`VPS_DEPLOYMENT_GUIDE.md`** من البداية للنهاية
2. ✅ استخدم **`DEPLOYMENT_CHECKLIST.md`** أثناء النشر
3. ⚡ احفظ **`QUICK_DEPLOY_REFERENCE.md`** للرجوع السريع
4. 🚀 **ابدأ النشر!**

---

## 📞 الدعم

إذا واجهت مشكلة:

1. راجع السجلات: `pm2 logs`
2. تحقق من الحالة: `pm2 status`
3. راجع ملف حل المشاكل في الأدلة
4. ابحث عن الخطأ في Google
5. راجع توثيق PM2/Nginx/Next.js

---

**💡 نصيحة أخيرة:**

خذ وقتك، اتبع الخطوات بعناية، ولا تتردد في قراءة الأدلة عدة مرات.
النشر الأول قد يأخذ 1-2 ساعة، لكن التحديثات المستقبلية ستأخذ دقائق فقط!

**حظاً موفقاً! 🎉**

---

تاريخ الإنشاء: 2025
المشروع: آفاق المتكاملة لتكنولوجيا المعلومات
النسخة: 1.0
