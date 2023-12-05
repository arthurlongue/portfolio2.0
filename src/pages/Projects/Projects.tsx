import ImgFetch from "../../hooks/ImgFetch";

function Projects() {
  return (
    <>
      <div>
        <h1 className="p-2 text-5xl text-red-800 lg:p-6">Outros Projetos</h1>
        <h1>SITE EM CONSTRUÇÃO</h1>
      </div>
      <div className="my-4 grid grid-flow-row grid-cols-1 gap-8 xl:grid-cols-2">
        <ImgFetch></ImgFetch>
      </div>
    </>
  );
}

export default Projects;
