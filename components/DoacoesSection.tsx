import React from 'react';

export interface LocalDoacao {
  id: number;
  nome: string;
  endereco: string;
}

interface DoacoesSectionProps {
  doacoes: LocalDoacao[];
}

const DoacoesSection = ({ doacoes }: DoacoesSectionProps) => {
  return (
<section className="p-10 font-specialElite bg-lilacLight rounded-xl shadow-card max-w-5xl mx-auto transition-shadow duration-300 hover:shadow-card-hover">
      <h2 className="text-center mb-8 text-4xl font-extrabold border-b-4 border-lilacDark pb-3 text-lilacDark tracking-wide">Locais de Doação</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {doacoes.map((local) => (
          <div key={local.id} className="border border-lilacMedium rounded-xl p-8 w-72 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-5xl mb-4 text-lilacDark">🏠</div>
            <h3 className="mb-4 text-2xl font-semibold tracking-tight">{local.nome}</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">{local.endereco}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoacoesSection;
