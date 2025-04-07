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
    <section className="max-w-7xl mx-auto px-18 py-16">
      <h1 className="text-5xl font-bold mb-8">
        Find An <br />
        Experience
      </h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        To find you the best experiences, we will ask you a few questions to and
        show you experiences based on your preferences.
      </p>

      <div className="mb-10">
        <p className="font-medium mb-2">How much time do you have?</p>
        <div className="flex gap-8 flex-wrap">
          {["A weekend", "A week", "A month", "A few days, specify"].map(
            (time) => (
              <label key={time} className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#FF5200]" />
                {time}
              </label>
            )
          )}
        </div>
      </div>

      <div>
        <p className="font-medium mb-4">What are your interests?</p>
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
                className={`relative h-[250px] cursor-pointer group overflow-hidden   transition ${
                  active ? "" : ""
                } ${isLarge ? "md:col-span-2" : ""}`}
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

                <h1 className="absolute inset-0 flex items-center justify-center flex-col text-white font-semibold text-[24px] z-10">
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

      <button className="mt-8 bg-[#FF5200] text-white w-[150px] h-[40px] py-2 rounded">
        Set
      </button>
    </section>
  );
}
