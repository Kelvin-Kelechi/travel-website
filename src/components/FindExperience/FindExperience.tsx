import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { interests } from "./data";

export default function FindExperience() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (title: string) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-18 py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
        Find An <br className="hidden sm:block" />
        Experience
      </h1>

      <p className="text-gray-600 mb-10 sm:mb-12 max-w-2xl text-base sm:text-lg">
        To find you the best experiences, we will ask you a few questions and
        show you experiences based on your preferences.
      </p>

      {/* Time selection */}
      <div className="mb-10">
        <p className="font-medium mb-3 text-base sm:text-lg">
          How much time do you have?
        </p>
        <div className="flex gap-4 flex-wrap">
          {["A weekend", "A week", "A month", "A few days, specify"].map(
            (time) => (
              <label
                key={time}
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <input type="checkbox" className="accent-[#FF5200]" />
                {time}
              </label>
            )
          )}
        </div>
      </div>

      {/* Interests */}
      <div>
        <p className="font-medium mb-4 text-base sm:text-lg">
          What are your interests?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {interests.map((item) => {
            const active = selected.includes(item.title);
            const isLarge = ["Rafting", "Farm Visit", "Camping"].includes(
              item.title
            );

            return (
              <div
                key={item.title}
                onClick={() => toggle(item.title)}
                className={`relative h-[220px] sm:h-[250px] cursor-pointer group overflow-hidden rounded-lg transition ${
                  isLarge ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />

                <div
                  className={`absolute inset-0 bg-[#FF5200] bg-opacity-80 transition duration-300 ${
                    active ? "opacity-70" : "opacity-0 group-hover:opacity-60"
                  }`}
                />

                <h1 className="absolute inset-0 flex items-center justify-center flex-col text-white font-semibold text-xl sm:text-2xl z-10 text-center">
                  {active && (
                    <span className="absolute top-20 text-xl">
                      <IoMdCheckmark size={35} />
                    </span>
                  )}
                  {item.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      <button className="mt-10 w-full sm:w-[180px] h-[42px] bg-[#FF5200] text-white py-2 rounded-md text-sm sm:text-base">
        Set
      </button>
    </section>
  );
}
