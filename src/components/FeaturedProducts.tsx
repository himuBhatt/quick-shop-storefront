
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const FeaturedProducts = ({ 
  products, 
  title = "Featured Clothing", 
  subtitle = "Fresh picks for your everyday wardrobe." 
}: FeaturedProductsProps) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
