import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={domRef}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;
