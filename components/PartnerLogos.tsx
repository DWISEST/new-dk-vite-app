import React from 'react';

const LOGOS = [
  { name: 'Gambia Tech', url: 'https://placehold.co/200x80/f1f5f9/64748b?text=Gambia+Tech&font=lato' },
  { name: 'Banjul Corp', url: 'https://placehold.co/200x80/f1f5f9/64748b?text=Banjul+Corp&font=lato' },
  { name: 'Kairaba Solutions', url: 'https://placehold.co/200x80/f1f5f9/64748b?text=Kairaba+Solutions&font=lato' },
  { name: 'Atlantic Ventures', url: 'https://placehold.co/200x80/f1f5f9/64748b?text=Atlantic+Ventures&font=lato' },
  { name: 'SeneGambia Inc', url: 'https://placehold.co/200x80/f1f5f9/64748b?text=SeneGambia+Inc&font=lato' },
  { name: 'Fajara Group', url: 'https://placehold.co/200x80/f1f5f9/64748b?text=Fajara+Group&font=lato' },
  { name: 'Riverway Co.', url: 'https://placehold.co/200x80/f1f5f9/64748b?text=Riverway+Co.&font=lato' },
];

const PartnerLogos: React.FC = () => {
  const extendedLogos = [...LOGOS, ...LOGOS];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">
          dk partners
        </h3>
        <div className="group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-20 flex items-center justify-center mx-6 sm:mx-8">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-10 sm:max-h-12 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;