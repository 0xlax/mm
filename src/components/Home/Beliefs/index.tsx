"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    title: "Wedding Photography",
    description: "From candid moments to romantic portraits, we capture the magic of your special day. Our personalized approach ensures your love story shines through in every image..",
    buttonText: "Request Portfolio",
    image: "/images/beliefs/wedding.jpg"
  },
  {
    title: "Model Photoshoot",
    description: "Gather your loved ones for an unforgettable photoshoot. We create heartwarming family portraits that reflect the unique bond you share.",
    buttonText: "Request Portfolio",
    image: "/images/beliefs/model.jpg"
  },
  {
    title: "Newborn & Maternity",
    description: "Celebrate the joy of new beginnings with our delicate and artistic newborn and maternity photography. We tenderly capture the beauty of this remarkable phase in life.",
    buttonText: "Request Portfolio",
    image: "/images/beliefs/maternity.jpg"
  },
  {
    title: "Corporate Events",
    description: "Impress your clients and elevate your brand image with our professional corporate event photography. We ensure every important detail is impeccably captured.",
    buttonText: "Request Portfolio",
    image: "/images/beliefs/corp.jpg"
  },
  {
    title: "Family Portraits",
    description: "Gather your loved ones for an unforgettable photoshoot. We create heartwarming family portraits that reflect the unique bond you share.",
    buttonText: "Request Portfolio",
    image: "/images/beliefs/family.jpg"
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  centerMode: true,
  centerPadding: "20%",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: "10%",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "5%",
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: "0",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Beliefs = () => {
  return (
    <section className="relative bg-cover bg-center dark:bg-darkmode overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div
                className={`relative w-full h-80 sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl bg-cover bg-center transition-opacity duration-500 flex flex-col justify-between p-4 sm:p-6 md:p-8`}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="bg-black bg-opacity-50 p-3 sm:p-4 md:p-5 rounded-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-center sm:text-start">
                    {card.title}
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 text-center sm:text-start">
                    {card.description}
                  </p>
                </div>
                <div className="text-center sm:text-start">
                  <button
                    className="text-sm sm:text-base md:text-lg py-2 sm:py-3 px-6 sm:px-8 font-semibold rounded-full bg-primary border border-primary text-white hover:bg-darkmode hover:border-darkmode transition"
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Beliefs;
