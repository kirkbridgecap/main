
import React from 'react';

const Philosophy: React.FC = () => {
  const pillars = [
    {
      title: "Enduring Value",
      desc: "We look beyond the quarterly report, investing in businesses that define their industries for decades."
    },
    {
      title: "Active Partnership",
      desc: "Capital is only the beginning. We provide the operational expertise and network to catalyze genuine growth."
    },
    {
      title: "Integrity First",
      desc: "Our reputation is our most valuable asset. Transparency and ethical leadership guide every transaction."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif text-kirk-black mb-6">Our Philosophy</h2>
            <p className="text-xl text-kirk-gray font-light">
              A commitment to excellence, powered by the belief that the strongest growth is organic and sustainable.
            </p>
          </div>
          <div className="text-fern font-sans font-bold tracking-widest text-sm uppercase">
            [ 01 / 03 ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-slate-100">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`py-16 md:px-10 border-b md:border-b-0 border-slate-100 group hover:bg-kirk-light transition-colors duration-500 ${
                idx !== pillars.length - 1 ? 'md:border-r' : ''
              }`}
            >
              <span className="block text-xs font-sans text-fern mb-8 tracking-widest uppercase">
                Pillar 0{idx + 1}
              </span>
              <h3 className="text-2xl font-serif text-kirk-black mb-6 group-hover:translate-x-2 transition-transform duration-300">
                {pillar.title}
              </h3>
              <p className="text-kirk-gray leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
