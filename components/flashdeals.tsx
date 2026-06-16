"use client";

import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    originalPrice: number;
    salePrice: number;
    colors: string[];
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Barbera Cotton Top",
        originalPrice: 1390,
        salePrice: 1090,
        colors: ["#7a6652", "#2c2c2c"],
        image: "/flashdeals 1.png",
    },
    {
        id: 2,
        name: "Short Midi Card",
        originalPrice: 1590,
        salePrice: 1390,
        colors: ["#4a5240", "#c8b99a"],
        image: "/flashdeals 2.png",
    },
    {
        id: 3,
        name: "Lynnell Strap Top",
        originalPrice: 4590,
        salePrice: 4090,
        colors: ["#3d4a35", "#8b7355"],
        image: "/flashdeals 3.png",
    },
    {
        id: 4,
        name: "Leather Shopper Bag With Stitching",
        originalPrice: 7590,
        salePrice: 7090,
        colors: ["#8b7355", "#2c2c2c"],
        image: "/flashdeals 4.png",
    },
];

const INITIAL_SECONDS = 3 * 86400 + 23 * 3600 + 19 * 60 + 56;

function useCountdown(initial: number) {
    const [left, setLeft] = useState(initial);
    useEffect(() => {
        const id = setInterval(() => setLeft((t) => Math.max(0, t - 1)), 1000);
        return () => clearInterval(id);
    }, []);
    return {
        days: Math.floor(left / 86400),
        hours: Math.floor((left % 86400) / 3600),
        minutes: Math.floor((left % 3600) / 60),
        seconds: left % 60,
    };
}

function Pad({ n }: { n: number }) {
    return <>{String(n).padStart(2, "0")}</>;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center min-w-[28px]">
            <span className="text-sm font-semibold text-gray-800 leading-none">
                <Pad n={value} />
            </span>
            <span className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-wide">
                {label}
            </span>
        </div>
    );
}

function CartIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
            />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 01-8 0" />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            />
        </svg>
    );
}

function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200">
            {/* Image */}
            <div className="relative overflow-hidden" style={{ paddingTop: "118%" }}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                    Sale
                </span>
                <button
                    aria-label="Add to wishlist"
                    className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                    <HeartIcon />
                </button>
            </div>

            {/* Body */}
            <div className="p-3">
                <div className="flex gap-1 mb-2">
                    {product.colors.map((color, i) => (
                        <span
                            key={i}
                            className="w-3 h-3 rounded-full border border-black/10 inline-block"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>

                <p className="text-xs font-medium text-gray-800 leading-snug mb-1.5 line-clamp-2">
                    {product.name}
                </p>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-gray-900">
                        ৳ {product.salePrice.toLocaleString()}.00
                    </span>
                    <span className="text-[11px] text-gray-400 line-through">
                        ৳ {product.originalPrice.toLocaleString()}.00
                    </span>
                </div>

                <button className="w-full flex items-center justify-center gap-1.5 border border-gray-300 rounded-lg py-2 text-xs text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-200">
                    <CartIcon />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default function FlashDeals() {
    const { days, hours, minutes, seconds } = useCountdown(INITIAL_SECONDS);

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-10">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Flash Deals
                </h2>

                <div className="flex items-center gap-4">
                    {/* Countdown */}
                    <div className="flex items-end gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                        <CountdownUnit value={days} label="Days" />
                        <span className="text-gray-300 text-sm pb-3 leading-none">:</span>
                        <CountdownUnit value={hours} label="Hours" />
                        <span className="text-gray-300 text-sm pb-3 leading-none">:</span>
                        <CountdownUnit value={minutes} label="Minutes" />
                        <span className="text-gray-300 text-sm pb-3 leading-none">:</span>
                        <CountdownUnit value={seconds} label="Seconds" />
                    </div>

                    <a
                        href="#"
                        className="text-xs sm:text-sm text-gray-500 hover:text-gray-800 underline underline-offset-2 whitespace-nowrap"
                    >
                        See All Products
                    </a>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}