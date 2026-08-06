export type ProductType = '穩陣類' | 'Premium' | '迷你組合' | '搞笑類' | '卡通類';

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
    price: 15,
    category: '穩陣類',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'premium-cheese',
    name: 'Premium 芝士蛋糕',
    description: '濃郁芝士和香滑口感，讓送別更有儀式感。',
    price: 15,
    category: 'Premium',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'mini-bundle',
    name: '迷你散水餅組合',
    description: '多款迷你蛋糕組合，方便同事共享與試味。',
    price: 15,
    category: '迷你組合',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'hong-kong-cake',
    name: '香港風味蛋糕',
    description: '加入本地風味元素，為辦公室散水餅增添香港特色。',
    price: 15,
    category: '穩陣類',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'matcha-collection',
    name: 'Premium 抹茶禮盒',
    description: '日式抹茶口味，高雅風味適合送禮與辦公室分享。',
    price: 15,
    category: 'Premium',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'mini-treats',
    name: '迷你甜點拼盤',
    description: '多款小蛋糕與甜點，適合團隊聚餐與散水派對。',
    price: 15,
    category: '迷你組合',
    image: '/images/cake-placeholder.svg'
  },
  {
    id: 'onlyyou-design',
    name: 'OnlyYou 搞笑設計',
    description: '選擇搞笑類設計圖案，讓散水餅更有趣味與話題。',
    price: 15,
    category: '搞笑類',
    image: '/images/OnlyYou.png'
  },
  {
    id: 'jesus-cant-keep-me',
    name: '耶穌都留唔住我',
    description: '搞笑類設計，讓送別禮物充滿玩味與話題性。',
    price: 15,
    category: '搞笑類',
    image: '/images/耶穌都留唔住我.png'
  },
  {
    id: 'thank-you-standard',
    name: '多謝關照（標準）',
    description: '穩陣類標準設計，簡潔耐看，適合正式送別。',
    price: 15,
    category: '穩陣類',
    image: '/images/多謝關照（標準）.png'
  },
  {
    id: 'see-you-standard',
    name: '後會有期（標準）',
    description: '穩陣類標準設計，傳遞祝福又不失端莊。',
    price: 15,
    category: '穩陣類',
    image: '/images/後會有期（標準）.png'
  },
  {
    id: 'thank-you-cartoon',
    name: '多謝關照（卡通）',
    description: '卡通類搞鬼設計，送別時更添趣味。',
    price: 15,
    category: '卡通類',
    image: '/images/多謝關照（卡通）.png'
  },
  {
    id: 'see-you-cartoon',
    name: '後會有期（卡通）',
    description: '卡通類可愛設計，讓散水禮物更生動有趣。',
    price: 15,
    category: '卡通類',
    image: '/images/後會有期（卡通）.png'
  }
];
