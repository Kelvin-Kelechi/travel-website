import { useState } from "react";
import { BiBookmark, BiSearch, BiChevronDown } from "react-icons/bi";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="flex items-center justify-between px-8 py-6 pr-[140px] border-b border-[#dcdad3] bg-white relative">
      <div className="text-[18px] font-bold">Travelsy</div>

      <div className="flex items-center gap-4 ">
        <nav className="hidden md:flex gap-6 mr-18 text-[13px] text-gray-700">
          <a href="#">Camping Locations</a>
          <a href="#">Activities</a>
          <a href="#">Equipment</a>
          <a href="#">Blogs</a>
        </nav>
        <button className="bg-[#FF5200]  flex text-[13px] items-center text-white px-4 py-2 rounded-2xl text-sm">
          <BiBookmark className="mr-2" />
          Reservations
        </button>

        <div className="relative">
          <BiSearch
            className="text-xl cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute right-0 top-8 w-48 px-3 py-2 border border-gray-300 rounded-xl text-sm shadow-lg z-20 bg-white"
            />
          )}
        </div>

        <div className="relative">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s"
                alt="User"
                className="w-8 h-8 object-cover rounded-full"
              />

              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <BiChevronDown className="text-lg" />
          </div>

          {showDropdown && (
            <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-md shadow-lg w-36 text-sm z-20">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
