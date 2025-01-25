import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your </span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how i can help you
          achieve your goals
        </p>
        <a href="mailto:mohd5289@yahoo.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      {/* New section for social media buttons */}
      <div className="flex flex-col items-center mt-5">
        <Image
          src="/favicon.ico" // Use the imported image
          alt="Osuolale"
          width={38}
          height={38} // Provide an appropriate alt text
          className="w-32 h-32 rounded-full object-cover mb-4" // Adjust size and styling as needed
        />
        <p className="text-white-200 my-5 text-center">Connect with me on:</p>
        <div className="flex space-x-4">
          <a
            href="https://wa.me/+2347034233935"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="WhatsApp"
              icon={<FaWhatsapp />}
              position="left"
              otherClasses="bg-green-500" // Optional: Add custom classes for styling
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-osuolale-ibrahim-704aa2ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="LinkedIn"
              icon={<FaLinkedin />}
              position="left"
              otherClasses="bg-blue-700" // Optional: Add custom classes for styling
            />
          </a>
          <a
            href="https://www.facebook.com/muhammedibrahim01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Facebook"
              icon={<FaFacebook />}
              position="left"
              otherClasses="bg-blue-600" // Optional: Add custom classes for styling
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        {" "}
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Osuolale
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link}>
                {" "}
                <img
                  src={profile.img}
                  alt={`${profile.id}`}
                  width={20}
                  height={20}
                />{" "}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
