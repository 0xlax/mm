"use client";
import React, { useState } from "react";
import Image from "next/image";

const Dedicated = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const sections = [
    {
      imageSrc: "/images/dedicated/man.svg",
      quote: "\u201cBest photography ever, We loved it!\u201d",
      description:
        "Choosing mugged moments for our wedding was the best decision we made! Every moment was captured beautifully, from the subtle glances to the grand gestures. The creativity they brought made our special day unforgettable. Our wedding album is truly a masterpiece.",
      author: "Rachana",
    },
    {
      imageSrc: "/images/dedicated/man.svg",
      quote: "\u201cCaptured every beautiful detail!\u201d",
      description:
        "Mugged moments turned our engagement into a visual story that we'll cherish forever. Their attention to detail and ability to capture raw emotions made our photos truly special.",
      author: "Arjun & Sneha",
    },
    {
      imageSrc: "/images/dedicated/man.svg",
      quote: "\u201cPerfect family portraits!\u201d",
      description:
        "Our family photoshoot with mugged moments was an incredible experience. They made everyone feel at ease, and the results were beyond our expectations.",
      author: "The Iyer Family",
    },
  ];

  const nextSection = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
      setTransitioning(false);
    }, 300); // Duration of the transition
  };

  return (
    <section className="relative bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative">
          <Image
            src="/images/dedicated/spiral.svg"
            height={272}
            width={686}
            alt="spiral-design"
            className="absolute left-0 top-0 hidden lg:block -z-10"
          />
          {/* Left Column */}
          <div className={`col-span-12 lg:col-span-6 mb-8 lg:mb-0 transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src={sections[currentSection].imageSrc}
              alt="section-image"
              width={416}
              height={530}
              className="mx-auto lg:mx-0"
            />
          </div>

          {/* Right Column */}
          <div className={`col-span-12 lg:col-span-6 text-center lg:text-left transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="relative">
              <Image
                src="/images/dedicated/comma.svg"
                alt="comma-image"
                width={200}
                height={106}
                className="absolute -top-10 sm:-top-16 -left-4 sm:-left-32 hidden lg:block"
              />
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight">
              {sections[currentSection].quote}
            </p>
            <p className="font-medium text-gray-600 dark:text-White/55 text-lg sm:text-xl md:text-2xl mt-5">
              {sections[currentSection].description}
            </p>
            <p className="text-xl sm:text-2xl font-semibold mt-8 lg:mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-16 sm:before:w-24 before:left-0 before:bottom-1/2">
              {sections[currentSection].author}
            </p>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSection}
            className="absolute right-4 bottom-4 bg-black text-white p-2 sm:p-3 rounded-full hover:bg-gray-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Book a Call Now Button */}
        <div className="text-center mt-8">
          <button
            className="bg-blue-600 text-white text-lg sm:text-xl px-6 py-3 rounded-full hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Book a Call Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dedicated;