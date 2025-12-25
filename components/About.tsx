
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-kirk-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif text-kirk-black">Our Firm</h2>
            <div className="line-accent mt-6"></div>
          </div>
          
          <div className="lg:col-span-8">
            <p className="text-3xl md:text-4xl font-sans font-light leading-relaxed text-kirk-black mb-12">
              Kirkbridge Capital is a private equity firm dedicated to the stewardship of growth. We bridge the gap between potential and performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-kirk-gray leading-loose text-lg">
              <p>
                Founded on the principles of disciplined investment and operational excellence, we are interested in growth and development at every scale. Our approach is not just financial; it is holistic, focusing on the DNA of each enterprise we touch.
              </p>
              <p>
                We are backed by a multi-disciplinary team of elite professionals across tech, legal, and financial services. This diversity of thought allows us to navigate complex regulatory landscapes and technological shifts with unparalleled precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
