"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
export function HomeBackground() {
  return (
    <div className="h-[50rem] bg-transparent w-full rounded-md relative flex flex-col items-center justify-center antialiased font-serif py-20 pt-24 px-6 md:px-12 lg:px-24 mt-20 lg:mt-0">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Track All Your Expenses.<br />
            <span className=" text-[#8EDB05]">Smarter. Simpler.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl">
          Xpensease is a smart automatic expense tracking app that helps users manage, split, and settle personal and group expenses with ease. From reminders to real-time dashboards, Xpensease simplifies money matters in everyday life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.Xpensease.xpensease"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-700 text-gray-200 hover:bg-gray-800 rounded-md text-lg font-medium transition z-40"
            >
              Download App
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
        <video
        src="/animation2.mp4" autoPlay loop muted playsInline
        className="rounded-xl shadow-lg w-full max-w-[400px] h-auto z-50" />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
