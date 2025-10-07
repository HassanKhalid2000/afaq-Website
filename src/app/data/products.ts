export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  features: string[];
  category: string;
  isPopular?: boolean;
}

export const products: Product[] = [
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
    category: "استضافة",
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
    category: "استضافة",
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
    category: "استضافة",
    isPopular: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};