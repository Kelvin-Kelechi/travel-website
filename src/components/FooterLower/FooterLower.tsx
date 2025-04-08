import { countries, icons, languages } from "./data";

export default function FooterLower() {
  return (
    <>
      <footer className="flex flex-col md:flex-row items-center justify-between px-6 md:px-36 py-6 border border-[#dcdad3] bg-white gap-4">
        <div className="text-[24px] font-bold text-[#30797C] mb-4 md:mb-0">
          Travelsy
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex gap-4 md:gap-10 mb-4 md:mb-0">
            {icons.map((icon, idx) => (
              <img
                key={idx}
                src={icon.src}
                alt={icon.alt}
                className="  cursor-pointer transition duration-300 hover:scale-110"
              />
            ))}
          </div>

          <div className="flex gap-4 mb-4 md:mb-0">
            <select className="border border-[#E4E4E4] w-full sm:w-[231px] h-[40px] text-[#9B9B9B] text-sm px-2 py-1 rounded">
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {`${lang.flag} ${lang.label} (${lang.country})`}
                </option>
              ))}
            </select>

            <select className="border border-[#E4E4E4] w-full sm:w-[231px] h-[40px] text-[#9B9B9B] text-sm px-2 py-1 rounded">
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {` ${country.label}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </footer>

      <div className="text-center lg:flex lg:justify-between md:text-left text-xs text-gray-400 px-6 md:px-36 m-4 md:m-10">
        <span> Copyright © 2019 Travelsy Ltd. All rights reserved.</span>
        <span className="block md:inline mt-2 md:mt-0">
          {" "}
          Made in Kenya by Ralak
        </span>
      </div>
    </>
  );
}
