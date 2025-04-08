
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:flex md:items-center md:justify-between lg:py-20">
          <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-start sm:gap-y-0 sm:gap-x-10">
            <div>
              <Link to="/" className="text-xl font-bold text-shop-600">
                QuickShop
              </Link>
              <p className="mt-2 max-w-md text-sm text-gray-500">
                Your one-stop shop for all things trendy and essential.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4 md:gap-x-12">
              <div>
                <h3 className="font-medium text-gray-900">Products</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link to="/products/new" className="text-sm text-gray-600 hover:text-shop-600">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/bestsellers" className="text-sm text-gray-600 hover:text-shop-600">
                      Bestsellers
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/sale" className="text-sm text-gray-600 hover:text-shop-600">
                      On Sale
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link to="/about" className="text-sm text-gray-600 hover:text-shop-600">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm text-gray-600 hover:text-shop-600">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-sm text-gray-600 hover:text-shop-600">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Support</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link to="/help" className="text-sm text-gray-600 hover:text-shop-600">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/shipping" className="text-sm text-gray-600 hover:text-shop-600">
                      Shipping Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/returns" className="text-sm text-gray-600 hover:text-shop-600">
                      Returns & Exchanges
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="font-medium text-gray-900">Stay Connected</h3>
            <p className="mt-2 text-sm text-gray-600">Follow us on social media</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-shop-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-shop-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-shop-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-shop-600">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-shop-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <form className="flex flex-col sm:flex-row gap-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-shop-500 focus:ring-shop-500"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-shop-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-shop-700 focus:outline-none focus:ring-2 focus:ring-shop-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 py-6">
          <p className="text-center text-sm text-gray-500">© 2025 QuickShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
