"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1 bg-white"
      id="main-banner"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10">
        <Image
          src="/images/hero/bg1.jpg"
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="opacity-100 transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>
      <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center gap-8">
          <motion.div 
            className="md:col-span-5 text-center md:text-left"
            initial={leftAnimation.initial}
            animate={leftAnimation.animate}
            transition={{ ...leftAnimation.transition, ease: "easeOut" }}
          >
            {/* <div className="py-2 px-5 bg-primary/15 rounded-full w-fit mx-auto md:mx-0">
              <p className="text-primary text-lg font-bold tracking-wider">DESIGN AGENCY</p>
            </div> */}
            <div className="relative px-6 md:px-12 py-16 md:py-24 bg-black/30 backdrop-blur-sm rounded-2xl max-w-5xl mx-auto text-center md:text-left border border-white/10 shadow-2xl">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg tracking-tight">
                Capturing Timeless Moments,<br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Forever Preserved</span>
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md max-w-3xl mx-auto md:mx-0 font-light">
                Let us tell your story through our lens, creating cherished memories to last a lifetime.
              </p>

              {/* Call-to-Action Button */}
              <motion.button 
                onClick={() => alert("Schedule a 15-Minute Session clicked!")}
                className="mt-8 md:mt-10 bg-primary text-white text-base sm:text-lg md:text-xl font-semibold py-4 sm:py-5 px-8 sm:px-12 rounded-full shadow-xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a 15-Minute Session!
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-7 flex justify-center"
            initial={rightAnimation.initial}
            animate={rightAnimation.animate}
            transition={rightAnimation.transition}
          >
            {/* <Image
              src="/images/hero/banner-image.png"
              alt="banner image"
              width={600}
              height={600}
              className="w-full rounded-2xl shadow-2xl"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
