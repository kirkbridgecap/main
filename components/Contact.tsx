
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-white border-t border-slate-100 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-kirk-black mb-8">
              Kirkbridge Capital<span className="text-fern">.</span>
            </h2>
            <p className="text-kirk-gray font-light max-w-sm leading-loose">
              Building the future of industry through disciplined capital allocation and strategic operational support.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-kirk-black mb-8">Inquiries</h4>
            <ul className="space-y-4 text-kirk-gray font-light">
              <li><a href="mailto:kevin@kirkbridgecap.com" className="hover:text-fern transition-colors">kevin@kirkbridgecap.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Kirkbridge Capital Partners, LLC. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-kirk-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-kirk-black transition-colors">Terms</a>
            <a href="#" className="hover:text-kirk-black transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
