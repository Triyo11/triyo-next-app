"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "animate.css";

export default function Home() {
  const router = useRouter();
  const handleDirectLastProjectPage = () => router.push("/project");
  const handleDirectConnect = () => router.push("/contact");

  useEffect(() => {
    const noSelectElements = document.querySelectorAll(".no-select");

    noSelectElements.forEach((element) => {
      (element as HTMLElement).style.userSelect = "none";
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-screen m-0 font-asap no-select">
        <div className="flex md:flex-row justify-center flex-col items-center pb-16">
          <Image
            className="photo-small"
            width={180}
            height={228}
            alt="personal-small-screen"
            src="/assets/foto-personal-web.png"
          />
        </div>
        <div className="flex flex-row md:px-40 px-10">
          <Image
            className="w-[27rem] h-[30rem] photo-big"
            width={432}
            height={480}
            alt="personal-medium-screen"
            src="/assets/foto-personal-web.png"
          />
          <div className="flex flex-col justify-center w-full animate__animated animate__fadeIn">
            <h2
              className="font-semibold text-gray-900"
              style={{
                fontSize: "clamp(1.25rem, 1.118rem + 0.563vw, 1.625rem)",
              }}
            >
              Welcome,
            </h2>
            <p
              className="text-gray-800 text-justify pb-3"
              style={{
                fontSize: "clamp(0.875rem, 0.655rem + 0.939vw, 1.5rem)",
              }}
            >
              My expertise lies in front-end technologies, creating seamless and
              responsive user interfaces. While I have basic knowledge of
              back-end, my focus remains on delivering exceptional front-end
              experiences.
            </p>
            <div
              className="flex md:pb-0 pb-6 md:text-left text-center md:pt-[3rem] pt-5 gap-16 md:justify-end justify-center"
              style={{
                fontSize: "clamp(0.875rem, 0.655rem + 0.939vw, 1.5rem)",
              }}
            >
              <button
                onClick={() => setTimeout(handleDirectLastProjectPage, 500)}
                className="text-gray-700 blur-0 hover:text-orange-500 hover:blur-[1px] transition-all ease-in-out duration-300"
              >
                Last Projects
              </button>
              <button
                onClick={() => setTimeout(handleDirectConnect, 500)}
                className="text-gray-700 blur-0 hover:text-orange-500 hover:blur-[1px] transition-all ease-in-out duration-300"
              >
                Let&apos;s connect
              </button>
            </div>
            {/* <NavLink
              to={"/"}
              className="text-gray-700 hover:text-orange-500 transition-all underline underline-offset-2 md:text-xl text-sm"
            >
              See more about me
            </NavLink> */}
          </div>
        </div>
        {/* create a footer that contains "made with ❤️ by Triyo" */}
        <div className="flex justify-center items-center w-full h-20 fixed bottom-0">
          <p className="text-gray-700">Made with ❤️ by Triyo</p>
        </div>
      </div>
    </div>
  );
}
