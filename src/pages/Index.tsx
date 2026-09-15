
import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFeaturedProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredCategories = categories.slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts products={featuredProducts} />
        <CategorySection categories={featuredCategories} />
        
        {/* Call to action section */}
        <section className="bg-shop-600 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Refresh your wardrobe
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-shop-100">
                Discover everyday staples and fresh styles made for your next outfit.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-shop-600 hover:bg-shop-50">
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-shop-700">
                  <Link to="/categories">View Categories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Information sections */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 text-center sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-shop-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-shop-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Delivery</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get your orders delivered to your doorstep in record time.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-shop-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-shop-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Secure Payments</h3>
                <p className="mt-2 text-base text-gray-500">
                  We use the latest security protocols to protect your payments.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-shop-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-shop-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Easy Returns</h3>
                <p className="mt-2 text-base text-gray-500">
                  Changed your mind? Return products with our hassle-free policy.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-shop-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-shop-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">24/7 Support</h3>
                <p className="mt-2 text-base text-gray-500">
                  Got questions? Our customer support team is available around the clock.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter section */}
        <section className="bg-gray-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white px-6 py-10 shadow-md sm:py-12 sm:px-12 lg:flex lg:items-center lg:p-16">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-gray-500">
                  Get the latest updates about new clothing arrivals, sales, and special offers delivered straight to your inbox.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:ml-8 lg:w-full lg:max-w-md">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 focus:border-shop-500 focus:ring-1 focus:ring-shop-500"
                    placeholder="Enter your email"
                  />
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-shop-600 px-5 py-3 text-base font-medium text-white hover:bg-shop-700 focus:outline-none focus:ring-2 focus:ring-shop-500 focus:ring-offset-2"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  We care about your data. Read our{" "}
                  <Link to="/privacy" className="font-medium text-shop-600 underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* All categories section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">All Categories</h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
                Explore our complete collection of categories.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className="group relative flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 group-hover:text-shop-600">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">{category.itemCount} items</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:text-shop-600 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-shop-600 hover:bg-shop-700">
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
