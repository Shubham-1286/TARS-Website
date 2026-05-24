import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import tarsLogo from '../../imports/TARS_LOGO.png';

export function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-10">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-white blur-[50px] opacity-20 rounded-full animate-pulse"></div>
        <div className="bg-white rounded-full p-4 inline-block shadow-[0_0_20px_rgba(255,255,255,0.8)] overflow-hidden">
          <ImageWithFallback
            src={tarsLogo}
            alt="TARS Logo"
            className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full image-pixelated"
          />
        </div>
      </div>

      <h1 className="font-press-start text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight uppercase">
        T.A.R.S.
      </h1>
      <p className="font-press-start text-sm md:text-lg text-gray-400 mb-10 tracking-widest max-w-2xl mx-auto leading-relaxed">
        Technical Automation and Robotics Society
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        <a
          href="#about"
          className="inline-block bg-white text-black font-press-start text-xs md:text-sm px-8 py-4 border-4 border-white hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
        >
          Initialize
        </a>
        <a
          href="#rover"
          className="inline-block bg-black text-white font-press-start text-xs md:text-sm px-8 py-4 border-4 border-white hover:bg-white hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
        >
          View Rover
        </a>
      </div>
    </section>
  );
}
