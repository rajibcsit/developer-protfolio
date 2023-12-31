import React from "react";
import GithubIcon from "@/public/images/svg/github-icon.svg";
import LinkedinIcon from "@/public/images/svg/linkedin-icon.svg";
import FacebookIcon from "@/public/images/svg/fb.svg";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="bg-[#ffff] page_area pb-12 lg:pb-18 sm:pb-6  pt-12 lg:pt-18 sm:pt-6">
        <div className="md:grid md:grid-cols-2 gap-8 items-center  px-4 xl:gap-16 sm:py-4 xl:px-16">
          <Image src="/images/about-image.png" width={500} height={500} alt="about-img" />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-xl lg:text-4xl sm:text-base font-bold  lg:mt-4 sm:mt-2 mb-8 md:mb-12">
              About Me
            </h2>
            <p className="text-sm lg:text-base">
              Hi, I am Rajib Mia Rahid. I have been working as a Web Developer for 1 years. Mainly I
              develop applications using PHP programming language and Laravel framework . I also use
              JavaScript and .Vue js,React js, and Next js this time learning for the Frontend. I
              have good knowledge of web .I want to work with Artificial IntelligenceEspec Machine
              Learning in the future. Please, keep me in your prayers.
            </p>
            <div className="justify-start mt-8">
              <h2 className="text-xl font-bold  mb-4">Follow me on:</h2>
              <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/rajibcsit" target="_blank" rel="noreferrer">
                  <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rajibmiarahid/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
                <Link
                  href="https://www.facebook.com/rajibmia.rahid51"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1"
                >
                  <Image src={FacebookIcon} alt="Facebook Icon" width={80} height={80} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
