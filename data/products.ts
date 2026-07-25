export type ProductType = 'Traditional' | 'Premium' | 'Mini Set';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductType;
  image: string;
}

export const products: Product[] = [
  {
    id: 'classic-egg-cake',
    name: '經典雞蛋糕禮盒',
    description: '傳統雞蛋糕搭配精美禮盒，適合送別同事的溫暖心意。',
    price: 280,
    category: 'Traditional',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'premium-cheese',
    name: 'Premium 芝士蛋糕',
    description: '濃郁芝士和香滑口感，讓送別更有儀式感。',
    price: 420,
    category: 'Premium',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'mini-bundle',
    name: '迷你散水餅組合',
    description: '多款迷你蛋糕組合，方便同事共享與試味。',
    price: 360,
    category: 'Mini Set',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'hong-kong-cake',
    name: '香港風味蛋糕',
    description: '加入本地風味元素，為辦公室散水餅增添香港特色。',
    price: 390,
    category: 'Traditional',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'matcha-collection',
    name: 'Premium 抹茶禮盒',
    description: '日式抹茶口味，高雅風味適合送禮與辦公室分享。',
    price: 450,
    category: 'Premium',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'mini-treats',
    name: '迷你甜點拼盤',
    description: '多款小蛋糕與甜點，適合團隊聚餐與散水派對。',
    price: 320,
    category: 'Mini Set',
    image: '/images/cake-placeholder.svg'
  }
];
