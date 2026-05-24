import React from 'react';

export function VisionMission() {
  return (
    <section id="vision" className="scroll-mt-32">
      <div className="grid md:grid-cols-2 gap-12 md:gap-8">
        {/* Vision Card */}
        <div className="border-2 border-[#f5f0e1] p-8 relative group hover:-translate-y-2 transition-transform duration-300 cosmic-glass">
          <div className="absolute top-0 left-4 px-2 -translate-y-1/2 bg-[#060d1f]">
            <h3 className="font-press-start text-xl uppercase text-white tracking-widest">
              Vision
            </h3>
          </div>
          <div className="mt-6 text-gray-300 md:text-2xl leading-relaxed">
            To be at the forefront of robotic innovation, cultivating a generation of engineers 
            who seamlessly blend mechanics, electronics, and software to solve complex global challenges 
            through automation.
          </div>
        </div>

        {/* Mission Card */}
        <div className="border-2 border-[#f5f0e1] p-8 relative group hover:-translate-y-2 transition-transform duration-300 cosmic-glass">
          <div className="absolute top-0 left-4 px-2 -translate-y-1/2 bg-[#060d1f]">
            <h3 className="font-press-start text-xl uppercase text-white tracking-widest">
              Mission
            </h3>
          </div>
          <div className="mt-6 text-gray-300 md:text-2xl leading-relaxed">
            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-4">
                <span className="font-press-start text-sm text-white mt-2">&gt;</span>
                <span>Design and deploy functional, state-of-the-art robotic systems.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-press-start text-sm text-white mt-2">&gt;</span>
                <span>Foster a culture of hands-on learning and technical excellence.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-press-start text-sm text-white mt-2">&gt;</span>
                <span>Compete globally in rover and automation challenges.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
