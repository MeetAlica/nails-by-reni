import { useState, useEffect } from "react";
import backToTopImage from "../assets/back-to-top.png";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-4 z-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-red-400 text-white rounded-full shadow-lg hover:bg-red-500 focus:outline-none"
        >
          <img src={backToTopImage} alt="Back to top" className="h-8 w-8" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
