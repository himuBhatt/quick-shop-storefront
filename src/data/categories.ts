import { Category } from "@/types";
import { products } from "./products";

export const categories: Category[] = [
  {
    "id": "t-shirts",
    "name": "T-Shirts",
    "image": "/images/tee.jpg"
  },
  {
    "id": "denim",
    "name": "Denim",
    "image": "/images/jeans.jpg"
  },
  {
    "id": "dresses",
    "name": "Dresses",
    "image": "/images/dress.jpg"
  },
  {
    "id": "shirts",
    "name": "Shirts",
    "image": "/images/shirt.jpg"
  },
  {
    "id": "knitwear",
    "name": "Knitwear & Hoodies",
    "image": "/images/knit.jpg"
  },
  {
    "id": "outerwear",
    "name": "Outerwear",
    "image": "/images/jacket.jpg"
  }
].map(category => ({ ...category, itemCount: products.filter(product => product.category === category.name).length }));

export const getCategoryById = (id: string): Category | undefined => categories.find(category => category.id === id);
