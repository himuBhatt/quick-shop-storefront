import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/data/products";
import { useParams } from "react-router-dom";
import { getCategoryById } from "@/data/categories";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Products = () => {
  const { categoryId } = useParams();
  const activeCategory = categoryId ? getCategoryById(categoryId) : undefined;
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => { setSelectedCategory(activeCategory?.name ?? ""); }, [activeCategory?.name]);

  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    result = result.filter(product => {
      const discountedPrice = product.discount > 0 
        ? (product.price * (100 - product.discount)) / 100 
        : product.price;
      return discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1];
    });
    
    // Sort products
    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => {
          const aPrice = a.discount > 0 ? (a.price * (100 - a.discount)) / 100 : a.price;
          const bPrice = b.discount > 0 ? (b.price * (100 - b.discount)) / 100 : b.price;
          return aPrice - bPrice;
        });
        break;
      case "price-high-low":
        result.sort((a, b) => {
          const aPrice = a.discount > 0 ? (a.price * (100 - a.discount)) / 100 : a.price;
          const bPrice = b.discount > 0 ? (b.price * (100 - b.discount)) / 100 : b.price;
          return bPrice - aPrice;
        });
        break;
      case "name-a-z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Featured sort (default) - we'll keep the original order
        break;
    }
    
    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setPriceRange([0, 500]);
    setSortBy("featured");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{activeCategory?.name ?? "All Clothing"}</h1>
        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 lg:hidden"
            onClick={toggleFilters}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        {/* Filters */}
        <div className={`${
          showFilters ? "block" : "hidden"
        } lg:block`}>
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <Button variant="ghost" size="sm" onClick={toggleFilters}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-4 lg:mt-0">
            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-shop-500 focus:outline-none focus:ring-1 focus:ring-shop-500"
                placeholder="Search clothing..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Categories</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <button
                    className={`text-sm ${
                      selectedCategory === "" ? "font-medium text-shop-600" : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setSelectedCategory("")}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category} className="flex items-center">
                    <button
                      className={`text-sm ${
                        selectedCategory === category ? "font-medium text-shop-600" : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h3 className="font-medium text-gray-900">Price Range</h3>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="min-price" className="text-xs text-gray-500">Min</label>
                  <input
                    type="number"
                    id="min-price"
                    className="block w-full rounded-md border border-gray-300 py-1.5 px-3 text-sm"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    min="0"
                    max={priceRange[1]}
                  />
                </div>
                <div>
                  <label htmlFor="max-price" className="text-xs text-gray-500">Max</label>
                  <input
                    type="number"
                    id="max-price"
                    className="block w-full rounded-md border border-gray-300 py-1.5 px-3 text-sm"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    min={priceRange[0]}
                  />
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div>
              <h3 className="font-medium text-gray-900">Sort By</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="sort-featured"
                    name="sort"
                    type="radio"
                    className="h-4 w-4 text-shop-600 focus:ring-shop-500"
                    checked={sortBy === "featured"}
                    onChange={() => setSortBy("featured")}
                  />
                  <label htmlFor="sort-featured" className="ml-2 text-sm text-gray-600">
                    Featured
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-price-low-high"
                    name="sort"
                    type="radio"
                    className="h-4 w-4 text-shop-600 focus:ring-shop-500"
                    checked={sortBy === "price-low-high"}
                    onChange={() => setSortBy("price-low-high")}
                  />
                  <label htmlFor="sort-price-low-high" className="ml-2 text-sm text-gray-600">
                    Price: Low to High
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-price-high-low"
                    name="sort"
                    type="radio"
                    className="h-4 w-4 text-shop-600 focus:ring-shop-500"
                    checked={sortBy === "price-high-low"}
                    onChange={() => setSortBy("price-high-low")}
                  />
                  <label htmlFor="sort-price-high-low" className="ml-2 text-sm text-gray-600">
                    Price: High to Low
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-name-a-z"
                    name="sort"
                    type="radio"
                    className="h-4 w-4 text-shop-600 focus:ring-shop-500"
                    checked={sortBy === "name-a-z"}
                    onChange={() => setSortBy("name-a-z")}
                  />
                  <label htmlFor="sort-name-a-z" className="ml-2 text-sm text-gray-600">
                    Name: A to Z
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sort-name-z-a"
                    name="sort"
                    type="radio"
                    className="h-4 w-4 text-shop-600 focus:ring-shop-500"
                    checked={sortBy === "name-z-a"}
                    onChange={() => setSortBy("name-z-a")}
                  />
                  <label htmlFor="sort-name-z-a" className="ml-2 text-sm text-gray-600">
                    Name: Z to A
                  </label>
                </div>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <Button variant="outline" size="sm" onClick={resetFilters} className="w-full">
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Product grid */}
        <div className="lg:col-span-3">
          {/* Sort dropdown for larger screens */}
          <div className="hidden sm:flex sm:justify-end">
            <select
              aria-label="Sort by"
              className="block cursor-pointer rounded-md border border-gray-300 bg-white py-1.5 px-4 text-sm text-gray-700 focus:border-shop-500 focus:outline-none focus:ring-1 focus:ring-shop-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
          
          {/* Product count */}
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
          
          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-12 text-center">
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={resetFilters}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
