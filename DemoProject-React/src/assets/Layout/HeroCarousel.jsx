import adamNormal from "../images/adam-github.png"
import adamGopher from "../images/adam-gopher.png"
import adamDotNet from "../images/adam-dotnet.png"
import adamTailWind from "../images/adam-tailwind.png"
import { useState, useEffect } from 'react';
import HeroSlide from './HeroSlide';

const slides = [
  {
    tag: "Adam Evans",
    brief: "Full Stack Developer",
    highlight: "Polyglot",
    hook: "Code wizard and solution finder.",
    text: 'Hi, I\'m Adam - a pragmatic full-stack dev with a passion for optimising processes.',
    image: adamNormal,
    classes: "rounded"
  },
  {
    tag: "Tailwind CSS",
    brief: "Style, everywhere.",
    highlight: "Transferable.",
    hook: "Flexible and powerful.",
    text: 'Utility-first UI\'s built around Tailwind allowing newcomers to jump right in.',
    image: adamTailWind,
  },
  {
    tag: "Golang",
    brief:"The new kid on the block.",
    highlight: "Powerful.",
    hook: "Simplicity meets speed.",
    image: adamGopher,
    text: 'Part-time Go gopher, full-time problem solver. When it needs to be fast and simple go for Go.',
  },
  {
    image: adamDotNet,
    tag: "C# / .Net 9",
    brief: "Enterprise ready.",
    highlight:"Proven.", 
    hook: "Reliablility and tooling.",
    text: 'C#/.NET Architect - let\'s talk APIs and queues, dependancy injection and middlewares.',
  },

];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center align-middle">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <HeroSlide image={slide.image} text={slide.text} tag={slide.tag} brief={slide.brief} highlight={slide.highlight} hook={slide.hook} />
        </div>
      ))}
    </div>
  );
}

export default HeroCarousel;
