"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Digital = () => {
  return (
    <section className="relative bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md rounded-3xl bg-primary bg-[url('/images/hero/candid.jpg')] bg-no-repeat bg-right-top bg-cover pb-60 relative">
        {/* Dark overlay - visible only on desktop */}
        <div className="absolute inset-0 bg-black/40 rounded-3xl lg:block hidden"></div>
        
        {/* Mobile gradient overlay - for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl lg:hidden"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          {/* Desktop Layout */}
          <div className="hidden lg:block pt-24 lg:pl-24">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg inline-block max-w-2xl">
              <h4 className="text-65 sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start drop-shadow-lg">
                Who are we
              </h4>
              <h3 className="text-18 font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5 drop-shadow-md">
                With a passion for artistry and a love for storytelling, we embarked on a photography journey. Our mission is to freeze the essence of life's most beautiful moments in timeless frames.
              </h3>

              {/* Book a Call Button */}
              <div className="text-center lg:text-start">
                <Link
                  href="#"
                  className="bg-primary text-white hover:bg-blue-700 border border-primary px-6 py-3 rounded-lg mt-8 transition duration-300 inline-block"
                  onClick={() => {
                    alert("Book a Call clicked!");
                  }}
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col justify-end min-h-[500px] p-6">
            <div className="space-y-4">
              <h4 className="text-4xl sm:text-5xl font-bold text-white leading-tight text-center drop-shadow-xl">
                Who are we
              </h4>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <h3 className="text-base sm:text-lg font-normal text-white tracking-wide text-center leading-relaxed drop-shadow-lg">
                  With a passion for artistry and a love for storytelling, we embarked on a photography journey. Our mission is to freeze the essence of life's most beautiful moments in timeless frames.
                </h3>
              </div>
              {/* Mobile Book a Call Button */}
              <div className="text-center pt-4">
                <Link
                  href="#"
                  className="bg-primary text-white hover:bg-blue-700 border border-primary px-6 py-3 rounded-lg transition duration-300 inline-block shadow-xl"
                  onClick={() => {
                    alert("Book a Call clicked!");
                  }}
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 -right-20 z-20">
          {/* Add image if necessary */}
          {/* <Image src="/images/digital/girldoodle.svg" alt="doodle" width={815} height={691} /> */}
        </div>
      </div>
    </section>
  );
};

export default Digital;
