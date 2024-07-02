export interface Product {
  id: number;
  name: string;
  price: number;
  isNew?: boolean | undefined;
  isSale: boolean;
  rating: number;
  img: string;
}
