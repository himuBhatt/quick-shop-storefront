
import { Link } from "react-router-dom";
import { Trash2, RefreshCw, MinusCircle, PlusCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useEffect } from "react";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format price with discount applied
  const getDiscountedPrice = (price: number, discount: number) => {
    return discount > 0 ? (price * (100 - discount)) / 100 : price;
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Cart</h1>
          <p className="mt-4 text-lg text-gray-500">Your cart is currently empty.</p>
          <div className="mt-6">
            <Button asChild className="bg-shop-600 hover:bg-shop-700">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Cart</h1>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <div className="lg:col-span-8">
          <div className="flex justify-between">
            <h2 className="sr-only">Items in your shopping cart</h2>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 text-sm"
              onClick={clearCart}
            >
              <RefreshCw className="h-4 w-4" />
              Clear Cart
            </Button>
          </div>

          <ul className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
            {items.map((item) => (
              <li key={item.id} className="flex py-6 sm:py-8">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 sm:h-32 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        <Link to={`/products/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                    </div>
                    <div className="mt-1 text-right">
                      {item.discount > 0 ? (
                        <div>
                          <span className="text-base font-medium text-gray-900">
                            ${getDiscountedPrice(item.price, item.discount).toFixed(2)}
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <p className="text-base font-medium text-gray-900">${item.price.toFixed(2)}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-1 items-end justify-between">
                    <div className="flex items-center border border-gray-200 rounded">
                      <button
                        type="button"
                        className="p-2 text-gray-500 hover:text-gray-700"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-1 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="p-2 text-gray-500 hover:text-gray-700"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <PlusCircle className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button asChild variant="outline" className="flex items-center gap-2">
              <Link to="/products">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-sm font-medium text-gray-900">${getTotal().toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Shipping</p>
              <p className="text-sm font-medium text-gray-900">$0.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Tax</p>
              <p className="text-sm font-medium text-gray-900">$0.00</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="text-base font-medium text-gray-900">Order Total</p>
              <p className="text-base font-medium text-gray-900">${getTotal().toFixed(2)}</p>
            </div>
          </div>
          <div className="mt-6">
            <Button asChild className="w-full bg-shop-600 hover:bg-shop-700">
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
