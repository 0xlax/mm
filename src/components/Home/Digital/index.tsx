"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Digital = () => {
  return (
    <section className="relative bg-cover bg-center dark:bg-darkmode overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md rounded-3xl bg-primary bg-[url('/images/hero/candid.jpg')] bg-no-repeat bg-right-top bg-cover pb-60 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="pt-24 lg:pl-24">
            <h4 className="text-65 sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
              Who are we
            </h4>
            <h3 className="text-18 font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5">
              With a passion for artistry and a love for storytelling, we embarked on a photography journey. Our mission is to freeze the essence of life's most beautiful moments in timeless frames.
            </h3>

            {/* Book a Call Button */}
            <div className="text-center lg:text-start">
              <Link
                href="#"
                className="bg-primary text-white hover:bg-blue-700 border border-primary px-6 py-3 rounded-lg mt-8 transition duration-300"
                onClick={() => {
                  // You can replace this with your "Book a Call" functionality
                  alert("Book a Call clicked!");
                }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 -right-20">
          {/* Add image if necessary */}
          {/* <Image src="/images/digital/girldoodle.svg" alt="doodle" width={815} height={691} /> */}
        </div>
      </div>
    </section>
  );
};

export default Digital;
