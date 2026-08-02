export type Product = {
  name: string;
  shortDescription: string;
  category: 'Celebration Cakes' | 'Cupcakes' | 'Dessert Boxes' | 'Seasonal Specials';
  flavourNotes: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  seasonal: boolean;
  price: string;
  dietaryNotes: string;
  availabilityNote: string;
};

export const products: Product[] = [
  {
    name: 'Rasmalai Celebration Cake',
    shortDescription: 'A celebration centrepiece inspired by the gentle, aromatic character of rasmalai.',
    category: 'Celebration Cakes',
    flavourNotes: ['cardamom', 'saffron', 'pistachio'],
    image: '/img/products/rasmalai-celebration.webp',
    imageAlt: 'Placeholder image of an ivory celebration cake with pistachio and saffron details',
    featured: true,
    seasonal: false,
    price: 'Contact for pricing',
    dietaryNotes: 'Made without eggs. Discuss all allergies before ordering.',
    availabilityNote: 'Made to order; limited weekly availability.',
  },
  {
    name: 'Celebration Cakes',
    shortDescription: 'Thoughtfully finished cakes designed around your gathering and preferred flavour direction.',
    category: 'Celebration Cakes',
    flavourNotes: ['custom flavour direction', 'balanced sweetness'],
    image: '/img/products/celebration-cake.svg',
    imageAlt: 'Stylized placeholder illustration of a celebration cake',
    featured: false,
    seasonal: false,
    price: 'Contact for pricing',
    dietaryNotes: 'Made without eggs. Discuss all allergies before ordering.',
    availabilityNote: 'Design and date are confirmed by enquiry.',
  },
  {
    name: 'Cupcakes',
    shortDescription: 'Small-batch cupcakes with elegant finishes for gifting, gatherings, and sweet tables.',
    category: 'Cupcakes',
    flavourNotes: ['classic and seasonal options'],
    image: '/img/products/cupcakes.svg',
    imageAlt: 'Stylized placeholder illustration of three cupcakes',
    featured: false,
    seasonal: false,
    price: 'Contact for pricing',
    dietaryNotes: 'Made without eggs. Discuss all allergies before ordering.',
    availabilityNote: 'Minimum quantities and options: confirm with MELT.',
  },
  {
    name: 'Dessert Boxes',
    shortDescription: 'A considered assortment for sharing, sending, or bringing to the table.',
    category: 'Dessert Boxes',
    flavourNotes: ['curated assortment'],
    image: '/img/products/dessert-box.svg',
    imageAlt: 'Stylized placeholder illustration of a dessert gift box',
    featured: false,
    seasonal: false,
    price: 'Contact for pricing',
    dietaryNotes: 'Made without eggs. Discuss all allergies before ordering.',
    availabilityNote: 'Contents and availability: confirm with MELT.',
  },
  {
    name: 'Indian-inspired Seasonal Specials',
    shortDescription: 'Limited bakes that draw from familiar flavours and the rhythm of the season.',
    category: 'Seasonal Specials',
    flavourNotes: ['season-led', 'Indian-inspired'],
    image: '/img/products/seasonal-special.svg',
    imageAlt: 'Stylized placeholder illustration of a decorated seasonal dessert',
    featured: false,
    seasonal: true,
    price: 'Contact for pricing',
    dietaryNotes: 'Made without eggs. Discuss all allergies before ordering.',
    availabilityNote: 'Offered selectively; enquire for the current collection.',
  },
];
