
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 animate-fade-in-up">
            <span className="block text-fern font-sans text-sm font-semibold uppercase tracking-[0.3em] mb-8">
              Private Equity Excellence
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.1] tracking-tight text-kirk-black mb-12">
              Developing and growing <br />
              <span className="italic opacity-90">enduring</span> businesses.
            </h1>
            <div className="flex items-center space-x-8">
              <div className="w-12 h-[1px] bg-fern"></div>
              <p className="text-xl md:text-2xl font-sans text-kirk-gray font-light max-w-xl">
                Partnering with visionaries to build long-term value through discipline, integrity, and strategic foresight.
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:col-span-4 justify-end items-end pb-12 animate-fade-in">
            <div className="flex flex-col items-end space-y-4">
              <p className="text-sm font-sans uppercase tracking-[0.4em] text-kirk-gray transform rotate-90 origin-right translate-y-[-100px]">
                EST. MCMLXXXIX
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 animate-bounce">
        <div className="w-[1px] h-12 bg-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-fern"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
