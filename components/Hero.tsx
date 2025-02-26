import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Head from "next/head";
const Hero = () => {
  return (
    <>
      <Head>
        <title>
          Ibrahim Osuolale Muhammed | Next.js & Android Kotlin Developer
        </title>
        <meta
          name="description"
          content="Transforming concepts into seamless digital experiences with Next.js and Android Kotlin development. Explore my portfolio and discover my work."
        />
        <meta
          property="og:title"
          content="Ibrahim Osuolale Muhammed | Next.js & Android Kotlin Developer"
        />
        <meta
          property="og:description"
          content="Transforming concepts into seamless digital experiences with Next.js and Android Kotlin development. Based in Kaduna, Nigeria."
        />
        <meta
          property="og:image"
          content="https://example.com/hero-image.jpg"
        />
        <meta property="og:url" content="https://example.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="pb-[550px] pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="-top-28 -left-80 md:-left-32 md:-top-20 h-screen"
            fill="blue"
          />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="flex justify-center my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
              <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
                Dynamic Magic with Next.js and Android Studio
              </h2>
              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="Transform Concepts into Seamless Digital Experiences"
              />
              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi I&apos;m Ibrahim Osuolale Muhammed, a Next.js and Android
                Kotlin Developer based in Kaduna, Nigeria
              </p>
              <a href="#about">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
