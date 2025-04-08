
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    discount: 15,
    category: "Electronics",
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and plush ear cushions for all-day comfort.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    inStock: true
  },
  {
    id: "2",
    name: "Smart Watch Series X",
    price: 299.99,
    discount: 0,
    category: "Electronics",
    description: "Stay connected and track your fitness with our advanced smartwatch. Features include heart rate monitoring, GPS tracking, and a vibrant touchscreen display.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    inStock: true
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    discount: 10,
    category: "Clothing",
    description: "This super soft, 100% organic cotton t-shirt is perfect for everyday wear. Available in multiple colors, it features a relaxed fit and sustainable production methods.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    inStock: true
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    price: 249.99,
    discount: 5,
    category: "Furniture",
    description: "Work from home in comfort with our ergonomic office chair. Adjustable lumbar support, padded armrests, and breathable mesh back provide optimal comfort for long work days.",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    inStock: true
  },
  {
    id: "5",
    name: "Ceramic Coffee Mug Set",
    price: 39.99,
    discount: 0,
    category: "Home & Kitchen",
    description: "Start your morning right with our set of 4 handcrafted ceramic mugs. Each mug holds 12oz of your favorite beverage and features a unique, artisanal glaze.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    inStock: true
  },
  {
    id: "6",
    name: "Leather Crossbody Bag",
    price: 89.99,
    discount: 0,
    category: "Accessories",
    description: "This genuine leather crossbody bag combines style and functionality. With multiple compartments, adjustable strap, and classic design, it's perfect for everyday use.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    inStock: true
  },
  {
    id: "7",
    name: "Essential Oil Diffuser",
    price: 45.99,
    discount: 20,
    category: "Home & Kitchen",
    description: "Transform your space with our elegant essential oil diffuser. Features adjustable mist settings, LED light options, and automatic shut-off for safety.",
    image: "https://images.unsplash.com/photo-1595255813344-0795fe33e375?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    inStock: true
  },
  {
    id: "8",
    name: "Professional Knife Set",
    price: 129.99,
    discount: 0,
    category: "Home & Kitchen",
    description: "Elevate your culinary skills with our 7-piece professional knife set. Made from high-carbon stainless steel with ergonomic handles for precision cutting.",
    image: "https://images.unsplash.com/photo-1593618998160-364f45d7fea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    inStock: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
