export class Customer {
  photo: string;
  id: number;
  name: string;
  age: number;
  gender: string;
  phoneNumber: string;
  address: string;
  constructor() {
    this.photo = '';
    this.id = 0;
    this.name = '';
    this.age = 0;
    this.gender = '';
    this.phoneNumber = '';
    this.address = '';
  }
}

export const CUSTOMERS: Customer[] = [
  {
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0yDod2jmZivjtYPSPU17E-hSuy-obDWD-uQ&usqp=CAU',
    id: 1,
    name: 'Putin',
    age: 20,
    gender: 'Male',
    phoneNumber: '+2519748574',
    address: 'Russia',
  },
  {
    photo:
      'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/VCWQ53OTVBLIZOSKZVIP25V7PM.jpg',
    id: 2,
    name: 'Volodymyr',
    age: 40,
    gender: 'Male',
    phoneNumber: '+2519748574',
    address: 'Ukrane',
  },
  {
    photo:
      'https://image.shutterstock.com/image-photo/mature-african-woman-smiling-on-600w-2038362107.jpg',
    id: 3,

    name: 'ubu',
    age: 21,
    gender: 'Female',
    phoneNumber: '+2519748574',
    address: 'kenya',
  },
];
