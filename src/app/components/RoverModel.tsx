import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import roverBg from '../../imports/rover_planet_bg.png';

export function RoverModel() {
  return (
    <section id="rover" className="scroll-mt-32 relative">
      {/* Background image - rover on planet */}
      <div className="absolute inset-0 -mx-4 sm:-mx-6 overflow-hidden rounded-lg">
        <img 
          src={roverBg} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060d1f]/70 via-transparent to-[#060d1f]/90"></div>
      </div>

      <div className="relative flex flex-col md:flex-row gap-12 items-center border-2 border-[#f5f0e1] p-6 md:p-10 cosmic-glass">
        
        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-6">
          <h2 className="font-press-start text-2xl md:text-3xl uppercase text-white mb-6">
            &gt; Project_ARES
          </h2>
          <p className="text-gray-300 md:text-3xl leading-relaxed mb-6">
            Meet our flagship rover model, engineered for extreme terrains and semi-autonomous navigation. 
            Equipped with advanced sensor arrays, a custom 6-wheel rocker-bogie suspension, and an onboard AI processing unit.
          </p>
          
          <div className="grid grid-cols-2 gap-4 font-press-start text-xs md:text-sm text-gray-400">
            <div className="border border-[#f5f0e1]/40 p-4 bg-white/5">
              <span className="text-white block mb-2">Drive</span>
              6WD System
            </div>
            <div className="border border-[#f5f0e1]/40 p-4 bg-white/5">
              <span className="text-white block mb-2">Comms</span>
              2.4GHz / 5.8GHz
            </div>
            <div className="border border-[#f5f0e1]/40 p-4 bg-white/5">
              <span className="text-white block mb-2">Power</span>
              24V LiPo
            </div>
            <div className="border border-[#f5f0e1]/40 p-4 bg-white/5">
              <span className="text-white block mb-2">Brain</span>
              Jetson Nano
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="border-2 border-[#f5f0e1] p-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJzJTIwcm92ZXJ8ZW58MXx8fHwxNzc5NTIwMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="TARS Rover Model"
              className="w-full h-auto object-cover contrast-125 group-hover:scale-105 transition-all duration-500 image-pixelated"
            />
            {/* HUD Overlay elements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/50 z-20"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/50 z-20"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/50 z-20"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/50 z-20"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
