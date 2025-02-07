"use client";
import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <section className="relative dark:bg-darkmode py-16 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
            Crafting Moments, Capturing Memories.
          </h3>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-300 lg:mr-48">
            Your Vision, Our Expertise
          </h3>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-400 lg:-mr-32">
            Every Event, Perfectly Planned.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Work;
