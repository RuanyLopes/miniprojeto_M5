import React from 'react';

export interface Curso {
  id: number;
  nome: string;
  descricao: string;
  gratuito: boolean;
}

interface CursosSectionProps {
  cursos: Curso[];
}

const CursosSection: React.FC<CursosSectionProps> = ({ cursos }) => {
  return (
<section className="p-10 font-specialElite bg-lilacLight rounded-xl shadow-card max-w-5xl mx-auto transition-shadow duration-300 hover:shadow-card-hover">
      <h2 className="text-center mb-8 text-4xl font-extrabold border-b-4 border-lilacDark pb-3 text-lilacDark tracking-wide">Cursos Populares</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {cursos.map((curso) => (
          <div key={curso.id} className="border border-lilacMedium rounded-xl p-8 w-72 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="text-5xl mb-4 text-lilacDark">📚</div>
            <h3 className="mb-4 text-2xl font-semibold tracking-tight">{curso.nome}</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">{curso.descricao}</p>
            <p className={`font-bold text-lg ${curso.gratuito ? 'text-green-600' : 'text-red-600'}`}>
              {curso.gratuito ? 'Gratuito' : 'Pago'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CursosSection;
