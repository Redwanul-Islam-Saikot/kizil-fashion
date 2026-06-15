import React from "react";
import {
  Send,
  Mail,
  Copy,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function KizilFooter() {
  return (
    <footer className="w-full font-sans bg-[#f5f5f5]">
      {/* Main footer content */}
      <div className="flex flex-col gap-10 px-6 py-10 sm:px-10 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-8">
        {/* Brand / contact info */}
        <div className="space-y-4 md:w-full lg:w-auto lg:flex-[2]">
          <a href="#" className="inline-block text-3xl font-serif font-bold tracking-wide text-gray-900">
            KI<span className="text-orange-600">ZIL</span>
          </a>

          <div className="flex items-start gap-3 text-sm text-gray-500">
            <Send className="mt-0.5 h-4 w-4 flex-shrink-0 -rotate-45 text-gray-700" strokeWidth={1.75} />
            <span>29 SE 2nd Ave, Miami Florida 33131, United States</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <Mail className="h-4 w-4 flex-shrink-0 text-gray-700" strokeWidth={1.75} />
            <span>info@kinzil.com</span>
            <Copy className="h-4 w-4 flex-shrink-0 cursor-pointer text-gray-400 hover:text-gray-600" strokeWidth={1.75} />
          </div>

          <p className="text-lg font-bold text-gray-900">(+92) 3942 7879</p>
        </div>

        <div className="space-y-3 md:flex-1 lg:flex-1">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">Shopping</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-orange-600">Wishlist</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">Cart</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">Shop by Category</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3 md:flex-1 lg:flex-1">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">Information</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-orange-600">Track My Order</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">Corporate Enquires</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="space-y-3 md:flex-1 lg:flex-1">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">Account</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-orange-600">My Account</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">My Orders</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-6 text-sm text-gray-500 sm:px-10 lg:justify-between">
        {/* Copyright */}
        <p className="text-center lg:text-left">
          Copyright &copy;{" "}
          <a href="#" className="text-orange-600 hover:underline">
            360D Soul Limited
          </a>{" "}
          2026. All rights reserved.
        </p>

        {/* Social icons */}
        <a href="#" aria-label="Facebook" className="text-gray-800 hover:text-orange-600">
          <Facebook className="h-5 w-5" strokeWidth={1.75} />
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-800 hover:text-orange-600">
          <Twitter className="h-5 w-5" strokeWidth={1.75} />
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-800 hover:text-orange-600">
          <Instagram className="h-5 w-5" strokeWidth={1.75} />
        </a>

        {/* Policy links */}
        <a href="#" className="hover:text-orange-600">Teams &amp; Condition</a>
        <a href="#" className="hover:text-orange-600">Privacy &amp; Policy</a>
        <a href="#" className="hover:text-orange-600">Refund Policy</a>
      </div>
    </footer>
  );
}