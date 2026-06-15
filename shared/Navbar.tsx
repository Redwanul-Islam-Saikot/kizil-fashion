import React, { useState } from "react";
import {
  Phone,
  Search,
  User,
  Heart,
  ShoppingCart,
  AlignJustify,
  Zap,
  Briefcase,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function KizilHeader() {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const categories = [
    "Tops Collection",
    "Bottoms Wear",
    "Loungewear",
    "Scarves & Wraps",
    "Accessories",
  ];

  return (
    <header className="w-full font-sans">
      {/* Top bar */}
      <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 px-4 py-4 sm:px-6 lg:gap-6">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 text-2xl font-serif font-bold tracking-wide text-gray-900 sm:text-3xl">
          KI<span className="text-orange-600">ZIL</span>
        </a>

        {/* Contact */}
        <div className="flex flex-shrink-0 items-center gap-2">
          <Phone className="h-5 w-5 text-orange-600" strokeWidth={2} />
          <div className="leading-tight">
            <p className="text-xs text-gray-400">Contact us 24/7</p>
            <p className="text-sm font-bold text-gray-900">(02)-55048474</p>
          </div>
        </div>

        {/* Search */}
        <div className="order-2 w-full flex-1 sm:order-none sm:w-auto sm:min-w-[200px]">
          <div className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2.5">
            <Search className="h-4 w-4 flex-shrink-0 text-orange-600" strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Search for products"
              className="w-full bg-transparent text-sm text-gray-500 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Right icons */}
        <div className="order-3 ml-auto flex flex-wrap items-center gap-4 sm:order-none sm:gap-6">
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
            <User className="h-5 w-5" strokeWidth={1.75} />
            <span className="text-sm font-medium">Your Account</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
            <span className="relative">
              <Heart className="h-5 w-5" strokeWidth={1.75} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white">
                0
              </span>
            </span>
            <span className="text-sm font-medium">Wishlist</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-orange-600">
            <span className="relative">
              <ShoppingCart className="h-5 w-5" strokeWidth={1.75} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white">
                0
              </span>
            </span>
            <span className="text-sm font-medium">Cart</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-900 px-4 py-3 sm:px-6">
        {/* Shop by category */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setCategoryOpen((open) => !open)}
            className="flex items-center gap-2 rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap"
          >
            <AlignJustify className="h-4 w-4" strokeWidth={2.5} />
            SHOP BY CATEGORY
          </button>

          {categoryOpen && (
            <div className="absolute left-0 top-full z-20 mt-2 w-60 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
              {/* Category list */}
              <div className="py-2">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-900 hover:bg-gray-50"
                  >
                    {category}
                    <ChevronRight className="h-4 w-4 text-gray-400" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
          <a href="#" className="text-sm font-medium text-gray-200 hover:text-white">
            Our Collections
          </a>
          <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-gray-200 hover:text-white">
            <Zap className="h-4 w-4 text-orange-500" strokeWidth={2} fill="currentColor" />
            Flash Deals
          </a>
          <a href="#" className="text-sm font-medium text-gray-200 hover:text-white">
            New Arrival
          </a>
          <a href="#" className="text-sm font-medium text-orange-500 hover:text-orange-400">
            Bundle Products
          </a>
        </nav>

        {/* Right links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:ml-8 lg:gap-8">
          <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-gray-200 hover:text-white">
            <Briefcase className="h-4 w-4 text-orange-500" strokeWidth={2} />
            Corporate Enquiries
          </a>
          <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-gray-200 hover:text-white">
            <MapPin className="h-4 w-4 text-orange-500" strokeWidth={2} />
            Track Your Order
          </a>
        </div>
      </div>
    </header>
  );
}