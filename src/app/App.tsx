import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { RoverModel } from './components/RoverModel';
import { Departments } from './components/Departments';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="starfield nebula-glow bg-[#060d1f] text-white min-h-screen font-vt323 text-2xl selection:bg-white selection:text-black scroll-smooth">
      {/* Nebula glow blobs - soft cosmic color blurs */}
      <div className="nebula-blob" style={{ width: '600px', height: '600px', top: '5%', left: '-10%', background: 'radial-gradient(circle, rgba(88,28,135,0.4), transparent 70%)' }}></div>
      <div className="nebula-blob" style={{ width: '500px', height: '500px', top: '30%', right: '-5%', background: 'radial-gradient(circle, rgba(30,58,138,0.35), transparent 70%)' }}></div>
      <div className="nebula-blob" style={{ width: '700px', height: '700px', top: '60%', left: '20%', background: 'radial-gradient(circle, rgba(76,29,149,0.25), transparent 70%)' }}></div>
      <div className="nebula-blob" style={{ width: '400px', height: '400px', top: '85%', right: '15%', background: 'radial-gradient(circle, rgba(30,64,175,0.3), transparent 70%)' }}></div>

      <Navbar />
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-24 space-y-40">
        <Hero />
        <About />
        <VisionMission />
        <RoverModel />
        <Departments />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-8 text-center mt-20">
        <p className="font-press-start text-xs uppercase tracking-widest text-gray-500">
          © {new Date().getFullYear()} TARS Committee. All systems operational.
        </p>
      </footer>
    </div>
  );
}
