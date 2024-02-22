import ImgFetch from "../../hooks/ImgFetch";

function Projects() {
  return (
    <>
      <div className="projects mt-[20%]">
        <h1 className="p-2 text-5xl text-red-800 lg:p-6">Outros Projetos</h1>
      </div>
      <div className="my-4 grid w-[85%] grid-flow-row grid-cols-1 gap-x-16 gap-y-24 self-center xl:grid-cols-2 2xl:grid-cols-3">
        <ImgFetch></ImgFetch>
      </div>
    </>
  );
}

export default Projects;
