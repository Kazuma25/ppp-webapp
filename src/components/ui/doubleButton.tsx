'use client';

import { Users, ScrollText } from 'lucide-react';

export default function DoubleButton() {
  return (
    <div className="flex rounded-full overflow-hidden shadow-lg">
      {/* Bouton 1 - Nous rejoindre (remplissage de droite à gauche) */}
      <button className="relative flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold overflow-hidden rounded-l-full group">
        {/* Fond animé inversé */}
        <span className="absolute inset-0 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transform origin-right transition-transform duration-300 ease-in-out z-0"></span>

        {/* Contenu au-dessus */}
        <span className="flex items-center gap-2 relative z-10">
          <Users className="w-5 h-5" />
          Nous rejoindre
        </span>
      </button>

      {/* Bouton 2 - Nos tutoriels (remplissage gauche → droite) */}
      <button className="relative flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-semibold overflow-hidden rounded-r-full border-l border-white/40 group">
        {/* Fond animé normal */}
        <span className="absolute inset-0 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-in-out z-0"></span>

        {/* Contenu au-dessus */}
        <span className="flex items-center gap-2 relative z-10">
          Nos tutoriels
          <ScrollText className="w-5 h-5" />
        </span>
      </button>
    </div>
  );
}
