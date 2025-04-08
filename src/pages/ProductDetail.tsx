
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { getProductById } from "@/data/products";
import { Product } from "@/types";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API request with a slight delay
    const fetchProduct = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProduct = id ? getProductById(id) : null;
        setProduct(foundProduct || null);
        setLoading(false);
      }, 300);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-shop-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Not Found</h1>
          <p className="mt-4 text-lg text-gray-500">We couldn't find the product you're looking for.</p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const actualPrice = product.discount > 0
    ? (product.price * (100 - product.discount)) / 100
    : product.price;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product image */}
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Product details */}
        <div className="mt-10 lg:mt-0">
          <Button asChild variant="ghost" size="sm" className="mb-4">
            <Link to="/products" className="flex items-center gap-1 text-sm text-gray-500">
              <ArrowLeft className="h-4 w-4" />
              Back to products
            </Link>
          </Button>
          
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <div className="flex items-center">
              {product.discount > 0 ? (
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold tracking-tight text-shop-600">
                    ${actualPrice.toFixed(2)}
                  </p>
                  <p className="text-base text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800">
                    Save {product.discount}%
                  </span>
                </div>
              ) : (
                <p className="text-3xl font-bold tracking-tight text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-500">{product.rating} out of 5 stars</p>
          </div>

          <Separator className="my-6" />

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <div className="mt-2 space-y-4 text-base text-gray-700">
              <p>{product.description}</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                className="flex-1 bg-shop-600 hover:bg-shop-700" 
                onClick={() => addItem(product)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/checkout">Buy Now</Link>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <div className="mt-4 text-sm text-gray-500">
              <p>Category: <span className="font-medium text-gray-700">{product.category}</span></p>
              <p className="mt-1">
                Availability: {" "}
                <span className={`font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
