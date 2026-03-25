/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  Weight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['Dutch Ovens', 'Skillets', 'Bakeware', 'Accessories', 'Recipes'];

const PRODUCTS = [
  {
    id: 1,
    name: 'Aero-Iron Signature 5.5 Qt',
    price: 345,
    color: 'Midnight Blue',
    image: 'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=800',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Aero-Iron Shallow 3.5 Qt',
    price: 285,
    color: 'Copper Dust',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=800',
    tag: 'New Arrival'
  },
  {
    id: 3,
    name: 'Aero-Iron Oval 7 Qt',
    price: 425,
    color: 'Sage Green',
    image: 'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&q=80&w=800',
    tag: 'Limited Edition'
  },
  {
    id: 4,
    name: 'Aero-Iron Braiser 4.5 Qt',
    price: 315,
    color: 'Matte Black',
    image: 'https://images.unsplash.com/photo-1526360210818-219130d405e9?auto=format&fit=crop&q=80&w=800',
    tag: 'Professional'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-brand-charcoal text-white py-2 text-center text-[10px] uppercase tracking-[0.2em]">
        Free Shipping on Orders Over $150 | Aerospace Engineering Meets Culinary Art
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4' : 'bg-brand-cream py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left Nav (Desktop) / Mobile Menu Button */}
            <div className="flex flex-1 items-center gap-8">
              <button 
                className="lg:hidden"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
              <div className="hidden lg:flex gap-6">
                {CATEGORIES.slice(0, 3).map(cat => (
                  <a key={cat} href="#" className="nav-link">{cat}</a>
                ))}
              </div>
            </div>

            {/* Logo (Centered) */}
            <div className="flex-shrink-0 text-center px-4">
              <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter italic">
                Future Dutch Ovens
              </h1>
            </div>

            {/* Right Nav (Desktop) + Icons */}
            <div className="flex flex-1 items-center justify-end gap-6">
              <div className="hidden lg:flex gap-6 mr-6">
                {CATEGORIES.slice(3).map(cat => (
                  <a key={cat} href="#" className="nav-link">{cat}</a>
                ))}
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <button className="hidden md:block hover:text-brand-accent transition-colors">
                  <Search size={20} />
                </button>
                <button className="hover:text-brand-accent transition-colors relative">
                  <ShoppingBag size={20} />
                  <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white p-8 lg:hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6">
              {CATEGORIES.map(cat => (
                <a key={cat} href="#" className="text-2xl font-serif italic border-b border-gray-100 pb-4">{cat}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000"
            alt="Aero-Iron Dutch Oven in a modern kitchen"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="uppercase tracking-[0.3em] text-xs mb-4 block">Introducing Aero-Iron™</span>
              <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
                The Future of <br /> Cast Iron is Here.
              </h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="btn-primary bg-white text-brand-charcoal hover:bg-brand-cream">
                  Shop the Series
                </button>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-brand-charcoal">
                  Discover the Tech
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Story / Features */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-brand-accent font-serif italic text-lg mb-4 block">Aerospace Engineering Meets Gastronomy</span>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                  Why Aero-Iron™ Changes Everything.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                  Traditional cast iron is heavy and slow to react. Aero-Iron™ uses a patented lattice-core structure inspired by jet engine components, reducing weight by 40% while increasing thermal conductivity by 25%.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center mb-4">
                      <Weight className="text-brand-accent" size={24} />
                    </div>
                    <h4 className="font-serif font-bold text-sm mb-2">40% Lighter</h4>
                    <p className="text-xs text-gray-500">Easier handling without sacrificing heat retention.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center mb-4">
                      <Flame className="text-brand-accent" size={24} />
                    </div>
                    <h4 className="font-serif font-bold text-sm mb-2">Rapid Heat</h4>
                    <p className="text-xs text-gray-500">Reaches searing temperatures in half the time.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center mb-4">
                      <ShieldCheck className="text-brand-accent" size={24} />
                    </div>
                    <h4 className="font-serif font-bold text-sm mb-2">Diamond-Enamel</h4>
                    <p className="text-xs text-gray-500">Ultra-durable coating that never chips or stains.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1594385208974-2e75f9d8ad48?auto=format&fit=crop&q=80&w=1200" 
                  alt="Aero-Iron detail"
                  className="rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -left-8 bg-brand-cream p-8 hidden md:block max-w-xs shadow-xl">
                  <p className="font-serif italic text-brand-charcoal">
                    "The most significant advancement in cookware since the invention of the Dutch oven itself."
                  </p>
                  <p className="text-[10px] uppercase tracking-widest mt-4 text-gray-400">— Culinary Tech Review</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-24 px-6 bg-brand-cream">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h3 className="text-4xl font-serif mb-4 italic">The Aero-Iron™ Collection</h3>
                <p className="text-gray-500 uppercase tracking-widest text-xs">Available in 8 Signature Finishes</p>
              </div>
              <a href="#" className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-brand-charcoal pb-1">
                View All Products <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.map((product) => (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                      {product.tag}
                    </div>
                    <button className="absolute bottom-4 left-4 right-4 bg-brand-charcoal text-white py-3 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Quick Add
                    </button>
                  </div>
                  <h4 className="font-serif text-lg mb-1">{product.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{product.color}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">${product.price}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < 5 ? "currentColor" : "none"} className="text-brand-accent" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 relative h-[600px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1500" 
                alt="Cooking with Aero-Iron"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                <span className="uppercase tracking-[0.3em] text-[10px] mb-4">The Art of Slow Cooking</span>
                <h3 className="text-4xl font-serif italic mb-6">Mastering the Braise: <br /> A Guide for the Modern Chef</h3>
                <button className="flex items-center gap-2 uppercase tracking-widest text-xs hover:gap-4 transition-all">
                  Read the Article <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-brand-cream p-12">
              <h3 className="text-3xl font-serif italic mb-6">Join the Future Kitchen</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Subscribe to receive exclusive recipes, early access to new color drops, and culinary tips from our aerospace engineers.
              </p>
              <form className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b border-brand-charcoal py-3 focus:outline-none text-sm"
                />
                <button className="btn-primary w-full mt-4">Subscribe</button>
              </form>
              <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-widest">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Feed Mockup */}
        <section className="py-12 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h3 className="text-sm uppercase tracking-[0.4em] mb-4">#FutureDutchOvens</h3>
            <p className="font-serif italic text-xl">Show us how you cook with Aero-Iron™</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-square bg-gray-100 overflow-hidden relative group">
                <img 
                  src={`https://picsum.photos/seed/kitchen${i}/600/600`} 
                  alt="Social feed"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={24} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-charcoal text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div>
              <h2 className="text-2xl font-serif italic mb-8">Future Dutch Ovens</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Redefining culinary traditions through aerospace innovation. Our mission is to create the world's most advanced cookware for the home chef.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-brand-accent transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-bold mb-8">Shop</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Cookware</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aero-Iron™ Series</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Limited Editions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-bold mb-8">Support</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Care & Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-bold mb-8">Visit Us</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                123 Innovation Way<br />
                San Francisco, CA 94103<br /><br />
                Mon – Sat: 10am – 7pm<br />
                Sun: 11am – 6pm
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-500">
            <p>© 2026 Future Dutch Ovens. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
