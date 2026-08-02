export const business = {
  name: 'MELT Bakery',
  shortName: 'MELT',
  tagline: 'Purely eggless. Just enough sweet.',
  instagramHandle: '@melt.bakers',
  instagramUrl: 'https://www.instagram.com/melt.bakers/',
  documentation: {
    bakeryOs: 'https://github.com/dheerix/melt/tree/main/docs',
    roadmap: 'https://github.com/dheerix/melt/blob/main/docs/12-launch.md',
    sops: 'https://github.com/dheerix/melt/tree/main/docs/sops',
  },
  contactEmail: 'hello@example.com', // TODO: Confirm with MELT before displaying publicly.
  serviceArea: 'Waterloo Region, Ontario',
  pickupWording: 'Pickup details are shared after your order is confirmed.',
  orderNoticePeriod: 'Confirm with MELT — availability varies by date and design.',
  deliveryAvailability: 'Confirm with MELT for your date and location.',
  paymentPolicy: 'Confirm payment timing and method with MELT.',
  allergyStatement:
    'All products are made without eggs. MELT is not currently represented as an allergen-free kitchen. Please discuss allergies before ordering.',
} as const;

export type Business = typeof business;
