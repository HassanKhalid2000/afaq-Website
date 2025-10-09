# 🚀 دليل النشر السريع - آفاق

## 📝 معلومات أساسية

- **المنفذ:** 3000
- **البيئة:** Production
- **إدارة العمليات:** PM2
- **Web Server:** Nginx
- **SSL:** Let's Encrypt (Certbot)

---

## ⚡ أوامر سريعة

### على VPS:

```bash
# الدخول للمشروع
cd ~/afaq-Website

# تحديث ونشر تلقائي
./deploy.sh

# أو يدوياً:
git pull
npm install
npm run build
pm2 restart afaq-website
```

### من جهازك (رفع بدون Git):

```bash
# من مجلد المشروع
rsync -avz --progress \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude 'logs' \
  --exclude '.git' \
  . username@your_vps_ip:/home/username/afaq-Website/

# ثم على VPS:
ssh username@your_vps_ip
cd ~/afaq-Website
./deploy.sh
```

---

## 🔧 أوامر PM2

```bash
pm2 list                  # قائمة التطبيقات
pm2 logs afaq-website     # عرض السجلات
pm2 logs --lines 100      # آخر 100 سطر
pm2 restart afaq-website  # إعادة التشغيل
pm2 stop afaq-website     # إيقاف
pm2 start afaq-website    # تشغيل
pm2 monit                 # مراقبة فورية
pm2 reload afaq-website   # إعادة تحميل (zero downtime)
pm2 delete afaq-website   # حذف من PM2
pm2 save                  # حفظ القائمة الحالية
```

---

## 🌐 أوامر Nginx

```bash
# اختبار الإعدادات
sudo nginx -t

# إعادة التشغيل
sudo systemctl restart nginx
sudo systemctl reload nginx

# الحالة
sudo systemctl status nginx

# السجلات
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# تعديل الإعدادات
sudo nano /etc/nginx/sites-available/afaqinfotech.com
```

---

## 🔒 SSL/HTTPS (Certbot)

```bash
# تجديد الشهادة
sudo certbot renew

# اختبار التجديد
sudo certbot renew --dry-run

# إعادة إصدار
sudo certbot --nginx -d afaqinfotech.com -d www.afaqinfotech.com

# حالة الشهادة
sudo certbot certificates
```

---

## 📧 تفعيل البريد الإلكتروني

```bash
# على VPS
cd ~/afaq-Website
nano .env.local

# أضف:
RESEND_API_KEY=re_your_actual_key
FROM_EMAIL=noreply@afaqinfotech.com
TO_EMAIL=info@afaqinfotech.com

# حفظ وإعادة التشغيل
pm2 restart afaq-website
```

---

## 🐛 حل المشاكل

### التطبيق لا يعمل:

```bash
pm2 logs afaq-website
pm2 restart afaq-website
pm2 delete afaq-website
pm2 start ecosystem.config.js
```

### Nginx خطأ 502:

```bash
pm2 status
curl http://localhost:3000
sudo systemctl restart nginx
```

### خطأ في البناء:

```bash
rm -rf .next node_modules
npm install
npm run build
pm2 restart afaq-website
```

### الذاكرة ممتلئة:

```bash
# تنظيف npm cache
npm cache clean --force

# تنظيف PM2 logs
pm2 flush

# حذف logs القديمة
rm -rf logs/*
```

---

## 📊 المراقبة

```bash
# استخدام الموارد
htop
pm2 monit

# مساحة القرص
df -h

# الذاكرة
free -h

# العمليات
ps aux | grep node
```

---

## 🔄 النسخ الاحتياطي

```bash
# نسخ احتياطي كامل
cd ~
tar -czf afaq-backup-$(date +%Y%m%d-%H%M%S).tar.gz afaq-Website/

# تنزيل للجهاز المحلي
scp username@vps_ip:~/afaq-backup-*.tar.gz ~/Desktop/
```

---

## 🌍 اختبار الموقع

```bash
# من VPS
curl http://localhost:3000
curl http://afaqinfotech.com
curl https://afaqinfotech.com

# اختبار السرعة
curl -w "@curl-format.txt" -o /dev/null -s https://afaqinfotech.com
```

---

## 📁 الملفات المهمة

| الملف | الوظيفة |
|------|---------|
| `ecosystem.config.js` | إعدادات PM2 |
| `nginx.conf` | مثال إعدادات Nginx |
| `.env.local` | متغيرات البيئة (لا ترفع للـ Git) |
| `deploy.sh` | سكربت النشر التلقائي |
| `VPS_DEPLOYMENT_GUIDE.md` | دليل شامل |
| `EMAIL_SETUP_GUIDE.md` | دليل البريد الإلكتروني |

---

## 🎯 بعد كل تحديث

```bash
# 1. رفع الملفات
git push  # أو rsync

# 2. على VPS
cd ~/afaq-Website
./deploy.sh

# 3. التحقق
pm2 logs afaq-website
curl https://afaqinfotech.com
```

---

## 📞 معلومات الاتصال بـ VPS

```bash
# SSH
ssh username@your_vps_ip

# SFTP
sftp username@your_vps_ip

# مع مفتاح SSH
ssh -i ~/.ssh/id_rsa username@your_vps_ip
```

---

## ✅ قائمة التحقق اليومية

- [ ] `pm2 status` - التطبيق يعمل؟
- [ ] `pm2 logs` - لا توجد أخطاء؟
- [ ] `curl https://afaqinfotech.com` - الموقع يستجيب؟
- [ ] `df -h` - مساحة كافية؟
- [ ] `free -h` - ذاكرة كافية؟

---

## 🚨 للطوارئ

```bash
# إعادة تشغيل كل شيء
pm2 restart all
sudo systemctl restart nginx

# إعادة تشغيل VPS
sudo reboot

# بعد إعادة التشغيل، PM2 يبدأ تلقائياً
# تحقق بعد دقيقة
pm2 list
```

---

## 📚 مراجع مفيدة

- [PM2 Documentation](https://pm2.keymetrics.io/docs)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Let's Encrypt](https://letsencrypt.org/docs/)

---

**💡 نصيحة:** احفظ هذا الملف للرجوع إليه بسرعة!
