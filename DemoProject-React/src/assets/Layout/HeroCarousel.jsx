import adamNormal from "../images/adam-github.png"
import adamGopher from "../images/adam-gopher.png"
import adamDotNet from "../images/adam-dotnet.png"
import adamTailWind from "../images/adam-tailwind.png"
import adamReactLogo from "../images/react-logo-light.svg"
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
    classes: "rounded",
    order: 1,
  },
  {
    tag: "Tailwind CSS",
    brief: "Style, everywhere.",
    highlight: "Transferable.",
    hook: "Flexible and powerful.",
    text: 'Utility-first UI\'s built around Tailwind allowing newcomers to jump right in.',
    image: adamTailWind,
    order: 3,
  },
  {
    tag: "Golang",
    brief:"Simple, reliable, efficient.",
    highlight: "Powerful.",
    hook: "Simplicity meets speed.",
    image: adamGopher,
    text: 'Part-time Go gopher, full-time problem solver. When it needs to be fast and simple go for Go.',
    order: 4,
  },
  {
    image: adamDotNet,
    tag: "C# / .Net 9",
    brief: "Enterprise ready.",
    highlight:"Proven.", 
    hook: "Reliablility and tooling.",
    text: 'C#/.NET Architect - let\'s talk APIs and queues, dependancy injection and middlewares.',
    order: 2,
  },
  {
    tag: "React 19",
    brief: "Component-driven",
    highlight: "Scalable",
    hook: "Elegant, stateful UI.",
    text: "React powers dynamic interfaces by putting state at the heart of your UI.",
    image: adamReactLogo,   
    classes: "rounded",
    order: 5,
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

  const orderedSlides = slides.sort((a, b) => a.order - b.order);

  return (
    <div className="relative w-full h-screen flex justify-center align-middle">
      {orderedSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <HeroSlide {...slide} />
        </div>
      ))}
    </div>
  );
}

export default HeroCarousel;
