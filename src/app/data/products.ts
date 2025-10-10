export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  features: string[];
  category: string;
  categorySlug: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "hosting",
    name: "الاستضافة",
    slug: "hosting",
    description: "خطط استضافة متنوعة لجميع احتياجاتك",
    icon: "fa-server"
  },
  {
    id: "smart-home",
    name: "المنزل الذكي",
    slug: "smart-home",
    description: "حلول ذكية لمنزل عصري ومتطور",
    icon: "fa-home"
  },
  {
    id: "business-systems",
    name: "أنظمة إدارة الأعمال",
    slug: "business-systems",
    description: "أنظمة ERP و CRM المتكاملة لجميع القطاعات",
    icon: "fa-briefcase"
  }
];

export const products: Product[] = [
  // Hosting Products
  {
    id: "basic-hosting",
    name: "خطة الاستضافة الأساسية",
    description: "حل استضافة مثالي للمواقع الصغيرة والمشاريع الناشئة مع جميع الميزات الأساسية التي تحتاجها لبدء موقعك الإلكتروني.",
    price: 375,
    currency: "ر.س",
    image: "https://page.gensparksite.com/v1/base64_upload/dc8422614e93b061465fc0eae2d64584",
    features: [
      "مساحة تخزين 10 جيجا بايت",
      "نطاق ترددي غير محدود",
      "دعم فني 24/7",
      "شهادة SSL مجانية",
      "لوحة تحكم سهلة الاستخدام",
      "نسخ احتياطي يومي"
    ],
    category: "الاستضافة",
    categorySlug: "hosting",
    isPopular: false
  },
  {
    id: "deluxe-hosting",
    name: "خطة الاستضافة المتقدمة",
    description: "خطة شاملة للمواقع المتوسطة والشركات الصغيرة التي تبحث عن أداء عالي وميزات متقدمة لنمو أعمالها الرقمية.",
    price: 1125,
    currency: "ر.س",
    image: "https://page.gensparksite.com/v1/base64_upload/cd73c50fc1b9309412f4bff4fb09f33b",
    features: [
      "مساحة تخزين 50 جيجا بايت",
      "نطاق ترددي غير محدود",
      "دعم فني متخصص 24/7",
      "شهادات SSL متقدمة",
      "أدوات تحليلية متقدمة",
      "نسخ احتياطي متعددة",
      "حماية من الهجمات الإلكترونية",
      "سرعة تحميل محسنة"
    ],
    category: "الاستضافة",
    categorySlug: "hosting",
    isPopular: true
  },
  {
    id: "super-hosting",
    name: "خطة الاستضافة الفائقة",
    description: "الحل الأمثل للمواقع الكبيرة والشركات المتقدمة، مع أعلى مستويات الأداء والحماية والدعم المتخصص.",
    price: 1875,
    currency: "ر.س",
    image: "https://page.gensparksite.com/v1/base64_upload/8d36d47006ffbf7e576ff05e0e3b38ba",
    features: [
      "مساحة تخزين 200 جيجا بايت",
      "نطاق ترددي غير محدود",
      "دعم فني مخصص 24/7",
      "شهادات SSL بريمي",
      "خادم مخصص للأداء",
      "نسخ احتياطي فورية",
      "حماية متقدمة من DDoS",
      "تسريع CDN عالمي",
      "أدوات تطوير متقدمة",
      "مراقبة الأداء الحي"
    ],
    category: "الاستضافة",
    categorySlug: "hosting",
    isPopular: false
  },
  // Smart Home Products
  {
    id: "nature-7-pro",
    name: "Nature 7 PRO - لوحة التحكم الذكية",
    description: "لوحة تحكم بشاشة كاملة تدمج جميع ميزات التحكم الذكي، تمكنك من التحكم في مختلف الأجهزة المنزلية الذكية والتبديل بين المشاهد المختلفة مثل الخروج والنوم والسينما والعشاء. شاشة لمس 7 بوصة بتصميم عصري.",
    price: 2159,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "شاشة لمس 7 بوصة عالية الدقة",
      "تحكم كامل في جميع أجهزة المنزل الذكي",
      "التبديل بين المشاهد المختلفة",
      "قاعدة قياسية 86 ملم",
      "تصميم أنيق مدمج في الحائط",
      "متوافق مع بروتوكولات CoSS و Zigbee"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: true
  },
  {
    id: "smart-door-lock",
    name: "قفل الباب الذكي C200",
    description: "قفل باب ذكي متقدم بتقنية بصمة الإصبع وعدة طرق لفتح الباب، مناسب للأبواب بسماكة 40-122 ملم. يوفر أمان وراحة فائقة مع إمكانية التكامل مع نظام المنزل الذكي لتجربة سلسة.",
    price: 1290,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "قفل جسم قياسي 6068",
      "مناسب للأبواب بسماكة 40-122 ملم",
      "طرق متعددة لفتح الباب (بصمة، رمز، بطاقة)",
      "قفل أمان للأطفال",
      "إشعارات صوتية",
      "تكامل كامل مع نظام LifeSmart",
      "تجربة آمنة ومريحة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "defed-smart-station",
    name: "DEFED Smart Station PRO",
    description: "أول بوابة فائقة في الصناعة مع دعم 4G، البوابة المفتوحة الأولى التي تعبر الأنظمة والمنصات. تدعم بروتوكولات متعددة مثل CoSS و Zigbee و Z-Wave و Wi-Fi و BLE و Matter. نسخة PRO تضيف تكوينات هوائي تزيد قوة الإشارة خمس مرات.",
    price: 1290,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "دعم شبكات 4G",
      "بروتوكولات متعددة (CoSS, Zigbee, Z-Wave, Wi-Fi, BLE, Matter)",
      "قوة إشارة مضاعفة 5 مرات",
      "ثلاث خيارات لإمداد الطاقة",
      "بوابة مفتوحة عابرة للأنظمة",
      "معالج قوي يصل إلى 500 جهاز متصل"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "smart-station-basic",
    name: "Smart Station - محطة التحكم الأساسية",
    description: "مركز النظام البيئي للمنزل الذكي، معالج قوي يدعم حتى 500 جهاز متصل، بروتوكول CoSS المتقدم لضمان الاتصال السلس والموثوق بين جميع الأجهزة الذكية.",
    price: 469,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "معالج قوي عالي الأداء",
      "يدعم حتى 500 جهاز متصل",
      "بروتوكول CoSS المتقدم",
      "سهل التركيب والإعداد",
      "تحديثات برمجية دورية",
      "متوافق مع جميع أجهزة LifeSmart"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "nature-mini-pro-white",
    name: "Nature Mini PRO - شاشة 4 بوصة (أبيض)",
    description: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi ثنائي النطاق و BLE. تصميم أنيق وعصري.",
    price: 915,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "شاشة لمس HD 4 بوصة",
      "نظام تشغيل قابل للتخصيص",
      "بروتوكولات متعددة (CoSS, Zigbee, Wi-Fi, BLE)",
      "تصميم عصري باللون الأبيض",
      "تحكم سهل وسريع",
      "استهلاك منخفض للطاقة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "nature-mini-pro-grey",
    name: "Nature Mini PRO - شاشة 4 بوصة (رمادي)",
    description: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi ثنائي النطاق و BLE. تصميم أنيق باللون الرمادي.",
    price: 915,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "شاشة لمس HD 4 بوصة",
      "نظام تشغيل قابل للتخصيص",
      "بروتوكولات متعددة (CoSS, Zigbee, Wi-Fi, BLE)",
      "تصميم عصري باللون الرمادي",
      "تحكم سهل وسريع",
      "استهلاك منخفض للطاقة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "cube-switch-1way",
    name: "CUBE Switch Module - مفتاح ذكي (مسار واحد)",
    description: "يعمل مع Smart Station، مفتاح بمسار واحد، يحول المفتاح التقليدي إلى مفتاح ذكي، حجم مضغوط يناسب علب المفاتيح المختلفة.",
    price: 223,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "يعمل مع Smart Station",
      "تحويل المفاتيح التقليدية لذكية",
      "حجم مضغوط يناسب جميع العلب",
      "سهل التركيب",
      "مسار واحد",
      "موفر للطاقة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "cube-switch-2way",
    name: "CUBE Switch Module - مفتاح ذكي (مساران)",
    description: "يعمل مع Smart Station، مفتاح بمسارين، يحول المفتاح التقليدي إلى مفتاح ذكي، حجم مضغوط يناسب علب المفاتيح المختلفة.",
    price: 246,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "يعمل مع Smart Station",
      "تحويل المفاتيح التقليدية لذكية",
      "حجم مضغوط يناسب جميع العلب",
      "سهل التركيب",
      "مساران",
      "موفر للطاقة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "cube-switch-3way",
    name: "CUBE Switch Module PRO - مفتاح ذكي (3 مسارات)",
    description: "يعمل مع Smart Station، مفتاح بثلاث مسارات، يحول المفتاح التقليدي إلى مفتاح ذكي، حجم مضغوط يناسب علب المفاتيح المختلفة.",
    price: 270,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "يعمل مع Smart Station",
      "تحويل المفاتيح التقليدية لذكية",
      "حجم مضغوط يناسب جميع العلب",
      "سهل التركيب",
      "ثلاث مسارات",
      "موفر للطاقة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "blend-switch-1way-white",
    name: "BLEND Switch PRO - مفتاح ذكي (مسار واحد - أبيض)",
    description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة، ترقية تجربة المفاتيح. إضاءة لوحة قابلة للتخصيص بـ 16 مليون لون.",
    price: 305,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "يعمل مع Smart Station",
      "نوع 86 قياسي",
      "إضاءة لوحة 16 مليون لون",
      "توصيل سلك واحد فعال",
      "تحكم مزدوج ومتعدد",
      "تصميم أنيق باللون الأبيض"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "blend-switch-2way-white",
    name: "BLEND Switch PRO - مفتاح ذكي (مساران - أبيض)",
    description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة، ترقية تجربة المفاتيح. إضاءة لوحة قابلة للتخصيص بـ 17 مليون لون.",
    price: 328,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "يعمل مع Smart Station",
      "نوع 86 قياسي",
      "إضاءة لوحة 17 مليون لون",
      "توصيل سلك واحد فعال",
      "تحكم مزدوج ومتعدد",
      "تصميم أنيق باللون الأبيض"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "defed-door-sensor",
    name: "DEFED مستشعر الباب/النافذة",
    description: "مستشعر فتح ضيق التصميم، قابل للتطبيق على أي نوافذ أو أبواب. يحتوي على مستشعر حرارة مدمج لإعلام المستخدمين ببيئة الغرفة. عمر بطارية يصل إلى 10 سنوات.",
    price: 164,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "حماية من التلاعب",
      "عمر بطارية يصل إلى 10 سنوات",
      "نقل إشارة 800 متر",
      "مستشعر حرارة مدمج",
      "تصميم ضيق أنيق",
      "سهل التركيب"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "defed-motion-sensor",
    name: "DEFED مستشعر الحركة",
    description: "مستشعر PIR مدمج مع عنصر استشعار درجة الحرارة لدقة الكشف في درجات الحرارة المرتفعة. كشف موثوق للحركة والتواجد.",
    price: 199,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "تقنية PIR متقدمة",
      "مستشعر حرارة مدمج",
      "دقة عالية في الكشف",
      "استهلاك منخفض للطاقة",
      "زاوية كشف واسعة",
      "سهل التركيب"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "defed-indoor-siren",
    name: "DEFED صفارة إنذار داخلية",
    description: "جهاز تحذير في نظام الأمن المنزلي مع مؤشر LED ومستشعر حرارة، يوفر أصوات >80 ديسيبل. عند وجود متسلل، يتم تشغيل المعدات لطرده.",
    price: 246,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "صوت إنذار >80 ديسيبل",
      "مؤشر LED",
      "مستشعر حرارة مدمج",
      "تنبيهات فورية",
      "سهل التركيب",
      "استهلاك منخفض للطاقة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "motion-sensor-pro",
    name: "Motion Sensor PRO - مستشعر حركة احترافي",
    description: "مستشعر حركة احترافي بجسم مستطيل وحجرة بطارية كبيرة مصممة خصيصاً، يعيد إنتاج العناصر الكلاسيكية لكاميرات Leica.",
    price: 176,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "تصميم مستطيل أنيق",
      "حجرة بطارية كبيرة",
      "دقة عالية في الكشف",
      "استهلاك منخفض للطاقة",
      "سهل التركيب",
      "تصميم كلاسيكي"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "environmental-sensor",
    name: "Cube مستشعر بيئي",
    description: "يعمل مع Smart Station، مراقبة متزامنة لدرجة الحرارة والرطوبة والإضاءة، شاشة LCD، استهلاك منخفض للطاقة، سجل تاريخي، طاقة بطارية واحدة.",
    price: 188,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "مراقبة درجة الحرارة والرطوبة",
      "قياس مستوى الإضاءة",
      "شاشة LCD واضحة",
      "سجل تاريخي للقراءات",
      "استهلاك منخفض للطاقة",
      "بطارية واحدة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "water-leak-sensor",
    name: "مستشعر تسرب المياه",
    description: "يعمل مع Smart Station، كشف تسرب المياه، تنبيهات 24/7، استهلاك منخفض للطاقة، سجل تاريخي، طاقة بطارية واحدة.",
    price: 188,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "كشف تسرب المياه",
      "تنبيهات فورية 24/7",
      "استهلاك منخفض للطاقة",
      "سجل تاريخي",
      "سهل التركيب",
      "بطارية واحدة"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "gas-sensor",
    name: "مستشعر الغاز",
    description: "يعمل مع Smart Station، كشف تسرب الغاز بما في ذلك الميثان والغاز الطبيعي والغاز الحيوي، إشعارات دفع 24/7 وتنبيه صوتي، حساسية قابلة للتعديل.",
    price: 293,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "كشف الميثان والغاز الطبيعي",
      "إشعارات دفع 24/7",
      "تنبيه صوتي",
      "حساسية قابلة للتعديل",
      "سجل تاريخي",
      "إمداد طاقة 5 فولت"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "smoke-detector",
    name: "كاشف دخان ضوئي مستقل",
    description: "كاشف دخان ضوئي مستقل يعتمد مبدأ الاستشعار البصري المتقدم، يمكنه اكتشاف الدخان بسرعة في المرحلة المبكرة من الحريق واكتشاف حدوث الحريق في أقرب وقت ممكن.",
    price: 211,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "مبدأ استشعار بصري متقدم",
      "كشف مبكر للدخان",
      "إنذار صوتي",
      "إشارة لاسلكية للبوابة",
      "تنبيهات للهاتف المحمول",
      "يساعد في تقليل الخسائر"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "quicklink-curtain-32m",
    name: "Quicklink محرك ستائر ذكي (3.2 متر)",
    description: "يعمل مع Smart Station، مهام مجدولة، يتضمن محرك و 3.2 متر من مسار الستائر القابل للتعديل وجهاز تحكم عن بعد. حمولة 40 كجم.",
    price: 774,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "يعمل مع Smart Station",
      "مهام مجدولة",
      "مسار 3.2 متر قابل للتعديل",
      "جهاز تحكم عن بعد مدمج",
      "حمولة 40 كجم",
      "تشغيل هادئ"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "quicklink-curtain-52m",
    name: "Quicklink محرك ستائر ذكي (5.2 متر)",
    description: "يعمل مع Smart Station، مهام مجدولة، يتضمن محرك و 5.2 متر من مسار الستائر القابل للتعديل وجهاز تحكم عن بعد. حمولة 40 كجم.",
    price: 892,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "يعمل مع Smart Station",
      "مهام مجدولة",
      "مسار 5.2 متر قابل للتعديل",
      "جهاز تحكم عن بعد مدمج",
      "حمولة 40 كجم",
      "تشغيل هادئ"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },
  {
    id: "smart-plug",
    name: "قابس ذكي (Zigbee UK) مع مراقبة الطاقة",
    description: "يعمل مع Smart Station، مراقبة استهلاك الطاقة، التحكم عن بُعد، سهولة الاقتران، مادة مقاومة للحريق، توفير الطاقة.",
    price: 153,
    currency: "ر.س",
    image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
    features: [
      "مراقبة استهلاك الطاقة",
      "التحكم عن بُعد",
      "سهولة الاقتران",
      "مادة مقاومة للحريق",
      "توفير الطاقة",
      "متوافق مع Smart Station"
    ],
    category: "المنزل الذكي",
    categorySlug: "smart-home",
    isPopular: false
  },

  // Business Management Systems
  {
    id: "healthcare-management-system",
    name: "نظام إدارة القطاع الصحي",
    description: "حلول تقنية شاملة ومتخصصة للمؤسسات الصحية من المستشفيات والعيادات إلى الصيدليات وأقسام الأشعة. يشمل نظام إدارة المستشفيات HIMS، إدارة العيادات، إدارة الصيدليات، وأنظمة إدارة الأشعة.",
    price: 45000,
    currency: "ر.س",
    image: "https://placehold.co/800x600/dc2626/ffffff?text=Healthcare+Systems",
    features: [
      "نظام إدارة المستشفيات HIMS - إدارة المرضى والملفات الطبية الإلكترونية وحجز المواعيد",
      "نظام إدارة العيادات - نظام مواعيد متقدم وسجلات طبية ذكية ووصفات إلكترونية",
      "نظام إدارة الصيدليات - إدارة المخزون الذكية ونقاط البيع المتطورة",
      "أنظمة إدارة الأشعة - أرشفة الصور الطبية والتقارير الإشعاعية",
      "إدارة الكادر الطبي والأسرة والغرف",
      "الفواتير والمحاسبة الطبية",
      "تكامل كامل بين جميع الأنظمة"
    ],
    category: "أنظمة إدارة الأعمال",
    categorySlug: "business-systems",
    isPopular: true
  },
  {
    id: "education-management-system",
    name: "نظام إدارة القطاع التعليمي",
    description: "منصة تعليمية متكاملة تشمل إدارة المدارس والجامعات والتعليم الإلكتروني. يوفر حلولاً شاملة لإدارة الطلاب والمعلمين والمحتوى التعليمي مع الفصول الذكية وتحليلات التعلم المتقدمة.",
    price: 38000,
    currency: "ر.س",
    image: "https://placehold.co/800x600/2563eb/ffffff?text=Education+Systems",
    features: [
      "نظام إدارة المدارس - إدارة الطلاب والمعلمين ونظام الدرجات والجداول الدراسية",
      "منصة التعليم الإلكتروني - فصول افتراضية ومحتوى تفاعلي وواجبات واختبارات",
      "نظام إدارة الجامعات - القبول والتسجيل والشؤون الأكاديمية",
      "نظام إدارة المكتبات - فهرسة رقمية ونظام إعارة وبحث متقدم",
      "الفصول الذكية - سبورات تفاعلية وأنظمة عرض متقدمة",
      "تحليلات التعلم - تحليل أداء الطلاب والتنبؤ بالنتائج"
    ],
    category: "أنظمة إدارة الأعمال",
    categorySlug: "business-systems",
    isPopular: false
  },
  {
    id: "finance-management-system",
    name: "نظام إدارة القطاع المالي",
    description: "حلول مصرفية ومالية متكاملة تشمل الخدمات المصرفية الأساسية، بوابات الدفع الإلكتروني، إدارة المخاطر والامتثال، وإدارة الثروات. مع أعلى معايير الأمان والحماية.",
    price: 52000,
    currency: "ر.س",
    image: "https://placehold.co/800x600/059669/ffffff?text=Finance+Systems",
    features: [
      "نظام الخدمات المصرفية - إدارة الحسابات والمعاملات والقروض",
      "بوابة الدفع الإلكتروني - دعم جميع وسائل الدفع مع حماية من الاحتيال",
      "إدارة المخاطر والامتثال - تحليل المخاطر ومراقبة الامتثال التنظيمي",
      "إدارة الثروات والاستثمار - إدارة المحافظ وتحليل الأسواق",
      "إدارة علاقات العملاء المصرفية - ملفات شاملة وحملات مستهدفة",
      "الخدمات المصرفية عبر الهاتف - واجهة بديهية ومصادقة بيومترية"
    ],
    category: "أنظمة إدارة الأعمال",
    categorySlug: "business-systems",
    isPopular: true
  },
  {
    id: "government-management-system",
    name: "نظام إدارة القطاع الحكومي",
    description: "منصة حكومة إلكترونية متكاملة تشمل الخدمات الموحدة، إدارة الوثائق الرقمية، حلول المدن الذكية، وتحليل البيانات الحكومية مع أعلى معايير الأمن السيبراني.",
    price: 65000,
    currency: "ر.س",
    image: "https://placehold.co/800x600/7c3aed/ffffff?text=Government+Systems",
    features: [
      "منصة الحكومة الإلكترونية - بوابة موحدة وهوية رقمية ومدفوعات إلكترونية",
      "إدارة الوثائق الرقمية - أرشفة آمنة وتدفق موافقات آلي وتوقيع إلكتروني",
      "المدن الذكية - أنظمة نقل ذكية وإدارة الطاقة والإضاءة الذكية",
      "تحليل البيانات الحكومية - لوحات مؤشرات الأداء والتحليل التنبؤي",
      "الأمن السيبراني الحكومي - حماية البيانات وكشف التسلل",
      "إدارة سير العمل - أتمتة العمليات وتتبع المعاملات"
    ],
    category: "أنظمة إدارة الأعمال",
    categorySlug: "business-systems",
    isPopular: false
  },
  {
    id: "business-erp-crm-system",
    name: "نظام إدارة الأعمال التجارية ERP & CRM",
    description: "نظام تخطيط موارد المؤسسة ERP المتكامل مع نظام إدارة علاقات العملاء CRM. يشمل إدارة المالية والموارد البشرية والمخازن والمبيعات والتسويق مع ذكاء الأعمال المتقدم.",
    price: 42000,
    currency: "ر.س",
    image: "https://placehold.co/800x600/ea580c/ffffff?text=ERP+CRM+Systems",
    features: [
      "نظام ERP - إدارة المالية والمحاسبة والموارد البشرية والمخازن",
      "نظام CRM - إدارة العملاء وتتبع المبيعات وأتمتة التسويق",
      "نظام الموارد البشرية - إدارة الموظفين والحضور والرواتب والتقييم",
      "نظام المحاسبة والمالية - دليل الحسابات والقيود والتقارير المالية",
      "نظام إدارة المستندات - أرشفة رقمية وتوقيع إلكتروني",
      "ذكاء الأعمال - لوحات معلومات تفاعلية وتحليلات متقدمة"
    ],
    category: "أنظمة إدارة الأعمال",
    categorySlug: "business-systems",
    isPopular: true
  },
  {
    id: "industrial-management-system",
    name: "نظام إدارة القطاع الصناعي",
    description: "حلول صناعية متكاملة تشمل إدارة التصنيع، سلسلة التوريد، إنترنت الأشياء الصناعي، وإدارة الجودة والأصول. يحسن الإنتاجية ويقلل التكاليف التشغيلية.",
    price: 48000,
    currency: "ر.س",
    image: "https://placehold.co/800x600/64748b/ffffff?text=Industrial+Systems",
    features: [
      "نظام إدارة التصنيع - تخطيط ومراقبة الإنتاج وإدارة المخزون والجودة",
      "إدارة سلسلة التوريد - إدارة الموردين وتتبع الشحنات وتحسين التوزيع",
      "إنترنت الأشياء الصناعي - أجهزة استشعار ذكية ومراقبة في الوقت الفعلي",
      "إدارة الجودة والمطابقة - معايير الجودة واختبارات دورية وتقارير المطابقة",
      "إدارة الأصول والصيانة - جرد وتتبع وصيانة تنبؤية",
      "ذكاء الأعمال الصناعي - تحليل الأداء والإنتاجية والتكاليف"
    ],
    category: "أنظمة إدارة الأعمال",
    categorySlug: "business-systems",
    isPopular: false
  },
  {
    id: "telecommunications-management-system",
    name: "نظام إدارة قطاع الاتصالات",
    description: "منصة شاملة لشركات الاتصالات تشمل إدارة شبكات الجيل الخامس 5G، منصات إنترنت الأشياء، تحليلات البيانات الضخمة، والاتصالات السحابية المتقدمة.",
    price: 58000,
    currency: "ر.س",
    image: "https://placehold.co/800x600/0891b2/ffffff?text=Telecom+Systems",
    features: [
      "شبكات الجيل الخامس 5G - تصميم وتنفيذ وتحسين الأداء وإدارة الطيف",
      "أنظمة إدارة الشبكات - مراقبة في الوقت الفعلي وإدارة الأداء والجودة",
      "منصات إنترنت الأشياء IoT - إدارة الأجهزة المتصلة وتحليل البيانات",
      "تحليلات البيانات الضخمة - تحليل سلوك المشتركين والكشف عن الاحتيال",
      "الاتصالات السحابية - مراكز اتصال سحابية وأنظمة PBX افتراضية",
      "تطبيقات الاتصالات المتنقلة - إدارة الحسابات والدفع الإلكتروني"
    ],
    category: "أنظمة إدارة الأعمال",
    categorySlug: "business-systems",
    isPopular: false
  },
  {
    id: "retail-management-system",
    name: "نظام إدارة التجزئة والمبيعات",
    description: "نظام شامل لإدارة المتاجر ونقاط البيع والتجارة الإلكترونية. يوفر إدارة متكاملة للمخزون والمبيعات والعملاء مع تحليلات ذكية لتحسين الأداء وزيادة المبيعات.",
    price: 35000,
    currency: "ر.س",
    image: "https://placehold.co/800x600/dc2626/ffffff?text=Retail+Systems",
    features: [
      "نظام نقاط البيع POS - واجهة سهلة ودعم وسائل دفع متعددة وطباعة فواتير",
      "إدارة المخزون الذكية - تتبع في الوقت الفعلي وتنبيهات نفاد المخزون",
      "منصة التجارة الإلكترونية - متجر إلكتروني متكامل مع إدارة الطلبات والشحن",
      "إدارة علاقات العملاء - برامج ولاء ونقاط وعروض مخصصة",
      "تحليلات المبيعات - تقارير تفصيلية عن المبيعات والأداء والمخزون",
      "إدارة متعددة الفروع - تكامل كامل بين جميع الفروع والمستودعات"
    ],
    category: "أنظمة إدارة الأعمال",
    categorySlug: "business-systems",
    isPopular: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(product => product.categorySlug === categorySlug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};