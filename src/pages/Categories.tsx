
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shop by Category</h1>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          Browse our wide range of products organized by category.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
        {categories.map((category) => (
          <div key={category.id} className="group relative animate-fade-in">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
              <p className="mt-1 text-sm font-medium text-white/80">{category.itemCount} Products</p>
              <div className="mt-4">
                <Button asChild variant="outline" className="bg-white/90 hover:bg-white">
                  <Link to={`/categories/${category.id}`} className="flex items-center gap-2">
                    Browse Products
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
