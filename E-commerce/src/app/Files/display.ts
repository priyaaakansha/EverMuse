export interface HeaderMsg {
    msg: string;
  }

  export interface Brand {
    id: number;
    image: string;
    name: string;
  }

  export interface Category {
    image: string;
    name: string;
  }

  export const brands = [{
        id: 1101,
        image: '../../assets/images/Brands/H&M.jpg',
        name: 'H&M',
    },
    {
        id: 1102,
        name: 'GUCCI',
        image: '../../assets/images/Brands/Gucci.jpg',
    },
    {
        id: 1103,
        name: 'ADIDAS',
        image: '../../assets/images/Brands/Adidas.jpg'
    },
    {
        id: 1104,
        name: 'ROLEX',
        image: '../../assets/images/Brands/Rolex.jpg'
    },
];

  export const categories = [{
        name: 'Men', image: '../../assets/images/Categories/Men.jpg',
      },{
        name: 'Women', image: '../../assets/images/Categories/Women.jpg'
      },{
        name: 'Kids', image: '../../assets/images/Categories/Kids.jpg'
      },{
        name: 'Home Decor', image: '../../assets/images/Categories/Decor.jpg'
      },{
        name: 'Electronics', image: '../../assets/images/Categories/Electronics.jpg'
      },{
        name: 'Personal Care', image: '../../assets/images/Categories/care5.jpg'
      },
      {
        name: 'Gifts', image: '../../assets/images/Categories/gifts.jpg'
      }
];

  export const headerMsgs = [{
    msg: 'Free Delivery on Orders above &#x20B9;1499'
}];
