export const BUSINESS = {
  name: {
    en: 'Patankar Krishi Seva Kendra',
    hi: 'पाटनकर कृषि सेवा केंद्र',
  },
  tagline: {
    en: 'Trusted Agriculture Partner',
    hi: 'किसानों का विश्वसनीय साथी',
  },
  phones: ['9171859280', '8518968001', '9425192971'],
  whatsapp: '919171859280',
  gstin: '23CLQPP5043R1ZB',
  instagram: 'https://www.instagram.com/patankarfarms?igsh=emdtNmc5OGNsMjBp',
  instagramHandle: '@patankarfarms',
  address: {
    en: 'Bijadehi Road, Near PNB Bank, Bhoura, Teh. Shahpur, Dist. Betul (M.P.)',
    hi: 'बिजादेही रोड, पीएनबी बैंक के पास, भोरा, तह. शाहपुर, जि. बैतूल (म.प्र.)',
  },
  hours: {
    en: 'Mon – Sat: 8:00 AM – 8:00 PM\nSunday: 9:00 AM – 2:00 PM',
    hi: 'सोम – शनि: सुबह 8 – रात 8 बजे\nरविवार: सुबह 9 – दोपहर 2 बजे',
  },
  mapsQuery: 'Bhoura,Shahpur,Betul,Madhya+Pradesh',
};

export const waUrl = (text) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
