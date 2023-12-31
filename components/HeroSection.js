"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 hero-section">
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className=" mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-[#30BEAD]">Hello, I&apos;m</span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Rajib Mia Rahid",
                  1000,
                  "Software Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Front-End Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-base sm:text-lg mb-6 lg:text-lg">
              I&apos;m Rajib Mia Rahid, I&apos;m a Web Developer. Currently, I&apos;m working on
              TwiteSoft with Front-End Developer .
            </p>
            <div>
              <Link
                href="https://drive.google.com/file/d/1eeKGTZRRpLseiEI7drdL93FwGG18I1mT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-4 lg:px-6 sm:px-3 inline-block py-3  sm:w-fit rounded-full mr-4 bg-[#30BEAD] hover:bg-slate-800 text-white"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#EAF5F2] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/rahid.png"
                alt="hero image"
                className="hero_image sm:w-[100px] sm:h-[80px] lg:w-[250px] lg:h-[250px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={250}
                height={250}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
