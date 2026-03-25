"use client"
import { TypeAnimation } from "react-type-animation";

const TypeWriter = ({ words, className }) => {
  return (
    <TypeAnimation
      sequence={words.flatMap((word) => [word, 1000])}
      speed={50}
      deletionSpeed={40}
      repeat={Infinity}
      className={className}
    />
  );
};

export default TypeWriter;
