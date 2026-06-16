import React from "react";

interface Pick {
    id: number;
    name: string;
    image: string;
}

const picks: Pick[] = [
    { id: 1, name: "Tops Collection", image: "/season 1.png" },
    { id: 2, name: "Bottom Wear", image: "/season 2.png" },
    { id: 3, name: "Loungewear", image: "/season 3.png" },
    { id: 4, name: "Scarves & Wraps", image: "/season 4.png" },
];

export default function TopPickOfTheSeason() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 font-sans">
            {/* Heading */}
            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                    Top Pick of the Season
                </h2>
            </div>

            {/* Picks Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {picks.map((pick) => (
                    <a key={pick.id} href="#" className="group block w-full">
                        <div className="relative w-full overflow-hidden rounded-lg md:rounded-xl aspect-square bg-gray-100">
                            <img
                                src={pick.image}
                                alt={pick.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            />
                        </div>
                        <p className="mt-2.5 sm:mt-3 text-center text-xs sm:text-sm font-medium text-gray-800">
                            {pick.name}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}