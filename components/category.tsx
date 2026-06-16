const categories = [
    {
        id: 1,
        label: "Tops Collection",
        image: "/Category 1.png",
    },
    {
        id: 2,
        label: "Bottoms Wear",
        image: "/Category 2.png",
    },
    {
        id: 3,
        label: "Loungewear",
        image: "/Category 3.png",

    },
    {
        id: 4,
        label: "Scarves",
        image: "/Category 4.png",
    },
];

export default function ShopByCategory() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-10 sm:py-14">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                Shop By Category
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-500 mb-8">
                Explore our curated collection and find your perfect style.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="group rounded-xl overflow-hidden border border-gray-200 bg-gray-50 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                    >
                        <div className="relative w-full" style={{ paddingTop: "130%" }}>
                            <img
                                src={cat.image}
                                alt={cat.label}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="px-3 py-2.5">
                            <span className="text-sm font-medium text-gray-800">
                                {cat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}