import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={domRef}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;
