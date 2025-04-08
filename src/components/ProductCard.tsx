
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <div className="product-card group animate-fade-in">
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.discount > 0 && (
            <div className="product-badge">
              -{product.discount}%
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="mb-1 text-sm font-medium text-gray-700">{product.category}</h3>
          <h2 className="mb-2 text-base font-semibold text-gray-900">{product.name}</h2>
          <div className="flex items-end justify-between">
            <div>
              {product.discount > 0 ? (
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-shop-600">
                    ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button 
          className="w-full bg-shop-600 hover:bg-shop-700"
          onClick={() => addItem(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
