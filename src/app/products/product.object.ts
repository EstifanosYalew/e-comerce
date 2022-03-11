import { AddProductComponent } from '../add-product/add-product.component';

export class Product {
  id: number;
  name: string;
  price: number;
  avatar: string;
  description: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 70;
    this.avatar = '';
    this.description = ' ';
  }
}
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Nike',
    price: 20,
    avatar:
      'https://cdn-images.farfetch-contents.com/15/62/45/04/15624504_28291154_1000.jpg',
    description: 'this shoes is the brand one',
  },
  {
    id: 2,
    name: 'Puma',
    price: 40,
    avatar:
      'https://s.yimg.com/uu/api/res/1.2/Rr2y2_TIFsKV7mdcWy_xDA--~B/aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://img.vidible.tv/prod/2019-01/31/5c525213fa1b310e93f442a0/5c5252d83278fb7547f8b1db_o_U_v1.jpg',
    description: 'pumaaa',
  },
  {
    id: 3,
    name: 'Skechers',
    price: 50,
    avatar:
      'https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dwdcaa39ce/images/Landing/men/SKX44314-2020-New-Site-Q2-Content-Grid_M_Athletic-Sneakers_232032-BLOR.jpg',
    description: 'skecherssss',
  },
];
