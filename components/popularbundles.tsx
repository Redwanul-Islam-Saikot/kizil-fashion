import React from "react";
import { ShoppingBag } from "lucide-react";

interface Bundle {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    image: string;
}

const bundles: Bundle[] = [
    {
        id: 1,
        name: "Top + Bottom + Scarf",
        price: 2750,
        originalPrice: 3200,
        image: "/Product Image.png",
    },
    {
        id: 2,
        name: "Top + Bottom + Scarf",
        price: 2750,
        originalPrice: 3200,
        image: "/Product Image.png",
    },
    {
        id: 3,
        name: "Top + Bottom + Scarf",
        price: 2750,
        originalPrice: 3200,
        image: "/Product Image.png",
    },
    {
        id: 4,
        name: "Top + Bottom + Scarf",
        price: 2750,
        originalPrice: 3200,
        image: "/Product Image.png",
    },
];

export default function PopularBundles() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 font-sans">
            {/* Heading */}
            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                    Popular Bundles
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-500">
                    Save more with our best-selling style combos
                </p>
                <button className="mt-4 inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2 text-xs sm:text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
                    See All Bundles
                </button>
            </div>

            {/* Bundles Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {bundles.map((bundle) => (
                    <div
                        key={bundle.id}
                        className="flex flex-col rounded-lg border border-gray-200 overflow-hidden"
                    >
                        <div className="relative w-full aspect-[3/4] bg-gray-100">
                            <img
                                src={bundle.image}
                                alt={bundle.name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col items-center text-center px-3 py-4 sm:px-4">
                            <p className="text-xs sm:text-sm font-medium text-gray-800">
                                {bundle.name}
                            </p>

                            <div className="mt-1.5 flex items-center gap-2">
                                <span className="text-sm sm:text-base font-semibold text-gray-900">
                                    ৳ {bundle.price.toLocaleString()}.00
                                </span>
                                <span className="text-xs text-gray-400 line-through">
                                    ৳ {bundle.originalPrice.toLocaleString()}.00
                                </span>
                            </div>

                            <button className="mt-3 flex w-full items-center justify-center gap-2 bg-[#1a1a1a] py-2.5 text-[11px] sm:text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#333]">
                                <ShoppingBag className="h-3.5 w-3.5" />
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}