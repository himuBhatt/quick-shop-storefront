
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import { CartProvider } from "./hooks/use-cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route 
                path="/products" 
                element={
                  <>
                    <Navbar />
                    <Products />
                    <Footer />
                  </>
                } 
              />
              <Route 
                path="/products/:id" 
                element={
                  <>
                    <Navbar />
                    <ProductDetail />
                    <Footer />
                  </>
                } 
              />
              <Route 
                path="/cart" 
                element={
                  <>
                    <Navbar />
                    <Cart />
                    <Footer />
                  </>
                } 
              />
              <Route 
                path="/categories" 
                element={
                  <>
                    <Navbar />
                    <Categories />
                    <Footer />
                  </>
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
