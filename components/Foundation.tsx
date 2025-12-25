
import React from 'react';

const Foundation: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-kirk-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative overflow-hidden">
            <img 
              src="https://picsum.photos/id/101/800/1000?grayscale" 
              alt="Architecture" 
              className="w-full h-auto opacity-40 hover:scale-105 transition-transform duration-1000 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kirk-black to-transparent"></div>
          </div>
          
          <div className="lg:col-span-6">
            <h2 className="text-5xl font-serif mb-12">The Foundation</h2>
            <div className="space-y-8 text-lg font-light text-slate-400 leading-relaxed">
              <p>
                At Kirkbridge Capital, we believe that the strength of any enterprise lies in its foundation. Our multi-disciplinary team brings together decades of experience from global law firms, Silicon Valley tech giants, and Wall Street institutions.
              </p>
              <p>
                This cross-functional expertise allows us to perform deeper due diligence and identify hidden synergies that traditional firms might overlook. We aren't just financiers; we are engineers of growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
