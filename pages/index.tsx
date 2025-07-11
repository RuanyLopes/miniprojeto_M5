import React from 'react';
import CursosSection from '../components/CursosSection';
import DoacoesSection from '../components/DoacoesSection';

const cursos = [
  {
    id: 1,
    nome: 'Curso de Matemática',
    descricao: 'Aprenda matemática básica e avançada para o ENEM.',
    gratuito: true,
  },
  {
    id: 2,
    nome: 'Curso de Ciências',
    descricao: 'Conteúdos de física, química e biologia para o ENEM.',
    gratuito: false,
  },
];

const locaisDeDoacao = [
  {
    id: 1,
    nome: 'Biblioteca Comunitária',
    endereco: 'Rua das Flores, 123',
  },
  {
    id: 2,
    nome: 'Centro de Apoio Educacional',
    endereco: 'Av. Brasil, 456',
  },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-roboto bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600 text-white">
      <header className="flex flex-col justify-center items-center text-center p-8 border-b-4 border-purple-700 shadow-lg w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-center flex justify-center items-center min-h-[4rem]">
          Conexão Enem
        </h1>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          No Brasil, muitos estudantes enfrentam dificuldades para se preparar
          adequadamente para o Exame Nacional do Ensino Médio (ENEM) devido à
          falta de acesso a cursos de preparação gratuitos e materiais
          didáticos. Essa realidade afeta, sobretudo, alunos de baixa renda que
          não possuem os recursos necessários para competir em pé de igualdade
          por uma vaga no ensino superior. Além disso, a falta de uma plataforma
          centralizada dificulta a conexão entre iniciativas de doação de
          materiais e os alunos que mais precisam.
        </p>
      </header>
      <nav className="space-x-6 mb-12">
        <button
          onClick={() => scrollToSection('cursos')}
          className="px-6 py-3 bg-purple-700 rounded-lg shadow-md hover:bg-purple-800 transition transform hover:scale-105"
        >
          Cursos
        </button>
        <button
          onClick={() => scrollToSection('doacoes')}
          className="px-6 py-3 bg-purple-700 rounded-lg shadow-md hover:bg-purple-800 transition transform hover:scale-105"
        >
          Doações
        </button>
      </nav>
      <main className="divide-y-4 divide-purple-700 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <section id="cursos" className="py-12 relative">
          <CursosSection cursos={cursos} />
          <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-4 pointer-events-none">
            <span className="animate-bounce animate-infinite text-4xl text-purple-600">
              📚
            </span>
            <span className="animate-pulse animate-infinite text-4xl text-purple-500">
              🧪
            </span>
            <span className="animate-bounce animate-infinite text-4xl text-purple-600">
              📝
            </span>
            <span className="animate-pulse animate-infinite text-4xl text-purple-500">
              🔬
            </span>
            <span className="animate-bounce animate-infinite text-4xl text-purple-600">
              📐
            </span>
          </div>
        </section>
        <div className="my-12 max-w-4xl text-center text-lg px-4 sm:px-6 lg:px-8 text-gray-800 bg-white bg-opacity-70 rounded-lg shadow-md">
          A iniciativa tem como propósito central promover a inclusão
          educacional ao facilitar o acesso de estudantes de baixa renda a
          cursos gratuitos de preparação para o ENEM e a recursos didáticos
          essenciais, por meio da identificação de pontos de doação. Essa
          proposta surge em resposta às desigualdades históricas do sistema
          educacional brasileiro, em que muitos jovens, especialmente os de
          comunidades periféricas, enfrentam obstáculos para competir em
          igualdade por uma vaga no ensino superior.
        </div>
        <section id="doacoes" className="py-12 relative">
          <DoacoesSection doacoes={locaisDeDoacao} />
          <div className="absolute inset-x-0 top-0 flex justify-center space-x-4 pointer-events-none">
            <span className="animate-pulse text-4xl text-purple-600">📚</span>
            <span className="animate-bounce text-4xl text-purple-500">🧪</span>
            <span className="animate-pulse text-4xl text-purple-600">📝</span>
            <span className="animate-bounce text-4xl text-purple-500">🔬</span>
            <span className="animate-pulse text-4xl text-purple-600">📐</span>
          </div>
        </section>
      </main>
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center py-8 text-gray-800 bg-white bg-opacity-70 rounded-lg shadow-md mt-12">
        <p>
          Agradecemos por acessar a plataforma Conexão Enem. Sua visita fortalece o propósito de construir uma rede de apoio educacional sólida, inclusiva e colaborativa. Saber que você está aqui reforça nosso compromisso com a democratização do acesso ao conhecimento e com o sonho de milhares de jovens que buscam uma chance justa de conquistar o ensino superior.
        </p>
        <p className="mt-4">
          Convidamos você a ir além da navegação: seja parte ativa dessa iniciativa. Doe materiais didáticos, divulgue os pontos de coleta e incentive outras pessoas a contribuírem. Cada gesto conta. Juntos, podemos criar pontes reais entre quem deseja aprender e quem pode ajudar. A educação é uma causa coletiva — e sua contribuição é o elo que transforma vidas.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
