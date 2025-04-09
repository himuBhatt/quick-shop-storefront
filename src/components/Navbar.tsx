
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-shop-600">QuickShop</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-shop-600">
                Home
              </Link>
              <Link to="/products" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-shop-600">
                Products
              </Link>
              <Link to="/categories" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-shop-600">
                Categories
              </Link>
              <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-shop-600">
                About
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-shop-500 focus:outline-none focus:ring-1 focus:ring-shop-500"
                  placeholder="Search products..."
                  type="search"
                />
              </div>
            </div>
            
            <Link to="/auth" className="relative">
              <Button variant="ghost" size="icon" title="Sign In">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-shop-600 text-xs font-bold text-white">
                    {items.length}
                  </span>
                )}
              </Button>
            </Link>
            
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-600"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-600"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-600"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/auth"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-shop-600"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
            <div className="relative mt-3">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-shop-500 focus:outline-none focus:ring-1 focus:ring-shop-500"
                placeholder="Search products..."
                type="search"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
