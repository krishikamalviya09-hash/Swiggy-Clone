import React from "react";

const Offers = () => {
  const offers = [
    {
      id: 1,
      name: "Domino's Pizza",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      offer: "50% OFF up to ₹100",
    },
    {
      id: 2,
      name: "Chocolate Chip Cookies",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      offer: "Flat ₹120 OFF",
    },
    {
      id: 3,
      name: "Chicken Biryani",
      image: "https://cdn.dummyjson.com/recipe-images/11.webp",
      offer: "Buy 1 Get 1 Free",
    },
    {
      id: 4,
      name: "Butter Chicken",
      image:"https://cdn.dummyjson.com/recipe-images/20.webp",
      offer: "40% OFF on buckets",
    },
    {
      id: 5,
      name: "South Indian Masala Dosa",
      image: 
"https://cdn.dummyjson.com/recipe-images/28.webp",
      offer: "50% OFF up to ₹100",
    },
    {
      id: 6,
      name: "Mango Lassi",
      image:"https://cdn.dummyjson.com/recipe-images/22.webp",
      offer: "Flat ₹120 OFF",
    },
    {
      id: 7,
      name: "Mexican Street Corn (Elote)",
      image:  "https://cdn.dummyjson.com/recipe-images/26.webp",
      offer: "Buy 1 Get 1 Free",
    },
    {
      id: 8,
      name: "Mango Salsa Chicken",
      image:"https://cdn.dummyjson.com/recipe-images/5.webp",
      offer: "40% OFF on buckets",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🔥 Best Offers For You</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                {item.offer}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600 text-sm">Delicious food at best price</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
