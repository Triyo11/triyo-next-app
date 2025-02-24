"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroButton from "@/components/micro-components/HeroButton";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "animate.css";

export default function Home() {
  const router = useRouter();
  const handleDirectLastProjectPage = () => router.push("/project");
  const handleDirectConnect = () => router.push("/contact");

  const MotionImage = motion.create(Image);

  useEffect(() => {
    const noSelectElements = document.querySelectorAll(".no-select");

    noSelectElements.forEach((element) => {
      (element as HTMLElement).style.userSelect = "none";
    });
  }, []);

  return (
    <div className="flex flex-col justify-between w-full h-screen font-asap no-select">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-screen m-0">
        <div className="flex md:flex-row justify-center flex-col items-center pb-16">
          <MotionImage
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="photo-small"
            width={180}
            height={228}
            alt="personal-small-screen"
            src="/assets/foto-personal-web.png"
          />
        </div>
        <div className="flex flex-row md:px-40 px-10">
          <div className="relative">
            <MotionImage
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-[30rem] h-[30rem] photo-big"
              width={432}
              height={480}
              alt="personal-medium-screen"
              src="/assets/foto-personal-web.png"
            />
          </div>
          <div className="flex flex-col justify-center w-full animate__animated animate__fadeIn">
            <motion.h2
              initial={{ transform: "translateY(-50%)", opacity: 0 }}
              animate={{ transform: "translateY(0%)", opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="font-semibold text-gray-900"
              style={{
                fontSize: "clamp(1.25rem, 1.118rem + 0.563vw, 1.625rem)",
              }}
            >
              Welcome,
            </motion.h2>
            <motion.p
              initial={{ transform: "translateY(-50%)", opacity: 0 }}
              animate={{ transform: "translateY(0%)", opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="text-gray-800 text-justify pb-3"
              style={{
                fontSize: "clamp(0.875rem, 0.655rem + 0.939vw, 1.5rem)",
              }}
            >
              My expertise lies in front-end technologies, creating seamless and
              responsive user interfaces. While I have basic knowledge of
              back-end, my focus remains on delivering exceptional front-end
              experiences.
            </motion.p>
            <div
              className="flex md:pb-0 pb-6 md:text-left text-center md:pt-[3rem] pt-5 gap-16 md:justify-end justify-center"
              style={{
                fontSize: "clamp(0.875rem, 0.655rem + 0.939vw, 1.5rem)",
              }}
            >
              <HeroButton
                onClick={() => setTimeout(handleDirectLastProjectPage, 500)}
              >
                Last Projects
              </HeroButton>
              <HeroButton onClick={() => setTimeout(handleDirectConnect, 500)}>
                Let&apos;s connect
              </HeroButton>
            </div>
            {/* <NavLink
              to={"/"}
              className="text-gray-700 hover:text-orange-500 transition-all underline underline-offset-2 md:text-xl text-sm"
            >
              See more about me
            </NavLink> */}
          </div>
        </div>
      </div>
      {/* create a footer that contains "made with ❤️ by Triyo" */}
      <div className="flex justify-center items-center w-full h-20">
        <p className="text-gray-700">Made with ❤️ by Triyo</p>
      </div>
    </div>
  );
}
