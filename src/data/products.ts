import { Product } from "@/types";

export const products: Product[] = [
  {
    "id": "clothing-1",
    "name": "Classic Cotton T-Shirt",
    "price": 29.99,
    "discount": 10,
    "category": "T-Shirts",
    "description": "A soft cotton crew-neck tee with an easy everyday fit.",
    "image": "/images/tee.jpg",
    "rating": 4.5,
    "inStock": true
  },
  {
    "id": "clothing-2",
    "name": "Relaxed Button-Up Shirt",
    "price": 59.99,
    "discount": 0,
    "category": "Shirts",
    "description": "A relaxed button-up shirt with a classic collar and long sleeves.",
    "image": "/images/shirt.jpg",
    "rating": 4.5,
    "inStock": true
  },
  {
    "id": "clothing-3",
    "name": "Straight-Leg Jeans",
    "price": 79.99,
    "discount": 15,
    "category": "Denim",
    "description": "Classic straight-leg denim for a versatile everyday wardrobe.",
    "image": "/images/jeans.jpg",
    "rating": 4.5,
    "inStock": true
  },
  {
    "id": "clothing-4",
    "name": "Floral Midi Dress",
    "price": 89.99,
    "discount": 0,
    "category": "Dresses",
    "description": "A floral midi dress with a flowing silhouette for dressed-up days.",
    "image": "/images/dress.jpg",
    "rating": 4.5,
    "inStock": true
  },
  {
    "id": "clothing-5",
    "name": "Everyday Zip Hoodie",
    "price": 64.99,
    "discount": 0,
    "category": "Knitwear & Hoodies",
    "description": "A comfortable hooded layer with a relaxed fit for casual days.",
    "image": "/images/hoodie.jpg",
    "rating": 4.5,
    "inStock": true
  },
  {
    "id": "clothing-6",
    "name": "Classic Leather Jacket",
    "price": 149.99,
    "discount": 5,
    "category": "Outerwear",
    "description": "A leather jacket with a zip front and a timeless silhouette.",
    "image": "/images/jacket.jpg",
    "rating": 4.5,
    "inStock": true
  },
  {
    "id": "clothing-7",
    "name": "Textured Knit Sweater",
    "price": 69.99,
    "discount": 20,
    "category": "Knitwear & Hoodies",
    "description": "A textured knit sweater for layering on cooler days.",
    "image": "/images/knit.jpg",
    "rating": 4.5,
    "inStock": true
  },
  {
    "id": "clothing-8",
    "name": "Everyday Crew-Neck Tee",
    "price": 24.99,
    "discount": 0,
    "category": "T-Shirts",
    "description": "An easy crew-neck staple to pair with your favorite denim.",
    "image": "/images/tee.jpg",
    "rating": 4.5,
    "inStock": true
  }
];

export const getFeaturedProducts = (): Product[] => products.slice(0, 4);
export const getProductById = (id: string): Product | undefined => products.find(product => product.id === id);
