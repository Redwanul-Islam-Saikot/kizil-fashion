"use client";

import { useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    colors: string[];
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Striped Linen Shirt",
        price: 850,
        colors: ["#c8b99a", "#2c2c2c", "#7a6652"],
        image: "/flashdeals 1.png",
    },
    {
        id: 2,
        name: "Denim Blue Jeans",
        price: 1200,
        colors: ["#4a6785", "#2c2c2c"],
        image: "/flashdeals 2.png",
    },
    {
        id: 3,
        name: "Floral Print Dress",
        price: 1800,
        colors: ["#4a5240", "#8b7355", "#c8b99a"],
        image: "/flashdeals 3.png",
    },
    {
        id: 4,
        name: "Leather Ankle Boots",
        price: 3500,
        colors: ["#7a6652", "#2c2c2c"],
        image: "/flashdeals 4.png",
    },
    {
        id: 5,
        name: "Silk Scarf",
        price: 600,
        colors: ["#e8b4b8", "#c8b99a", "#4a5240"],
        image: "/flashdeals 4.png",
    },
    {
        id: 6,
        name: "Woolen Winter Coat",
        price: 4800,
        colors: ["#7a6652", "#2c2c2c", "#c8b99a"],
        image: "/flashdeals 4.png",
    },
    {
        id: 7,
        name: "Casual Cotton T-Shirt",
        price: 400,
        colors: ["#ffffff", "#2c2c2c", "#e8b4b8"],
        image: "/flashdeals 4.png",
    },
    {
        id: 8,
        name: "Classic Leather Belt",
        price: 1100,
        colors: ["#7a6652", "#2c2c2c"],
        image: "/flashdeals 4.png",
    },
];

function HeartIcon({ filled }: { filled: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            fill={filled ? "currentColor" : "none"}
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

function CartIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 10a4 4 0 01-8 0" />
        </svg>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [wished, setWished] = useState(false);

    return (
        <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200">
            {/* Image */}
            <div className="relative overflow-hidden" style={{ paddingTop: "115%" }}>
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                    aria-label="Add to wishlist"
                    onClick={() => setWished((w) => !w)}
                    className={`absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm transition-all duration-200 opacity-0 group-hover:opacity-100 ${wished ? "text-red-500" : "text-gray-400"
                        }`}
                >
                    <HeartIcon filled={wished} />
                </button>
            </div>

            {/* Info */}
            <div className="p-3">
                {/* Color swatches */}
                <div className="flex gap-1 mb-1.5">
                    {product.colors.map((color, i) => (
                        <span
                            key={i}
                            className="w-3 h-3 rounded-full border border-black/10 inline-block"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>

                <p className="text-xs sm:text-sm font-medium text-gray-800 leading-snug mb-1 line-clamp-1">
                    {product.name}
                </p>

                <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-3">
                    ৳ {product.price.toLocaleString()}.00
                </p>

                <button className="w-full flex items-center justify-center gap-1.5 border border-gray-300 rounded-lg py-2 text-[11px] sm:text-xs text-gray-700 font-medium hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-200">
                    <CartIcon />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default function NewArrivals() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-10 sm:py-14">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1.5">
                    New Arrivals
                </h2>
                <p className="text-sm text-gray-400">Be the first to wear the latest trends</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    );
}