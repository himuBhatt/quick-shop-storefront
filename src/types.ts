
export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}
