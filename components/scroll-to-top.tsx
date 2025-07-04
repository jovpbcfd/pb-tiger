"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 520) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // setIsSpinning(true);
    // setTimeout(() => {
    //   setIsSpinning(false);
    //   setIsVisible(false);
    // }, 500);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed z-100 bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          role="button"
          aria-label="Scroll to top"
          className="text-white bg-[#252B73] cursor-pointer border border-[#5E69E4] rounded-md px-5 shadow-lg py-2 md:px-4 md:py-2"
        >
          ↑
        </button>
      )}
    </div>
  );
}
