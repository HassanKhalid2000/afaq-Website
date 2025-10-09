# دليل نشر موقع آفاق على VPS

دليل شامل خطوة بخطوة لنشر موقع آفاق المتكاملة لتكنولوجيا المعلومات على VPS

---

## 📋 المتطلبات الأساسية

### VPS Requirements:
- **نظام التشغيل:** Ubuntu 20.04/22.04 LTS أو CentOS 8+
- **الذاكرة:** 2GB RAM على الأقل (موصى به: 4GB)
- **المساحة:** 20GB على الأقل
- **المعالج:** 1 CPU على الأقل (موصى به: 2 CPUs)

### Domain:
- دومين جاهز يشير إلى IP الخاص بـ VPS
- مثال: `afaqinfotech.com` و `www.afaqinfotech.com`

---

## 🚀 الخطوات التفصيلية

### 1️⃣ الاتصال بـ VPS

```bash
# اتصل بـ VPS عبر SSH
ssh root@your_vps_ip

# أو إذا كان لديك مستخدم آخر:
ssh username@your_vps_ip
```

---

### 2️⃣ تحديث النظام وتثبيت المتطلبات الأساسية

```bash
# تحديث النظام
sudo apt update && sudo apt upgrade -y

# تثبيت الأدوات الأساسية
sudo apt install -y curl git build-essential nginx ufw

# إعداد الجدار الناري
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

### 3️⃣ تثبيت Node.js (النسخة 20 LTS)

```bash
# تثبيت NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# تفعيل NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# تثبيت Node.js 20
nvm install 20
nvm use 20
nvm alias default 20

# التحقق من التثبيت
node --version  # يجب أن يظهر v20.x.x
npm --version
```

---

### 4️⃣ تثبيت PM2 (Process Manager)

```bash
# تثبيت PM2 عالمياً
npm install -g pm2

# إعداد PM2 للبدء التلقائي
pm2 startup systemd
# قم بتنفيذ الأمر الذي يظهر لك

# التحقق من التثبيت
pm2 --version
```

---

### 5️⃣ إنشاء مستخدم للتطبيق (موصى به للأمان)

```bash
# إنشاء مستخدم جديد
sudo adduser afaqweb
sudo usermod -aG sudo afaqweb

# التبديل للمستخدم الجديد
su - afaqweb
```

---

### 6️⃣ رفع ملفات المشروع إلى VPS

#### الطريقة الأولى: استخدام Git (موصى بها)

```bash
# الانتقال إلى مجلد المستخدم
cd ~

# استنساخ المشروع من GitHub (إذا كان موجود)
git clone https://github.com/your-username/afaq-Website.git
cd afaq-Website
```

#### الطريقة الثانية: رفع مباشر عبر SCP (من جهازك)

```bash
# من جهازك المحلي (ليس على VPS)
cd /Users/hassankhalid/Desktop/afaq-Website-main

# رفع المشروع بالكامل
scp -r . afaqweb@your_vps_ip:/home/afaqweb/afaq-Website/

# أو باستخدام rsync (أفضل)
rsync -avz --progress --exclude 'node_modules' --exclude '.next' . afaqweb@your_vps_ip:/home/afaqweb/afaq-Website/
```

#### الطريقة الثالثة: استخدام SFTP

```bash
# استخدم أي برنامج SFTP مثل FileZilla أو WinSCP
# اتصل بـ VPS وارفع المجلد afaq-Website-main
```

---

### 7️⃣ إعداد المشروع على VPS

```bash
# الدخول إلى مجلد المشروع
cd ~/afaq-Website

# تثبيت Dependencies
npm install

# إنشاء ملف .env.local (مهم جداً!)
nano .env.local
```

#### محتوى ملف `.env.local`:

```bash
# Email Configuration
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=noreply@afaqinfotech.com
TO_EMAIL=info@afaqinfotech.com
COMPANY_NAME=آفاق المتكاملة لتكنولوجيا المعلومات

