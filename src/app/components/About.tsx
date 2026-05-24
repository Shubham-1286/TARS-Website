import React from 'react';

export function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="border-2 border-[#f5f0e1] p-8 md:p-12 relative cosmic-glass shadow-[0_0_60px_rgba(88,28,135,0.08)]">
        {/* Pixel corners decoration */}
        <div className="absolute top-0 left-0 w-4 h-4 bg-[#f5f0e1] -translate-x-4 -translate-y-4"></div>
        <div className="absolute top-0 right-0 w-4 h-4 bg-[#f5f0e1] translate-x-4 -translate-y-4"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#f5f0e1] -translate-x-4 translate-y-4"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#f5f0e1] translate-x-4 translate-y-4"></div>

        <h2 className="font-press-start text-2xl md:text-3xl mb-8 uppercase text-white border-b-2 border-[#f5f0e1]/50 pb-4 inline-block">
          &gt; About_Us
        </h2>
        
        <div className="space-y-6 text-gray-300 leading-relaxed md:text-3xl">
          <p>
            Welcome to <span className="text-white font-bold">TARS (Technical Automation and Robotics)</span>. 
            We are a premier student-led committee dedicated to pushing the boundaries of autonomous systems, 
            robotics engineering, and artificial intelligence.
          </p>
          <p>
            Established to bridge the gap between theoretical knowledge and practical execution, we build 
            everything from autonomous rovers to automated smart systems. Our team operates like a well-oiled machine, 
            transforming lines of code and raw metal into functional, intelligent machines.
          </p>
          <p className="text-white/60 animate-pulse">
            SYSTEM STATUS: ONLINE AND READY.
          </p>
        </div>
      </div>
    </section>
  );
}
