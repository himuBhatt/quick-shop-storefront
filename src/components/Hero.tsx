
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-shop-600 sm:text-lg lg:text-base xl:text-lg">
                  New Arrivals
                </span>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="text-gray-900">Shop the Latest</span>{" "}
                  <span className="text-shop-600">Trends Today</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Discover our curated collection of the season's must-have items. From fashion to home decor, 
                we've got everything you need to stay on trend.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Button asChild size="lg" className="bg-shop-600 hover:bg-shop-700">
                    <Link to="/products">Shop Now</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/categories">Browse Categories</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative mx-auto w-full overflow-hidden rounded-lg shadow-lg lg:max-w-md">
                <div className="aspect-[4/3] relative block w-full overflow-hidden rounded-lg">
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80"
                    alt="Person shopping online"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
