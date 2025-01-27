import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <section className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your </span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:mohd5289@yahoo.com" aria-label="Send me an email">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </section>

      {/* Social Media Section */}
      <section className="flex flex-col items-center mt-5">
        <Image
          src="/favicon.ico" // Use the imported image
          alt="Osuolale's profile picture"
          width={38}
          height={38}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <p className="text-white-200 my-2 text-center">Connect with me on:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/+2347034233935"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with me on WhatsApp"
          >
            <MagicButton
              title="WhatsApp"
              icon={<FaWhatsapp />}
              position="left"
              otherClasses="bg-green-500"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-osuolale-ibrahim-704aa2ab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my LinkedIn profile"
          >
            <MagicButton
              title="LinkedIn"
              icon={<FaLinkedin />}
              position="left"
              otherClasses="bg-blue-700"
            />
          </a>
          <a
            href="https://www.facebook.com/muhammedibrahim01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my Facebook profile"
          >
            <MagicButton
              title="Facebook"
              icon={<FaFacebook />}
              position="left"
              otherClasses="bg-blue-600"
            />
          </a>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Osuolale
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <article
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} aria-label={`Visit ${profile.id} profile`}>
                <img
                  src={profile.img}
                  alt={`Profile image for ${profile.id}`}
                  width={20}
                  height={20}
                />
              </a>
            </article>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
