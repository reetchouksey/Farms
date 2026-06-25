// Central content store. Every visible string lives here in EN + HI.
// Use `useT()` hook (src/hooks/useT.js) to read it.

export const content = {
  nav: {
    home: { en: 'Home', hi: 'होम' },
    about: { en: 'About', hi: 'हमारे बारे में' },
    products: { en: 'Products', hi: 'उत्पाद' },
    brands: { en: 'Brands', hi: 'ब्रांड्स' },
    services: { en: 'Services', hi: 'सेवाएँ' },
    gallery: { en: 'Gallery', hi: 'गैलरी' },
    contact: { en: 'Contact', hi: 'संपर्क' },
    call: { en: 'Call', hi: 'कॉल' },
    enquire: { en: 'Enquire', hi: 'पूछताछ' },
  },

  topbar: {
    languageLabel: { en: 'Language', hi: 'भाषा' },
  },

  home: {
    heroBadge: { en: 'Serving Farmers Since Years', hi: 'वर्षों से किसानों की सेवा में' },
    heroTitle: { en: 'Quality Inputs for', hi: 'बेहतर फसल के लिए' },
    heroTitleAccent: { en: 'Better Harvest', hi: 'उत्तम कृषि उत्पाद' },
    heroSub: {
      en: 'Your trusted one-stop shop for premium seeds, fertilizers, pesticides, herbicides and farm equipment in Bhoura, Shahpur, Betul. Expert guidance for prosperous farming.',
      hi: 'भोरा, शाहपुर, बैतूल में बीज, खाद, कीटनाशक, खरपतवारनाशक और कृषि उपकरण के लिए आपका विश्वसनीय केंद्र। समृद्ध खेती के लिए विशेषज्ञ मार्गदर्शन।',
    },
    exploreProducts: { en: 'Explore Products', hi: 'उत्पाद देखें' },
    whatsappInquiry: { en: 'WhatsApp Inquiry', hi: 'व्हाट्सएप पूछताछ' },
    stats: [
      { num: '13+', label: { en: 'Authorized Brands', hi: 'अधिकृत ब्रांड्स' } },
      { num: '1000+', label: { en: 'Happy Farmers', hi: 'संतुष्ट किसान' } },
      { num: '100%', label: { en: 'Genuine Products', hi: 'असली उत्पाद' } },
      { num: '24/7', label: { en: 'Farmer Support', hi: 'किसान सहायता' } },
    ],
    features: [
      {
        icon: 'Medal',
        title: { en: 'Authorized Dealer', hi: 'अधिकृत डीलर' },
        desc: { en: 'Genuine products from 13+ leading agri brands.', hi: '13+ अग्रणी ब्रांड्स के असली उत्पाद।' },
      },
      {
        icon: 'UserCheck',
        title: { en: 'Expert Guidance', hi: 'विशेषज्ञ सलाह' },
        desc: { en: 'Personalized advice for every crop and season.', hi: 'हर फसल और मौसम के लिए सलाह।' },
      },
      {
        icon: 'IndianRupee',
        title: { en: 'Fair Pricing', hi: 'उचित मूल्य' },
        desc: { en: 'Best market rates with no hidden costs.', hi: 'बाज़ार के सर्वोत्तम दाम, कोई छिपी फ़ीस नहीं।' },
      },
      {
        icon: 'Truck',
        title: { en: 'Local Service', hi: 'स्थानीय सेवा' },
        desc: { en: 'Serving Bhoura, Shahpur and entire Betul region.', hi: 'भोरा, शाहपुर और पूरे बैतूल क्षेत्र में।' },
      },
    ],
    aboutEyebrow: { en: 'About Us', hi: 'हमारे बारे में' },
    aboutTitle: {
      en: 'Empowering Farmers with Quality & Trust',
      hi: 'गुणवत्ता और विश्वास के साथ किसानों का सशक्तिकरण',
    },
    aboutP1: {
      en: 'PATANKAR KRISHI SEVA KENDRA is a trusted agricultural input store serving farmers with quality seeds, fertilizers, pesticides, herbicides and agricultural equipment.',
      hi: 'पाटनकर कृषि सेवा केंद्र एक विश्वसनीय कृषि इनपुट स्टोर है जो किसानों को गुणवत्तापूर्ण बीज, उर्वरक, कीटनाशक, खरपतवारनाशक और कृषि उपकरण प्रदान करता है।',
    },
    aboutP2: {
      en: 'Our mission is to provide reliable products and expert guidance for better crop productivity and farm success.',
      hi: 'हमारा लक्ष्य बेहतर फसल उत्पादकता और खेती की सफलता के लिए विश्वसनीय उत्पाद और विशेषज्ञ मार्गदर्शन प्रदान करना है।',
    },
    aboutChecklist: [
      { en: 'Authorized dealer of top national brands', hi: 'शीर्ष राष्ट्रीय ब्रांड्स के अधिकृत डीलर' },
      { en: 'Crop-specific recommendations & soil-based solutions', hi: 'फसल-विशेष अनुशंसा एवं मिट्टी आधारित समाधान' },
      { en: 'Bilingual support — English & हिंदी', hi: 'अंग्रेज़ी एवं हिंदी में सहायता' },
      { en: 'GST-certified business — GSTIN 23CLQPP5043R1ZB', hi: 'जीएसटी प्रमाणित व्यवसाय — GSTIN 23CLQPP5043R1ZB' },
    ],
    learnMore: { en: 'Learn More', hi: 'और जानें' },
    productsEyebrow: { en: 'Our Products', hi: 'हमारे उत्पाद' },
    productsTitle: { en: 'Everything Your Farm Needs', hi: 'आपकी खेती के लिए सब कुछ' },
    productsSub: {
      en: 'From quality seeds to modern equipment — find every input under one roof.',
      hi: 'गुणवत्तापूर्ण बीज से लेकर आधुनिक उपकरणों तक — एक ही छत के नीचे।',
    },
    viewDetails: { en: 'View Details', hi: 'विवरण देखें' },
    brandsEyebrow: { en: 'Authorized Brands', hi: 'अधिकृत ब्रांड्स' },
    brandsTitle: { en: 'Trusted Partners, Quality Guaranteed', hi: 'विश्वसनीय साझीदार, गुणवत्ता की गारंटी' },
    brandsSub: {
      en: "We proudly stock products from India's most reputable agriculture brands.",
      hi: 'हम भारत के सबसे प्रतिष्ठित कृषि ब्रांड्स के उत्पाद रखते हैं।',
    },
    viewAllBrands: { en: 'View All Brands', hi: 'सभी ब्रांड्स देखें' },
  },

  productCategories: [
    {
      key: 'seeds',
      badge: { en: 'Seeds', hi: 'बीज' },
      icon: 'Sprout',
      img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
      title: { en: 'Quality Hybrid Seeds', hi: 'उच्च गुणवत्ता वाले संकर बीज' },
      desc: {
        en: 'Certified hybrid seeds from Mahyco, Rasi, Dekalb, Hytech and more — for maximum yield.',
        hi: 'महिको, रसी, डेकाल्ब, हाइटेक आदि के प्रमाणित संकर बीज — अधिकतम उपज के लिए।',
      },
    },
    {
      key: 'fertilizers',
      badge: { en: 'Fertilizers', hi: 'उर्वरक' },
      icon: 'FlaskConical',
      img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
      title: { en: 'Fertilizers & Nutrients', hi: 'उर्वरक एवं पोषक तत्व' },
      desc: {
        en: 'IFFCO, organic and micronutrient fertilizers to enrich your soil and boost plant growth.',
        hi: 'मिट्टी को समृद्ध करने और पौधों की वृद्धि के लिए इफको, जैविक एवं सूक्ष्म पोषक उर्वरक।',
      },
    },
    {
      key: 'pesticides',
      badge: { en: 'Pesticides', hi: 'कीटनाशक' },
      icon: 'Bug',
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
      title: { en: 'Pesticides & Insecticides', hi: 'कीटनाशक एवं रोगनाशक' },
      desc: {
        en: 'Effective crop-protection chemicals from Bayer, Dhanuka, Safex and other trusted brands.',
        hi: 'बायर, धनुका, सेफेक्स आदि विश्वसनीय ब्रांड्स के प्रभावी फसल सुरक्षा रसायन।',
      },
    },
    {
      key: 'herbicides',
      badge: { en: 'Herbicides', hi: 'खरपतवारनाशक' },
      icon: 'SprayCan',
      img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
      title: { en: 'Herbicides & Weed Killers', hi: 'खरपतवारनाशक एवं वीड किलर' },
      desc: {
        en: 'Selective and broad-spectrum herbicides to keep your fields clean and crops thriving.',
        hi: 'आपके खेतों को साफ़ रखने और फसल को बेहतर बनाने के लिए चयनात्मक एवं व्यापक-क्षेत्र खरपतवारनाशक।',
      },
    },
    {
      key: 'equipment',
      badge: { en: 'Equipment', hi: 'उपकरण' },
      icon: 'Tractor',
      img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
      title: { en: 'Agriculture Equipment', hi: 'कृषि उपकरण' },
      desc: {
        en: 'Sprayers, hand tools, irrigation kits and modern farming equipment for every requirement.',
        hi: 'हर ज़रूरत के लिए स्प्रेयर, हाथ के उपकरण, सिंचाई किट और आधुनिक खेती के उपकरण।',
      },
    },
    {
      key: 'guidance',
      badge: { en: 'Services', hi: 'सेवाएँ' },
      icon: 'Handshake',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      title: { en: 'Farmer Guidance', hi: 'किसान मार्गदर्शन' },
      desc: {
        en: 'Free expert advice on crop selection, pest management and yield optimization.',
        hi: 'फसल चयन, कीट प्रबंधन एवं उपज वृद्धि पर निःशुल्क विशेषज्ञ सलाह।',
      },
    },
  ],

  brands: [
    { code: 'IA', name: 'Indo American', cat: { en: 'Hybrid Seeds', hi: 'संकर बीज' }, group: 'seed' },
    { code: 'VA', name: 'Vishwas Agri Seeds', cat: { en: 'Vegetable & Field Seeds', hi: 'सब्जी एवं खेत बीज' }, group: 'seed' },
    { code: 'RA', name: 'Rasi Seeds', cat: { en: 'Cotton & Pulses', hi: 'कपास एवं दलहन' }, group: 'seed' },
    { code: 'MH', name: 'Mahyco', cat: { en: 'Hybrid & OP Varieties', hi: 'संकर एवं OP किस्में' }, group: 'seed' },
    { code: 'HT', name: 'Hytech Seeds', cat: { en: 'Cotton, Corn, Veggies', hi: 'कपास, मक्का, सब्जी' }, group: 'seed' },
    { code: 'DK', name: 'Dekalb (Bayer)', cat: { en: 'Premium Corn Hybrids', hi: 'प्रीमियम मक्का संकर' }, group: 'seed' },
    { code: 'MC', name: 'Mass Crop Science', cat: { en: 'Crop Protection', hi: 'फसल सुरक्षा' }, group: 'chem' },
    { code: 'SF', name: 'Safex Chemicals', cat: { en: 'Agro Chemicals', hi: 'कृषि रसायन' }, group: 'chem' },
    { code: 'BA', name: 'Bayer', cat: { en: 'Global Crop Science', hi: 'वैश्विक क्रॉप साइंस' }, group: 'chem' },
    { code: 'IF', name: 'IFFCO', cat: { en: 'Fertilizers', hi: 'उर्वरक' }, group: 'chem' },
    { code: 'DH', name: 'Dhanuka', cat: { en: 'Insecticides & Herbicides', hi: 'कीटनाशक एवं खरपतवारनाशक' }, group: 'chem' },
    { code: 'SS', name: 'Shri Siddhi Agri', cat: { en: 'Agri Chemicals', hi: 'कृषि रसायन' }, group: 'chem' },
    { code: 'AB', name: 'Abhimanyu Agro', cat: { en: 'Chemicals & Fertilizers', hi: 'रसायन एवं उर्वरक' }, group: 'chem' },
  ],

  about: {
    eyebrow1: { en: 'Our Story', hi: 'हमारी कहानी' },
    title1: { en: 'Built on Trust, Driven by Farming', hi: 'विश्वास पर खड़ा, खेती के लिए समर्पित' },
    p1: {
      en: 'PATANKAR KRISHI SEVA KENDRA is a trusted agricultural input store serving farmers with quality seeds, fertilizers, pesticides, herbicides and agricultural equipment.',
      hi: 'पाटनकर कृषि सेवा केंद्र एक विश्वसनीय कृषि इनपुट स्टोर है जो किसानों को गुणवत्तापूर्ण बीज, उर्वरक, कीटनाशक, खरपतवारनाशक और कृषि उपकरण प्रदान करता है।',
    },
    p2: {
      en: 'Located in the heart of Bhoura, near PNB Bank, our store has been a reliable companion to farmers across Shahpur tehsil and the Betul district. We believe that prosperous farming begins with quality inputs and the right knowledge.',
      hi: 'भोरा के केंद्र में, पीएनबी बैंक के पास स्थित हमारी दुकान शाहपुर तहसील और बैतूल जिले के किसानों की विश्वसनीय साथी रही है। हमारा मानना है कि समृद्ध खेती की शुरुआत गुणवत्तापूर्ण इनपुट और सही ज्ञान से होती है।',
    },
    checklist: [
      { en: 'GST-registered business — GSTIN 23CLQPP5043R1ZB', hi: 'जीएसटी पंजीकृत व्यवसाय — GSTIN 23CLQPP5043R1ZB' },
      { en: 'Direct authorization from 13+ national agri brands', hi: '13+ राष्ट्रीय कृषि ब्रांड्स से सीधी अधिकृति' },
      { en: 'Service in English & Hindi for every farmer', hi: 'हर किसान के लिए अंग्रेज़ी एवं हिंदी में सेवा' },
      { en: 'Free expert advice with every purchase', hi: 'हर खरीद के साथ निःशुल्क विशेषज्ञ सलाह' },
    ],
    eyebrow2: { en: 'What We Stand For', hi: 'हमारी मान्यताएँ' },
    title2: { en: 'Mission, Vision & Values', hi: 'मिशन, दृष्टिकोण और मूल्य' },
    sub2: { en: 'The principles that guide every farmer interaction.', hi: 'हर किसान से बातचीत में मार्गदर्शक सिद्धांत।' },
    mvv: [
      {
        icon: 'Target',
        title: { en: 'Our Mission', hi: 'हमारा लक्ष्य' },
        desc: {
          en: 'To provide reliable products and expert guidance to farmers for better crop productivity and farm success — at fair prices and with personal care.',
          hi: 'किसानों को बेहतर फसल उत्पादकता और खेती की सफलता के लिए विश्वसनीय उत्पाद और विशेषज्ञ मार्गदर्शन उचित मूल्य पर एवं व्यक्तिगत देखभाल के साथ प्रदान करना।',
        },
      },
      {
        icon: 'Eye',
        title: { en: 'Our Vision', hi: 'हमारा दृष्टिकोण' },
        desc: {
          en: 'To become the most trusted agricultural partner in the Betul region by empowering every farmer with quality inputs, knowledge, and modern farming solutions.',
          hi: 'गुणवत्तापूर्ण इनपुट, ज्ञान एवं आधुनिक कृषि समाधानों से हर किसान को सशक्त बनाते हुए बैतूल क्षेत्र का सर्वाधिक विश्वसनीय कृषि साथी बनना।',
        },
      },
      {
        icon: 'Heart',
        title: { en: 'Our Values', hi: 'हमारे मूल्य' },
        desc: {
          en: 'Honesty, transparency, farmer-first thinking, genuine products only, fair pricing, and unwavering commitment to the agricultural community we serve.',
          hi: 'ईमानदारी, पारदर्शिता, किसान-प्रथम सोच, केवल असली उत्पाद, उचित मूल्य और हमारे कृषि समुदाय के प्रति अटूट प्रतिबद्धता।',
        },
      },
    ],
    eyebrow3: { en: 'Why Choose Us', hi: 'हमें क्यों चुनें' },
    title3: { en: 'The Patankar Advantage', hi: 'पाटनकर लाभ' },
    sub3: { en: 'Six reasons farmers across Betul trust our store.', hi: 'बैतूल के किसान हमारी दुकान पर भरोसा करने के छह कारण।' },
    advantages: [
      {
        icon: 'ShieldCheck',
        title: { en: '100% Genuine', hi: '100% असली' },
        desc: { en: 'Only authentic products sourced directly from authorized manufacturers and distributors.', hi: 'केवल अधिकृत निर्माताओं एवं वितरकों से सीधे प्राप्त असली उत्पाद।' },
      },
      {
        icon: 'GraduationCap',
        title: { en: 'Expert Knowledge', hi: 'विशेषज्ञ ज्ञान' },
        desc: { en: 'Years of hands-on experience helping farmers solve crop, soil and pest challenges effectively.', hi: 'किसानों को फसल, मिट्टी और कीट से जुड़ी चुनौतियों को हल करने में वर्षों का अनुभव।' },
      },
      {
        icon: 'BadgePercent',
        title: { en: 'Fair Pricing', hi: 'उचित मूल्य' },
        desc: { en: 'Transparent rates with no hidden costs. Bulk discounts available for large purchases.', hi: 'पारदर्शी दाम, कोई छिपी फ़ीस नहीं। बड़ी मात्रा पर विशेष छूट उपलब्ध।' },
      },
      {
        icon: 'Languages',
        title: { en: 'Bilingual Service', hi: 'द्विभाषीय सेवा' },
        desc: { en: 'Full support in both English and Hindi for clear communication with every farmer.', hi: 'हर किसान से स्पष्ट संवाद के लिए अंग्रेज़ी एवं हिंदी दोनों में पूर्ण सहायता।' },
      },
      {
        icon: 'PackageOpen',
        title: { en: 'Wide Range', hi: 'विस्तृत श्रेणी' },
        desc: { en: 'All your farm inputs under one roof — seeds, fertilizers, pesticides, herbicides & tools.', hi: 'सभी कृषि इनपुट एक ही छत के नीचे — बीज, उर्वरक, कीटनाशक, खरपतवारनाशक एवं उपकरण।' },
      },
      {
        icon: 'Headphones',
        title: { en: 'After-Sales Support', hi: 'बिक्री पश्चात सहायता' },
        desc: { en: 'We stay with you through the season — call us anytime for help and follow-up advice.', hi: 'पूरे मौसम में हम आपके साथ हैं — सहायता और मार्गदर्शन के लिए कभी भी कॉल करें।' },
      },
    ],
  },

  services: {
    eyebrow1: { en: 'More Than a Store', hi: 'सिर्फ़ एक दुकान नहीं' },
    title1: { en: 'Complete Farming Solutions', hi: 'संपूर्ण कृषि समाधान' },
    sub1: {
      en: 'We sell quality inputs, but our real value is the expert advice we offer with every transaction — totally free.',
      hi: 'हम गुणवत्तापूर्ण इनपुट बेचते हैं, परंतु हमारा असली मूल्य है हर लेन-देन के साथ दी जाने वाली विशेषज्ञ सलाह — पूरी तरह निःशुल्क।',
    },
    items: [
      { icon: 'MessageCircle', title: { en: 'Farmer Guidance', hi: 'किसान मार्गदर्शन' }, desc: { en: 'Free consultation on which seed variety, fertilizer dose, or spray combination suits your land, soil and season.', hi: 'आपकी ज़मीन, मिट्टी और मौसम के अनुसार कौन सा बीज, उर्वरक मात्रा या स्प्रे संयोजन उचित है — निःशुल्क सलाह।' } },
      { icon: 'Leaf', title: { en: 'Crop Solutions', hi: 'फसल समाधान' }, desc: { en: 'Crop-specific input packages for soyabean, cotton, wheat, maize, vegetables and pulses — pre-planned for your sowing window.', hi: 'सोयाबीन, कपास, गेहूँ, मक्का, सब्जी एवं दलहन के लिए फसल-विशेष इनपुट पैकेज — आपकी बुआई के समय के अनुसार पहले से तैयार।' } },
      { icon: 'Bug', title: { en: 'Pest & Disease Advisory', hi: 'कीट एवं रोग सलाह' }, desc: { en: 'Bring a sample or photo of the affected plant — we identify the problem and recommend the right solution.', hi: 'प्रभावित पौधे का नमूना या फ़ोटो लाएँ — हम समस्या पहचानेंगे और सही उपाय बताएँगे।' } },
      { icon: 'Droplets', title: { en: 'Soil & Nutrition Advisory', hi: 'मिट्टी एवं पोषण सलाह' }, desc: { en: 'Discussion-based diagnosis of soil health and balanced fertilizer planning — including micronutrient correction.', hi: 'मिट्टी स्वास्थ्य की चर्चा आधारित जाँच और संतुलित उर्वरक योजना — सूक्ष्म पोषक सुधार सहित।' } },
      { icon: 'Award', title: { en: 'Brand Consultation', hi: 'ब्रांड सलाह' }, desc: { en: 'Compare brands and product options to pick the best value-for-money input that delivers proven results.', hi: 'सिद्ध परिणाम देने वाला सर्वोत्तम मूल्य-वाला इनपुट चुनने के लिए ब्रांड एवं उत्पादों की तुलना।' } },
      { icon: 'Headphones', title: { en: 'After-Sales Support', hi: 'बिक्री पश्चात सहायता' }, desc: { en: 'Call us anytime during the season for follow-up questions, spray-timing reminders, or to share results.', hi: 'सीज़न के दौरान किसी भी समय फॉलो-अप प्रश्न, स्प्रे समय या परिणाम साझा करने के लिए कॉल करें।' } },
      { icon: 'Percent', title: { en: 'Bulk Order Pricing', hi: 'थोक ऑर्डर मूल्य' }, desc: { en: 'Special rates for large purchases — ideal for groups, FPOs, cooperatives and large farm holdings.', hi: 'बड़ी खरीद पर विशेष दाम — समूह, एफपीओ, सहकारी एवं बड़े किसानों के लिए आदर्श।' } },
      { icon: 'Truck', title: { en: 'Local Delivery', hi: 'स्थानीय डिलीवरी' }, desc: { en: 'For large orders, we arrange home or farm delivery within nearby areas — please call to confirm.', hi: 'बड़े ऑर्डर के लिए निकटवर्ती क्षेत्रों में घर/खेत डिलीवरी की व्यवस्था — कृपया पुष्टि के लिए कॉल करें।' } },
      { icon: 'MessageSquare', title: { en: 'WhatsApp Support', hi: 'व्हाट्सएप सहायता' }, desc: { en: 'Send your inquiry, photo or order list on WhatsApp — get quick response with availability and price.', hi: 'अपनी पूछताछ, फ़ोटो या ऑर्डर सूची व्हाट्सएप पर भेजें — उपलब्धता एवं दाम के साथ त्वरित जवाब पाएँ।' } },
    ],
    processEyebrow: { en: 'How It Works', hi: 'कैसे काम करता है' },
    processTitle: { en: 'Simple 4-Step Process', hi: 'सरल 4-चरण प्रक्रिया' },
    steps: [
      { n: 1, title: { en: 'Tell Us Your Need', hi: 'अपनी ज़रूरत बताएँ' }, desc: { en: 'Visit, call or WhatsApp us with your crop, land size and concern.', hi: 'अपनी फसल, ज़मीन और समस्या के बारे में आइए, कॉल करें या व्हाट्सएप करें।' } },
      { n: 2, title: { en: 'Get Expert Advice', hi: 'विशेषज्ञ सलाह लें' }, desc: { en: 'Our team recommends the best product mix based on your situation.', hi: 'हमारी टीम आपकी स्थिति के अनुसार सर्वोत्तम उत्पाद संयोजन की सिफारिश करती है।' } },
      { n: 3, title: { en: 'Buy Genuine Products', hi: 'असली उत्पाद खरीदें' }, desc: { en: 'Get 100% authentic products at fair prices, with GST invoice.', hi: 'जीएसटी चालान के साथ 100% असली उत्पाद उचित दाम पर पाएँ।' } },
      { n: 4, title: { en: 'Follow-Up Support', hi: 'फॉलो-अप सहायता' }, desc: { en: 'We stay connected through the season — for spray timing & problem-solving.', hi: 'हम पूरे मौसम जुड़े रहते हैं — स्प्रे समय एवं समस्या समाधान के लिए।' } },
    ],
  },

  products: {
    seedsEyebrow: { en: 'Category', hi: 'श्रेणी' },
    seedsTitle: { en: 'Seeds', hi: 'बीज' },
    seedsSub: { en: 'High-quality hybrid and traditional seeds for every major crop — proven yield, strong disease resistance.', hi: 'हर प्रमुख फसल के लिए उच्च गुणवत्ता वाले संकर एवं पारंपरिक बीज — सिद्ध उपज, मजबूत रोग प्रतिरोध।' },
    seedItems: [
      { badge: { en: 'Hybrid', hi: 'संकर' }, title: { en: 'Hybrid Cotton Seeds', hi: 'संकर कपास बीज' }, desc: { en: 'Premium BG-II cotton hybrids from Mahyco, Rasi and Hytech with excellent boll opening and high yield.', hi: 'महिको, रसी एवं हाइटेक के प्रीमियम BG-II कपास संकर — उत्कृष्ट गूलर एवं अधिक उपज।' }, img: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=600&q=80' },
      { badge: { en: 'Pulses', hi: 'दलहन' }, title: { en: 'Soyabean Seeds', hi: 'सोयाबीन बीज' }, desc: { en: 'Certified soyabean varieties suited for Madhya Pradesh climate with high oil content and short duration.', hi: 'मध्य प्रदेश की जलवायु के अनुकूल प्रमाणित सोयाबीन किस्में — अधिक तेल मात्रा एवं कम अवधि।' }, img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80' },
      { badge: { en: 'Cereal', hi: 'अनाज' }, title: { en: 'Wheat Seeds', hi: 'गेहूँ बीज' }, desc: { en: 'Rust-resistant, high-protein wheat seeds ideal for the rabi season — strong tillering and grain quality.', hi: 'रबी सीज़न के लिए जंग-प्रतिरोधी, उच्च प्रोटीन वाले गेहूँ के बीज — अच्छी कल्लियाँ एवं दाने की गुणवत्ता।' }, img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80' },
      { badge: { en: 'Cereal', hi: 'अनाज' }, title: { en: 'Maize / Corn Seeds', hi: 'मक्का बीज' }, desc: { en: 'Dekalb and Indo American hybrid maize seeds — large cobs, high grain weight, drought tolerant.', hi: 'डेकाल्ब एवं इंडो अमेरिकन के संकर मक्का बीज — बड़े भुट्टे, अधिक दाना वज़न, सूखा सहिष्णु।' }, img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80' },
      { badge: { en: 'Vegetable', hi: 'सब्जी' }, title: { en: 'Vegetable Seeds', hi: 'सब्जी बीज' }, desc: { en: 'Tomato, chilli, brinjal, okra, gourd and leafy vegetable seeds from Vishwas Agri and Indo American.', hi: 'टमाटर, मिर्ची, बैंगन, भिंडी, लौकी एवं पत्तेदार सब्जियों के बीज — विश्वास अग्री एवं इंडो अमेरिकन से।' }, img: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&q=80' },
      { badge: { en: 'Pulses', hi: 'दलहन' }, title: { en: 'Tur, Chana & Moong', hi: 'तुअर, चना एवं मूँग' }, desc: { en: 'Pulse seeds with strong germination — tur, chana, moong, urad varieties for Kharif & Rabi.', hi: 'मज़बूत अंकुरण वाले दलहन बीज — तुअर, चना, मूँग, उड़द किस्में — खरीफ एवं रबी के लिए।' }, img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80' },
    ],

    fertTitle: { en: 'Fertilizers', hi: 'उर्वरक' },
    fertSub: { en: 'Complete nutrition for healthy soil and vigorous plants — chemical, organic and micronutrient options.', hi: 'स्वस्थ मिट्टी और तेज़ बढ़त के लिए संपूर्ण पोषण — रासायनिक, जैविक एवं सूक्ष्म पोषक विकल्प।' },
    fertItems: [
      { badge: 'IFFCO', icon: 'TestTube', img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80', title: { en: 'Urea & DAP', hi: 'यूरिया एवं डीएपी' }, desc: { en: 'Standard nitrogen and phosphate fertilizers from IFFCO — for all field and horticultural crops.', hi: 'इफको के मानक नाइट्रोजन एवं फॉस्फेट उर्वरक — सभी खेत एवं बागवानी फसलों के लिए।' } },
      { badge: 'NPK', icon: 'Atom', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', title: { en: 'NPK Complex', hi: 'एनपीके कॉम्प्लेक्स' }, desc: { en: 'Balanced NPK blends (10:26:26, 12:32:16, 20:20:0:13) for stage-specific crop nutrition.', hi: 'मंच-विशेष पोषण के लिए संतुलित एनपीके मिश्रण (10:26:26, 12:32:16, 20:20:0:13)।' } },
      { badge: { en: 'Organic', hi: 'जैविक' }, icon: 'Leaf', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80', title: { en: 'Organic Manures', hi: 'जैविक खाद' }, desc: { en: 'Vermicompost, neem cake, bio-fertilizers and PSB cultures for sustainable soil health.', hi: 'सतत मिट्टी स्वास्थ्य के लिए वर्मीकम्पोस्ट, नीम खली, जैव-उर्वरक एवं पीएसबी कल्चर।' } },
      { badge: { en: 'Micro', hi: 'सूक्ष्म' }, icon: 'Microscope', img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80', title: { en: 'Micronutrients', hi: 'सूक्ष्म पोषक तत्व' }, desc: { en: 'Zinc, boron, sulphur, iron and chelated micronutrients to correct deficiencies and boost yield.', hi: 'कमी दूर करने और उपज बढ़ाने के लिए जिंक, बोरॉन, सल्फर, आयरन एवं चेलेटेड सूक्ष्म पोषक।' } },
    ],

    chemTitle: { en: 'Pesticides & Herbicides', hi: 'कीटनाशक एवं खरपतवारनाशक' },
    chemSub: { en: 'Powerful, safe crop-protection chemistry from Bayer, Dhanuka, Safex, Mass Crop Science and more.', hi: 'बायर, धनुका, सेफेक्स, मास क्रॉप साइंस आदि की शक्तिशाली, सुरक्षित फसल-सुरक्षा।' },
    chemItems: [
      { badge: { en: 'Insecticide', hi: 'कीटनाशक' }, icon: 'Bug', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', title: { en: 'Insecticides', hi: 'कीट नियंत्रक' }, desc: { en: 'Solutions for sucking pests, bollworms, stem borers and termites — systemic & contact options.', hi: 'रस-चूसक कीट, गूलर सूँडी, तना छेदक एवं दीमक के लिए — सिस्टमिक एवं संपर्क विकल्प।' } },
      { badge: { en: 'Fungicide', hi: 'फफूँदनाशक' }, icon: 'Microscope', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80', title: { en: 'Fungicides', hi: 'फफूँद नियंत्रक' }, desc: { en: 'Protective and curative fungicides for blight, rust, powdery mildew and rot diseases.', hi: 'अंगमारी, जंग, चूर्णिल आसिता एवं सड़न रोगों के लिए सुरक्षात्मक एवं उपचारात्मक फफूँदनाशक।' } },
      { badge: { en: 'Herbicide', hi: 'खरपतवारनाशक' }, icon: 'Sprout', img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80', title: { en: 'Selective Herbicides', hi: 'चयनात्मक खरपतवारनाशक' }, desc: { en: 'Crop-safe herbicides for soyabean, wheat, paddy and maize — controls grasses and broadleaf weeds.', hi: 'सोयाबीन, गेहूँ, धान एवं मक्का के लिए फसल-सुरक्षित खरपतवारनाशक — घास एवं चौड़ी पत्ती वाले खरपतवार पर नियंत्रण।' } },
      { badge: { en: 'Non-Selective', hi: 'सर्व-सक्षम' }, icon: 'SprayCan', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', title: { en: 'Non-Selective Herbicides', hi: 'सर्व-सक्षम खरपतवारनाशक' }, desc: { en: 'Broad-spectrum solutions for bunds, fallow land, plantation crops and pre-sowing field prep.', hi: 'मेड़, परती ज़मीन, बागान फसलों एवं बुआई-पूर्व खेत तैयारी के लिए व्यापक समाधान।' } },
      { badge: 'PGR', icon: 'ShieldCheck', img: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=800&q=80', title: { en: 'Plant Growth Regulators', hi: 'पादप वृद्धि नियामक' }, desc: { en: 'Flower retention, fruit setting and growth boosters — humic, fulvic and amino acid based.', hi: 'फूल टिकाव, फल बनना एवं वृद्धि बूस्टर — ह्यूमिक, फुल्विक एवं अमीनो एसिड आधारित।' } },
      { badge: { en: 'Bio', hi: 'जैविक' }, icon: 'Bug', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80', title: { en: 'Bio-Pesticides', hi: 'जैव कीटनाशक' }, desc: { en: 'Eco-friendly bio-control options — Trichoderma, Pseudomonas, neem-based formulations.', hi: 'पर्यावरण-अनुकूल जैव-नियंत्रण विकल्प — ट्राइकोडर्मा, स्यूडोमोनास, नीम आधारित।' } },
    ],

    equipTitle: { en: 'Agriculture Equipment', hi: 'कृषि उपकरण' },
    equipSub: { en: 'Modern tools and equipment to make farming faster, easier and more profitable.', hi: 'खेती को तेज़, आसान एवं लाभकारी बनाने के लिए आधुनिक उपकरण।' },
    equipItems: [
      { badge: { en: 'Spray', hi: 'स्प्रे' }, icon: 'SprayCan', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', title: { en: 'Knapsack Sprayers', hi: 'नैपसैक स्प्रेयर' }, desc: { en: 'Manual, battery-operated and motorized sprayers for all field spraying needs.', hi: 'सभी प्रकार के खेत स्प्रे के लिए मैनुअल, बैटरी एवं मोटर वाले स्प्रेयर।' } },
      { badge: { en: 'Irrigation', hi: 'सिंचाई' }, icon: 'Droplets', img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80', title: { en: 'Drip & Sprinkler Kits', hi: 'ड्रिप एवं स्प्रिंकलर किट' }, desc: { en: 'Water-saving irrigation solutions for vegetables, fruits and field crops.', hi: 'सब्जी, फल एवं खेत फसलों के लिए जल-बचत सिंचाई समाधान।' } },
      { badge: { en: 'Tools', hi: 'औज़ार' }, icon: 'Wrench', img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80', title: { en: 'Hand Tools', hi: 'हाथ के औज़ार' }, desc: { en: 'Sickles, khurpi, weeders, secateurs and other essential daily-use farm tools.', hi: 'हँसिया, खुरपी, वीडर, कैंची एवं दैनिक उपयोग के अन्य कृषि औज़ार।' } },
      { badge: { en: 'Accessories', hi: 'सहायक उपकरण' }, icon: 'Package', img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80', title: { en: 'Spray Accessories', hi: 'स्प्रे सहायक उपकरण' }, desc: { en: 'Nozzles, lances, hoses, measuring jars and other essential spray accessories.', hi: 'नोज़ल, लांस, होज़, मापन जार एवं अन्य आवश्यक स्प्रे सहायक उपकरण।' } },
    ],
  },

  brandsPage: {
    eyebrow1: { en: 'Trust & Quality', hi: 'विश्वास एवं गुणवत्ता' },
    title1: { en: 'Seed Brand Partners', hi: 'बीज ब्रांड साझीदार' },
    sub1: { en: "Authorized dealer for India's most respected seed companies.", hi: 'भारत की सबसे प्रतिष्ठित बीज कंपनियों के अधिकृत डीलर।' },
    eyebrow2: { en: 'Crop Protection', hi: 'फसल सुरक्षा' },
    title2: { en: 'Chemical & Fertilizer Partners', hi: 'रसायन एवं उर्वरक साझीदार' },
    sub2: { en: 'Genuine agro-chemicals and fertilizers from industry leaders.', hi: 'उद्योग की अग्रणी कंपनियों से असली कृषि रसायन एवं उर्वरक।' },
    whyEyebrow: { en: 'Why It Matters', hi: 'यह क्यों मायने रखता है' },
    whyTitle: { en: 'Why Buy from an Authorized Dealer?', hi: 'अधिकृत डीलर से क्यों खरीदें?' },
    whyP: { en: 'Counterfeit and duplicate agri-inputs are one of the biggest reasons for crop failure in India. As an authorized dealer of 13+ leading brands, we guarantee that every product you buy is genuine, batch-traceable and fully effective.', hi: 'नकली एवं डुप्लीकेट कृषि इनपुट भारत में फसल विफलता का एक बड़ा कारण हैं। 13+ अग्रणी ब्रांड्स के अधिकृत डीलर के रूप में, हम गारंटी देते हैं कि आपके द्वारा खरीदा गया हर उत्पाद असली, बैच-ट्रेसेबल और पूरी तरह प्रभावी है।' },
    whyChecklist: [
      { en: 'Direct supply from the manufacturer or authorized distributor', hi: 'निर्माता या अधिकृत वितरक से सीधी आपूर्ति' },
      { en: 'Proper storage and handling — full potency preserved', hi: 'उचित भंडारण एवं प्रबंधन — पूरी क्षमता संरक्षित' },
      { en: 'GST invoice with every purchase', hi: 'हर खरीद के साथ जीएसटी चालान' },
      { en: 'Manufacturer-backed warranty wherever applicable', hi: 'जहाँ लागू हो, निर्माता-समर्थित वारंटी' },
      { en: 'Technical guidance from company representatives', hi: 'कंपनी प्रतिनिधियों से तकनीकी मार्गदर्शन' },
    ],
    talk: { en: 'Talk to Us', hi: 'हमसे बात करें' },
  },

  video: {
    eyebrow: { en: 'Farm Tour', hi: 'खेत भ्रमण' },
    title: { en: 'A Glimpse of Our Farms', hi: 'हमारे खेतों की एक झलक' },
    sub: {
      en: 'Watch the farms we serve come to life — healthy crops, lush green fields and the spirit of farming in Bhoura, Betul.',
      hi: 'जिन खेतों की हम सेवा करते हैं उन्हें जीवंत होते देखिए — स्वस्थ फसलें, हरे-भरे खेत और भोरा, बैतूल में खेती का जोश।',
    },
    caption: { en: 'Our Farms in Bhoura, Betul', hi: 'हमारे खेत — भोरा, बैतूल' },
    muteNote: { en: 'Plays muted — click the speaker icon to unmute', hi: 'बिना आवाज़ चलता है — स्पीकर आइकन पर क्लिक करके आवाज़ चालू करें' },
    src: '/videos/farm-tour.mp4',
  },

  gallery: {
    eyebrow: { en: 'Glimpses', hi: 'झलकियाँ' },
    title: { en: 'Products, Store & Farms', hi: 'उत्पाद, दुकान एवं खेत' },
    sub: { en: 'A snapshot of our store, products and the fields we help nurture across Betul region.', hi: 'हमारी दुकान, उत्पादों और बैतूल क्षेत्र के खेतों की झलक।' },
    items: [
      { img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80', title: { en: 'Healthy Crop Fields', hi: 'स्वस्थ फसल क्षेत्र' } },
      { img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', title: { en: 'Wheat Harvest', hi: 'गेहूँ की कटाई' } },
      { img: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&q=80', title: { en: 'Vegetable Seeds', hi: 'सब्जी बीज' } },
      { img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80', title: { en: 'Maize Crop', hi: 'मक्का की फसल' } },
      { img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80', title: { en: 'Quality Pulses', hi: 'गुणवत्तापूर्ण दलहन' } },
      { img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80', title: { en: 'Healthy Sprouts', hi: 'स्वस्थ अंकुर' } },
      { img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80', title: { en: 'Crop Protection', hi: 'फसल सुरक्षा' } },
      { img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', title: { en: 'Lush Green Fields', hi: 'हरे-भरे खेत' } },
      { img: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=600&q=80', title: { en: 'Cotton Cultivation', hi: 'कपास की खेती' } },
      { img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80', title: { en: 'Farm at Dusk', hi: 'साँझ के समय खेत' } },
      { img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80', title: { en: 'Healthy Plants', hi: 'स्वस्थ पौधे' } },
      { img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80', title: { en: 'Modern Equipment', hi: 'आधुनिक उपकरण' } },
    ],
  },

  contact: {
    eyebrow: { en: 'Get in Touch', hi: 'संपर्क में रहें' },
    title: { en: "We're Here to Help", hi: 'हम आपकी सहायता के लिए हैं' },
    sub: { en: 'Visit our store, give us a call, or send your inquiry — we usually respond within hours.', hi: 'हमारी दुकान पर आइए, कॉल कीजिए या पूछताछ भेजिए — आमतौर पर कुछ ही घंटों में जवाब।' },
    infoTitle: { en: 'Reach Out Directly', hi: 'सीधे संपर्क करें' },
    infoSub: { en: 'Multiple ways to connect with our team — choose what is most convenient for you.', hi: 'हमारी टीम से जुड़ने के कई तरीक़े — जो आपको सुविधाजनक लगे, उसे चुनें।' },
    visitStore: { en: 'Visit Our Store', hi: 'हमारी दुकान पर आएँ' },
    callUs: { en: 'Call Us', hi: 'कॉल करें' },
    whatsapp: { en: 'WhatsApp', hi: 'व्हाट्सएप' },
    whatsappNote: { en: 'Quick replies, 7 days a week', hi: 'त्वरित जवाब, सप्ताह के सातों दिन' },
    instagram: { en: 'Instagram', hi: 'इंस्टाग्राम' },
    instagramNote: { en: 'Follow us for farm updates & offers', hi: 'खेती की नई बातें व ऑफ़र के लिए फ़ॉलो करें' },
    storeHours: { en: 'Store Hours', hi: 'दुकान का समय' },

    formTitle: { en: 'Send Us an Inquiry', hi: 'हमें पूछताछ भेजें' },
    formSub: { en: "Fill in your details below — your message will be sent directly to our WhatsApp.", hi: 'नीचे अपनी जानकारी भरें — आपका संदेश सीधे हमारे व्हाट्सएप पर पहुँचेगा।' },
    waNote: {
      en: 'Your inquiry goes straight to WhatsApp +91 91718 59280. Just review and hit Send.',
      hi: 'आपकी पूछताछ सीधे व्हाट्सएप +91 91718 59280 पर जाएगी। बस देखकर भेजें पर क्लिक करें।',
    },
    f: {
      name: { en: 'Your Name', hi: 'आपका नाम' },
      mobile: { en: 'Mobile Number', hi: 'मोबाइल नंबर' },
      optional: { en: 'optional', hi: 'वैकल्पिक' },
      village: { en: 'Village / City', hi: 'गाँव / शहर' },
      product: { en: 'Product Interest', hi: 'उत्पाद रुचि' },
      message: { en: 'Your Message', hi: 'आपका संदेश' },
      msgPlaceholder: { en: 'Tell us about your crop, requirement or any question...', hi: 'अपनी फसल, ज़रूरत या प्रश्न के बारे में बताएँ...' },
      submit: { en: 'Send via WhatsApp', hi: 'व्हाट्सएप पर भेजें' },
      direct: { en: 'Quick Chat', hi: 'त्वरित चैट' },
      selectOpt: { en: '-- Select --', hi: '-- चुनें --' },
    },
    productOptions: [
      { value: 'Seeds', label: { en: 'Seeds', hi: 'बीज' } },
      { value: 'Fertilizers', label: { en: 'Fertilizers', hi: 'उर्वरक' } },
      { value: 'Pesticides', label: { en: 'Pesticides', hi: 'कीटनाशक' } },
      { value: 'Herbicides', label: { en: 'Herbicides', hi: 'खरपतवारनाशक' } },
      { value: 'Agriculture Equipment', label: { en: 'Agriculture Equipment', hi: 'कृषि उपकरण' } },
      { value: 'Farmer Guidance', label: { en: 'Farmer Guidance', hi: 'किसान मार्गदर्शन' } },
      { value: 'Bulk Order', label: { en: 'Bulk Order', hi: 'थोक ऑर्डर' } },
      { value: 'Other', label: { en: 'Other', hi: 'अन्य' } },
    ],
    errors: {
      required: { en: 'Please fill all required fields.', hi: 'कृपया सभी आवश्यक फ़ील्ड भरें।' },
      mobile: { en: 'Please enter a valid 10-digit mobile number.', hi: 'कृपया वैध 10-अंकीय मोबाइल नंबर डालें।' },
    },
    success: {
      en: 'Opening WhatsApp now — just tap Send to deliver your message to us!',
      hi: 'व्हाट्सएप खुल रहा है — संदेश भेजने के लिए बस "भेजें" पर टैप करें!',
    },

    mapEyebrow: { en: 'Find Us', hi: 'हम तक पहुँचें' },
    mapTitle: { en: 'Our Location', hi: 'हमारा स्थान' },
    mapSub: { en: 'Easily reachable on Bijadehi Road, right next to PNB Bank in Bhoura.', hi: 'बिजादेही रोड पर, भोरा स्थित पीएनबी बैंक के बिल्कुल पास।' },
    getDirections: { en: 'Get Directions', hi: 'रास्ता पाएँ' },
  },

  cta: {
    home: {
      title: { en: 'Ready to Grow With Us?', hi: 'हमारे साथ बढ़ने के लिए तैयार हैं?' },
      sub: { en: "Visit our store or send us an inquiry — we're here to help your farm succeed.", hi: 'हमारी दुकान पर आइए या पूछताछ भेजिए — हम आपकी खेती की सफलता के लिए तत्पर हैं।' },
      primary: { en: 'Send Inquiry', hi: 'पूछताछ भेजें' },
      secondary: { en: 'Call Now', hi: 'अभी कॉल करें' },
    },
    about: {
      title: { en: 'Visit Us & Experience the Difference', hi: 'हमारे पास आइए और अंतर महसूस कीजिए' },
      sub: { en: 'Come to our store in Bhoura or reach out — our team is ready to serve you.', hi: 'भोरा स्थित हमारी दुकान पर आइए या संपर्क कीजिए — हमारी टीम आपकी सेवा के लिए तत्पर है।' },
      primary: { en: 'Find Us', hi: 'हम तक पहुँचें' },
      secondary: { en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर बात करें' },
    },
    products: {
      title: { en: 'Need a Product? Just Ask.', hi: 'किसी उत्पाद की ज़रूरत है? बस पूछिए।' },
      sub: { en: "We'll guide you to the right input for your crop, soil and season.", hi: 'हम आपकी फसल, मिट्टी और मौसम के लिए सही उत्पाद की सलाह देंगे।' },
    },
    brands: {
      title: { en: 'Looking for a Specific Brand?', hi: 'कोई विशेष ब्रांड चाहिए?' },
      sub: { en: "Call us or send a WhatsApp message — we'll confirm availability and pricing.", hi: 'कॉल करें या व्हाट्सएप मैसेज भेजें — हम उपलब्धता और दाम बता देंगे।' },
    },
    services: {
      title: { en: 'Free Expert Advice — Just a Call Away', hi: 'निःशुल्क विशेषज्ञ सलाह — बस एक कॉल दूर' },
      sub: { en: "Don't experiment with your crop. Talk to us first.", hi: 'अपनी फसल पर प्रयोग न करें। पहले हमसे बात करें।' },
    },
    gallery: {
      title: { en: 'Want to See More? Visit Our Store', hi: 'और देखना चाहते हैं? हमारी दुकान पर आइए' },
      sub: { en: 'Located on Bijadehi Road, near PNB Bank, Bhoura.', hi: 'बिजादेही रोड, पीएनबी बैंक के पास, भोरा में स्थित।' },
    },
  },

  footer: {
    desc: {
      en: 'Your trusted partner for quality agricultural inputs and expert farming guidance. Authorized dealer of leading agri brands.',
      hi: 'गुणवत्तापूर्ण कृषि इनपुट और विशेषज्ञ मार्गदर्शन के लिए आपका विश्वसनीय साथी। प्रमुख कृषि ब्रांड्स के अधिकृत डीलर।',
    },
    quick: { en: 'Quick Links', hi: 'त्वरित लिंक्स' },
    products: { en: 'Our Products', hi: 'हमारे उत्पाद' },
    touch: { en: 'Get in Touch', hi: 'संपर्क करें' },
    rights: { en: 'All rights reserved.', hi: 'सभी अधिकार सुरक्षित।' },
  },
};
