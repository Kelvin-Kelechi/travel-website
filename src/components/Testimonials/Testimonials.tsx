import { useState, useEffect } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { motion } from "framer-motion";
import { testimonialData } from "./data";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // default to 2 for larger screens

  // Adjust the number of items per page based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1); // Show one item on mobile
      } else {
        setItemsPerPage(2); // Show two items on larger screens
      }
    };

    handleResize(); // Set initial value based on current screen size
    window.addEventListener("resize", handleResize); // Adjust items on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  const visibleTestimonials = testimonialData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + itemsPerPage < testimonialData.length;

  const handlePrev = () => {
    if (canGoBack) setStartIndex(startIndex - itemsPerPage);
  };

  const handleNext = () => {
    if (canGoForward) setStartIndex(startIndex + itemsPerPage);
  };

  return (
    <section className="bg-[#F8F8F8] py-12 px-6 sm:px-12 font-[Mulish] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          <div className="w-full sm:w-1/3">
            <span className="text-[#9B9B9B] text-[14px] uppercase">
              Testimonial
            </span>
            <h2 className="text-[32px] sm:text-[50px] leading-[40px] sm:leading-[60px] font-bold mt-6">
              What
              <br /> customers <br />
              <span className="text-[#FF5200]">say about us.</span>
            </h2>

            <div className="flex justify-center items-center w-[123px] h-[60px] bg-white gap-4 mt-6">
              <button
                onClick={handlePrev}
                disabled={!canGoBack}
                className={`w-9 h-9 flex items-center justify-center hover:bg-gray-100 ${
                  !canGoBack ? "opacity-30 cursor-not-allowed" : ""
                }`}
              >
                <MdArrowBackIos size={22} className="text-[#4A4A4A]" />
              </button>
              <div className="w-[1px] h-8 bg-[#D8D8D8] rotate-[22deg]"></div>
              <button
                onClick={handleNext}
                disabled={!canGoForward}
                className={`w-9 h-9 flex items-center justify-center hover:bg-gray-100 ${
                  !canGoForward ? "opacity-30 cursor-not-allowed" : ""
                }`}
              >
                <MdArrowForwardIos size={22} className="text-[#4A4A4A]" />
              </button>
            </div>
          </div>

          <div className="relative w-full sm:w-2/3 overflow-hidden">
            <motion.div
              className="flex gap-6 sm:gap-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={startIndex}
            >
              {visibleTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[357px] h-[318px] bg-white border border-gray-100 shadow-sm p-6 rounded-md flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-[16px] font-[600] font-[Didot] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <p className="text-sm font-medium">{item.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
