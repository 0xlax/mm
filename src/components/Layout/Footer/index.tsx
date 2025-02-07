"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl mb-2">admin@muggedmoments.com</p>
          <p className="text-sm sm:text-base mb-2">India: +919532885401, +919532651596</p>
          <p className="text-sm sm:text-base mb-2">Australia: +66930596313</p>
          <p className="text-sm sm:text-base mb-4">USA, Australia, India</p>
          <p className="text-xs sm:text-sm">Powered by: MyOoumph Networks Pvt. Ltd.</p>
          <p className="text-xs sm:text-sm">Co-powered by: Digidubs IT Solutions Pvt. Ltd.</p>
        </div>
        <div className="mt-6 md:mt-0 md:ml-8">
          <Image src="/images/logo/logo.jpg" alt="Mugged Moments Logo" width={150} height={50} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;