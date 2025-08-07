"use client"

import { motion } from "framer-motion";
import React from "react";

const quote = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  return (
    <div
      className="py-2 sm:py-0"
    >
      <motion.h1
        className={`${className}`}
        variants={quote}
        initial="hidden"
        animate="visible"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            className="inline-block"
            key={`${word}-${index}`}
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
