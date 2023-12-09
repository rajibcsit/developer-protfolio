import React from "react";
import mailSvg from "@/public/images/svg/mail.svg";
import callSvg from "@/public/images/svg/call.svg";
import addressSvg from "@/public/images/svg/address.svg";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="contact_area pt-24 pb-24">
      <div className="container grid md:grid-cols-2 gap-4 mx-auto px-12 py-4">
        <h5 className="text-xl font-bold my-2">Let&apos;s Talk about your Project -</h5>
        <p className="text-sm lg:text-base mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you
          have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <ul className="list-item space-y-6 pt-8">
            <li className="flex">
              <div className="flex-none mr-6">
                <div className="">
                  <Image src={mailSvg} alt="mail" width={56} height={56} />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="lg:text-xl text-lg mb-1">Email-Us :</h4>
                <div>rajibcsit1@gmail.com</div>
              </div>
            </li>
            <li className="flex">
              <div className="flex-none mr-6">
                <div className="">
                  <Image src={callSvg} alt="Call-icon" width={56} height={56} />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="lg:text-xl text-lg mb-1">Call Us:</h4>
                <div>+8801918111103</div>
              </div>
            </li>
            <li className="flex">
              <div className="flex-none mr-6">
                <div className="">
                  <Image src={addressSvg} alt="Call-icon" width={56} height={56} />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="lg:text-xl text-lg mb-1">Address:</h4>
                <div>H# 469, R# 07, Avenue# 6, Mirpur-12 DOHS, Dhaka - 1216</div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <form className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="email" className=" block mb-2 lg:text-xl text-lg ">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#ffffff] text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 lg:text-xl text-lg">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#ffffff] text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 lg:text-xl text-lg">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#ffffff] text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#30BEAD]  hover:bg-slate-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
