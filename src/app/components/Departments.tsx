import React from 'react';

const DEPARTMENTS = [
  {
    id: "01",
    name: "Mechanical",
    desc: "Architects of the physical form. Responsible for CAD modeling, structural analysis, materials selection, and manufacturing the robust chassis and manipulator arms.",
    icon: "⚙️"
  },
  {
    id: "02",
    name: "Electronics",
    desc: "The nervous system. Focused on PCB design, power distribution, microcontrollers, motor drivers, and integrating complex sensor networks.",
    icon: "⚡"
  },
  {
    id: "03",
    name: "Software & AI",
    desc: "The brain. Developing autonomous navigation algorithms, computer vision pipelines, ROS integration, and machine learning models for terrain analysis.",
    icon: "🧠"
  },
  {
    id: "04",
    name: "Management",
    desc: "The mission controllers. Handling sponsorships, public relations, project timelines, logistics, and ensuring the team operates efficiently.",
    icon: "📊"
  }
];

export function Departments() {
  return (
    <section id="departments" className="scroll-mt-32">
      <h2 className="font-press-start text-2xl md:text-3xl mb-12 uppercase text-white text-center">
        -- Departments --
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            className="border-2 border-[#f5f0e1] p-6 md:p-8 hover:bg-[#f5f0e1] hover:text-black transition-colors duration-300 group cursor-default"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">{dept.icon}</span>
              <span className="font-press-start text-xl text-gray-500 group-hover:text-gray-300">
                {dept.id}
              </span>
            </div>

            <h3 className="font-press-start text-lg md:text-xl uppercase mb-4 tracking-wide">
              {dept.name}
            </h3>

            <p className="md:text-2xl leading-relaxed text-gray-400 group-hover:text-gray-800">
              {dept.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
