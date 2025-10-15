import React, { useState, useEffect } from "react";
import { ArrowCircleUp } from "phosphor-react";

const ReturnToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-14 h-14 rounded-full bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border-0 outline-none focus:ring-4 focus:ring-primary-200"
        aria-label="Return to top"
      >
        <ArrowCircleUp className="w-6 h-6" weight="fill" />
      </button>
    </div>
  );
};

export default ReturnToTop;
