import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative isolate overflow-hidden bg-muted">
    <img src="/images/clothing.jpg" alt="A curated rack of everyday clothing" className="absolute inset-0 -z-20 h-full w-full object-cover" />
    <div className="absolute inset-0 -z-10 bg-background/80" />
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="mb-4 text-sm font-semibold uppercase text-primary">The everyday collection</p>
      <h1 className="max-w-xl text-4xl font-bold text-foreground sm:text-5xl">Clothing for<br />every day.</h1>
      <p className="mt-5 max-w-lg text-lg text-foreground">Fresh tees, favorite denim, and effortless layers. Find the pieces that make your wardrobe yours.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button asChild size="lg"><Link to="/products">Shop Clothing</Link></Button>
        <Button asChild variant="outline" size="lg"><Link to="/categories">Browse Categories</Link></Button>
      </div>
    </div>
  </section>
);

export default Hero;