# Production Settings
NODE_ENV=production
PORT=3000
```

احفظ الملف: `Ctrl + X` ثم `Y` ثم `Enter`

```bash
# بناء المشروع للإنتاج
npm run build

# إنشاء مجلد logs
mkdir -p logs

# اختبار التشغيل
npm start
# اضغط Ctrl+C لإيقاف الاختبار
```

---

### 8️⃣ تشغيل التطبيق مع PM2

```bash
# بدء التطبيق مع PM2
pm2 start ecosystem.config.js

# التحقق من الحالة
pm2 status
pm2 logs afaq-website

# حفظ قائمة العمليات
pm2 save

# التأكد من البدء التلقائي عند إعادة تشغيل VPS
pm2 startup
```

#### أوامر PM2 المفيدة:

```bash
pm2 list              # عرض جميع التطبيقات
pm2 restart afaq-website   # إعادة تشغيل
pm2 stop afaq-website      # إيقاف
pm2 logs afaq-website      # عرض السجلات
pm2 monit             # مراقبة فورية
pm2 delete afaq-website    # حذف من PM2
```

---

### 9️⃣ إعداد Nginx كـ Reverse Proxy

```bash
# حذف الإعداد الافتراضي
sudo rm /etc/nginx/sites-enabled/default

# إنشاء ملف إعداد جديد
sudo nano /etc/nginx/sites-available/afaqinfotech.com
```

الصق محتوى ملف `nginx.conf` المرفق مع المشروع، أو:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name afaqinfotech.com www.afaqinfotech.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

```bash
# تفعيل الموقع
sudo ln -s /etc/nginx/sites-available/afaqinfotech.com /etc/nginx/sites-enabled/

# اختبار الإعداد
sudo nginx -t

# إعادة تشغيل Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# التحقق من الحالة
sudo systemctl status nginx
```

---

### 🔟 إعداد SSL مع Let's Encrypt (HTTPS)

```bash
# تثبيت Certbot
sudo apt install -y certbot python3-certbot-nginx

# الحصول على شهادة SSL
sudo certbot --nginx -d afaqinfotech.com -d www.afaqinfotech.com

# اتبع التعليمات:
# - أدخل بريدك الإلكتروني
# - وافق على الشروط
# - اختر إعادة توجيه HTTP إلى HTTPS (موصى به)

# تجديد الشهادة تلقائياً
sudo certbot renew --dry-run

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

---

## ✅ التحقق من النشر

1. **اختبار الموقع:**
   ```bash
   # من VPS
   curl http://localhost:3000
   curl http://afaqinfotech.com
   curl https://afaqinfotech.com
   ```

2. **افتح المتصفح:**
   - http://afaqinfotech.com
   - https://afaqinfotech.com

3. **اختبار البريد الإلكتروني:**
   - اذهب إلى `/store`
   - أضف منتج واطلب
   - تحقق من info@afaqinfotech.com

---

## 🔄 تحديث المشروع (بعد التعديلات)

### من جهازك المحلي:

```bash
# إذا كنت تستخدم Git
git add .
git commit -m "تحديث الموقع"
git push origin main
```

### على VPS:

```bash
# الدخول إلى المشروع
cd ~/afaq-Website

# سحب آخر التحديثات
git pull origin main

# تثبيت dependencies الجديدة (إن وجدت)
npm install

# إعادة البناء
npm run build

# إعادة تشغيل PM2
pm2 restart afaq-website

# مراقبة السجلات
pm2 logs afaq-website
```

### إذا كنت ترفع يدوياً (بدون Git):

```bash
# من جهازك المحلي
rsync -avz --progress --exclude 'node_modules' --exclude '.next' . afaqweb@your_vps_ip:/home/afaqweb/afaq-Website/

# على VPS
cd ~/afaq-Website
npm install
npm run build
pm2 restart afaq-website
```

---

## 🛠️ حل المشاكل الشائعة

### 1. الموقع لا يعمل

```bash
# تحقق من حالة PM2
pm2 status
pm2 logs afaq-website

# تحقق من حالة Nginx
sudo systemctl status nginx
sudo nginx -t

# تحقق من البورت 3000
sudo netstat -tulpn | grep 3000
```

