import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronLeft, ChevronRight, Truck, Clock, BadgeCheck } from "lucide-react";

interface Slide {
    id: number;
    image: string;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
    isSpecial?: boolean;
}

interface Feature {
    id: number;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    subtitle: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: "/Hero 1.png",
    },
    {
        id: 2,
        image: "/Hero 2.png",
    },
    {
        id: 3,
        image: "/Hero 3.png",
    },
];

const features: Feature[] = [
    {
        id: 1,
        icon: Truck,
        title: "Fast, Free Shipping",
        subtitle: "On orders over $99 - $499",
    },
    {
        id: 2,
        icon: Clock,
        title: "Next Day Delivery",
        subtitle: "Free - spend over $9.99 - $49.99",
    },
    {
        id: 3,
        icon: BadgeCheck,
        title: "Quality Guarantee",
        subtitle: "On guaranteed out of products",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const autoPlayRef = useRef<() => void>();

    const nextSlide = (): void => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = (): void => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number): void => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        const play = (): void => {
            autoPlayRef.current?.();
        };
        const interval = setInterval(play, 5000); // Auto slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 font-sans">
            <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[32px] shadow-lg aspect-[16/10] sm:aspect-[1.8/1] md:aspect-[2.1/1] lg:aspect-[2.4/1] bg-gray-900 group">
                {/* Slides Container */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${index === currentSlide
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-[1.03] pointer-events-none"
                            }`}
                    >
                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={slide.title || ""}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />

                        {/* Dark Overlay for Text Contrast */}
                        {(slide.title || slide.subtitle || slide.buttonText) && (
                            <div className="absolute inset-0 bg-black/45 md:bg-black/40 flex flex-col items-center justify-center p-6 md:p-12 text-center text-white">
                                {/* Main Title */}
                                {slide.title && (
                                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-2 md:mb-4 leading-none drop-shadow-md transition-all duration-700 delay-300 lg:whitespace-nowrap">
                                        {slide.title}
                                    </h2>
                                )}

                                {/* Subtitle */}
                                {slide.subtitle && (
                                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-medium mb-6 md:mb-8 max-w-lg md:max-w-xl leading-relaxed drop-shadow-sm transition-all duration-700 delay-500">
                                        {slide.subtitle}
                                    </p>
                                )}

                                {/* Explore Button */}
                                {slide.buttonText && (
                                    <a
                                        href={slide.buttonLink || "#"}
                                        className="inline-flex items-center gap-2 bg-brand-yellow text-brand-purple px-6 py-3 md:px-8 md:py-3.5 rounded-lg text-xs md:text-sm font-black tracking-wide shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                                    >
                                        {slide.isSpecial && (
                                            <Sparkles size={16} className="fill-brand-purple text-brand-purple" />
                                        )}
                                        <span>{slide.buttonText}</span>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}

                {/* Navigation Arrow buttons (Visible on hover on desktop) */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/35 text-white p-2 rounded-full cursor-pointer lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs focus:outline-none"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={20} className="stroke-[2.5]" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/35 text-white p-2 rounded-full cursor-pointer lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs focus:outline-none"
                    aria-label="Next slide"
                >
                    <ChevronRight size={20} className="stroke-[2.5]" />
                </button>

                {/* Carousel Pagination Indicators (Dots) */}
                <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${index === currentSlide
                                ? "w-8 bg-brand-yellow"
                                : "w-3 bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Trust Badges / Features Strip */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 rounded-xl border border-gray-200">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={feature.id}
                            className="flex items-center gap-3 px-5 py-4 sm:px-6"
                        >
                            <Icon size={28} className="shrink-0 text-red-500" />
                            <div className="text-left">
                                <p className="text-sm md:text-[15px] font-semibold text-gray-900 leading-tight">
                                    {feature.title}
                                </p>
                                <p className="text-xs text-gray-400 leading-tight mt-0.5">
                                    {feature.subtitle}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}