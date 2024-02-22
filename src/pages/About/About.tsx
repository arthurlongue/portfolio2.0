export default function About() {
  return (
    <div id="about" className="about flex flex-col items-center  gap-10">
      <h1 className="p-2 mt-[20%] text-5xl text-red-800 lg:p-6">Sobre mim</h1>
      <img
        className="flex w-52 rounded-full shadow-md shadow-red-950"
        src="/assets/foto perfil.jpg"
        alt="foto de perfil"
      />
      <p className="px-4 py-8 md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
        Sou Arthur longue, 25 anos e capixaba. Ao cursar Estatística conheci a
        programação. Sou graduado em Gastronomia e atualmente curso Análise e
        Desenvolvimento de Sistemas. Dedico-me ao desenvolvimento Front-End e
        UI/UX.
      </p>
    </div>
  );
}