### 2. خطأ في البناء

```bash
# امسح البناء القديم
rm -rf .next
npm run build
```

### 3. خطأ في npm install

```bash
# امسح node_modules
rm -rf node_modules package-lock.json
npm install
```

### 4. البريد الإلكتروني لا يعمل

```bash
# تحقق من .env.local
cat .env.local

# تحقق من السجلات
pm2 logs afaq-website --lines 100
```

### 5. Nginx يعطي خطأ 502

```bash
# تحقق من أن التطبيق يعمل
pm2 status
curl http://localhost:3000

# أعد تشغيل كل شيء
pm2 restart afaq-website
sudo systemctl restart nginx
```

---

## 📊 المراقبة والصيانة

### مراقبة الأداء:

```bash
# مراقبة فورية
pm2 monit

# استخدام الذاكرة والمعالج
htop

# مساحة القرص
df -h
```

### النسخ الاحتياطي:

```bash
# نسخ احتياطي للمشروع
cd ~
tar -czf afaq-backup-$(date +%Y%m%d).tar.gz afaq-Website/

# نسخ احتياطي لقاعدة البيانات (إن وجدت)
# mysqldump -u user -p database > backup.sql
```

### التحديثات الأمنية:

```bash
# تحديث النظام بانتظام
sudo apt update && sudo apt upgrade -y

# تحديث Node.js packages
cd ~/afaq-Website
npm audit
npm audit fix
```

---

## 🎯 قائمة التحقق النهائية

- [ ] VPS جاهز ومحدث
- [ ] Node.js 20 مثبت
- [ ] PM2 مثبت ويعمل
- [ ] المشروع مرفوع على VPS
- [ ] ملف .env.local موجود مع RESEND_API_KEY
- [ ] npm install & npm run build تم بنجاح
- [ ] PM2 يشغل التطبيق
- [ ] Nginx مُعد كـ reverse proxy
- [ ] SSL/HTTPS مُفعل
- [ ] الموقع يعمل على https://afaqinfotech.com
- [ ] البريد الإلكتروني يصل إلى info@afaqinfotech.com
- [ ] PM2 يبدأ تلقائياً عند إعادة تشغيل VPS

---

## 📞 الدعم والمساعدة

إذا واجهت أي مشكلة:

1. **راجع السجلات:**
   ```bash
   pm2 logs afaq-website
   sudo tail -f /var/log/nginx/error.log
   ```

2. **تحقق من الحالة:**
   ```bash
   pm2 status
   sudo systemctl status nginx
   ```

3. **ملفات مرجعية:**
   - `ecosystem.config.js` - إعدادات PM2
   - `nginx.conf` - إعدادات Nginx
   - `EMAIL_SETUP_GUIDE.md` - إعداد البريد

---

## 🚀 البدء السريع (ملخص)

```bash
# 1. اتصل بـ VPS
ssh root@your_vps_ip

# 2. ثبت المتطلبات
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git build-essential nginx

# 3. ثبت Node.js 20
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20

# 4. ثبت PM2
npm install -g pm2

# 5. ارفع المشروع (من جهازك)
rsync -avz --exclude 'node_modules' . root@your_vps_ip:/root/afaq-Website/

# 6. على VPS - اعد المشروع
cd ~/afaq-Website
npm install
nano .env.local  # أضف RESEND_API_KEY
npm run build

# 7. شغل مع PM2
pm2 start ecosystem.config.js
pm2 save

# 8. اعد Nginx
sudo cp nginx.conf /etc/nginx/sites-available/afaqinfotech.com
sudo ln -s /etc/nginx/sites-available/afaqinfotech.com /etc/nginx/sites-enabled/
sudo systemctl restart nginx

# 9. فعّل SSL
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d afaqinfotech.com -d www.afaqinfotech.com

# 10. تحقق
curl https://afaqinfotech.com
```

---

✅ **مبروك! موقع آفاق المتكاملة الآن على الإنترنت!** 🎉
