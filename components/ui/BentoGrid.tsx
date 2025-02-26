"use client";
import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/utils/cn";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";
import Head from "next/head";
import Image from "next/image";

const BackgroundGradientAnimation = dynamic(
  async () =>
    (await import("./BackgroundGradientAnimation")).BackgroundGradientAnimation,
  { ssr: false }
);

// const GlobeDemo = dynamic(async () => (await import("./GridGlobe")).GlobeDemo, {
//   ssr: false,
// });
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const MagicButton = dynamic(() => import("./MagicButton"), { ssr: false });

const skills = [
  "React.js",
  "Next.js",
  "Typescript",
  "Android Studio",
  "Kotlin",
  "Laravel",
  "MongoDB",
  "MySQL",
  "Spring Boot",
  "Firebase",
  "Appwrite",
  "FastApi",
];
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    itemListElement: skills.map((skill, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: skill,
    })),
  };
  return (
    <>
      <Head>
        <title>
          Top Web Development Skills | React, Next.js, Kotlin & More
        </title>
        <meta
          name="description"
          content="A showcase of skills and technologies like React, Next.js, Kotlin, and more."
        />
        <meta
          name="keywords"
          content="React, Next.js, Kotlin, Laravel, Firebase, Appwrite, FastApi, MongoDB"
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("mohd5289@yahoo.com");
      setCopied(true);
    }
  };
  // const MemoizedGlobeDemo = useMemo(() => {
  //   return id === 2 ? <GlobeDemo /> : null;
  // }, [id]);

  // Memoize Lottie animation to prevent unnecessary re-renders
  const MemoizedLottie = useMemo(() => {
    return id === 6 ? (
      <Lottie
        loop={copied}
        autoplay={copied}
        animationData={animationData}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    ) : null;
  }, [copied, id]);
  return (
    <article
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg,rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              fill // Automatically sets width and height responsively
              priority={id === 1}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              fill // Automatically sets width and height responsively
              priority={id === 1}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <header>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
          </header>

          {/* {id === 2 && <GlobeDemo />} */}
          {/* {MemoizedGlobeDemo} */}
          {id === 3 && (
            <div className="relative flex flex-col justify-between gap-4 h-full">
              <div className="flex gap-4 lg:gap-8 w-full mx-auto justify-center">
                <div className="flex flex-col gap-4 lg:gap-8">
                  {[
                    "React.js",
                    "Next.js",
                    "Typescript",
                    "Android Studio",
                    "Kotlin",
                  ].map((item) => (
                    <span
                      key={item}
                      className="py-4 px-3 lg:px-5 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] flex items-center justify-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-4 lg:gap-8">
                  {[
                    "Laravel",
                    "MongoDB",
                    "MySQL",
                    "Spring Boot",
                    "Firebase",
                    "Appwrite",
                    "FastApi",
                  ].map((item) => (
                    <span
                      key={item}
                      className="py-4 px-3 lg:px-5 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] flex items-center justify-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">{MemoizedLottie}</div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
