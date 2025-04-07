import { countries, icons, languages } from "./data";

export default function FooterLower() {
  return (
    <>
      <footer className="flex flex-col md:flex-row items-center justify-between px-6 md:px-36 py-6 border border-[#dcdad3] bg-white gap-4">
        <div className="text-[24px] font-bold text-[#30797C]">Travelsy</div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-10">
            {icons.map((icon, idx) => (
              <img key={idx} src={icon.src} alt={icon.alt} />
            ))}
          </div>
          <select className="border border-[#E4E4E4] w-[231px] h-[40px] text-[#9B9B9B]  text-sm px-2 py-1 rounded">
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {`${lang.flag} ${lang.label} (${lang.country})`}
              </option>
            ))}
          </select>

          <select className="border border-[#E4E4E4] w-[231px] h-[40px] text-[#9B9B9B]  text-sm px-2 py-1 rounded">
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {` ${country.label}`}
              </option>
            ))}
          </select>
        </div>
      </footer>

      <div className="text-center  flex justify-between px-26 text-xs text-gray-400 m-10">
        <span> Copyright © 2019 Travelsy Ltd. All rights reserved.</span>
        <span> Made in Kenya by Ralak</span>
      </div>
    </>
  );
}
