function Hightlights() {
  return (
    <div id="highlights">
      <h1 className="mb-8 px-4 text-5xl text-red-800">Projetos em destaque</h1>
      {/* <div className="my-4 grid grid-flow-row grid-cols-1 gap-8 xl:grid-cols-3"></div> */}

      <div className="mockup-browser m-auto w-[95%] max-w-7xl bg-red-700 bg-opacity-30">
        <div className="mockup-browser-toolbar ">
          <div className="input text-red-500">
            https://github.com/arthurlongue
          </div>
        </div>
        <div className="flex justify-center bg-gray-100 bg-opacity-30 px-4 py-8">
          <div
            className="carousel opacity-90 drop-shadow-2xl carousel-vertical
      h-[15rem] self-center rounded-box xs:h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[40rem]"
          >
            <div className="carousel-item h-full">
              <img src="/assets/desktop-preview.png" />
            </div>
            <div className="carousel-item h-full">
              <img src="/assets/desktop-preview.png" />
            </div>
            <div className="carousel-item h-full">
              <img src="/assets/desktop-preview.png" />
            </div>
            <div className="carousel-item h-full">
              <img src="/assets/desktop-preview.png" />
            </div>
            <div className="carousel-item h-full">
              <img src="/assets/desktop-preview.png" />
            </div>
            <div className="carousel-item h-full">
              <img src="/assets/desktop-preview.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hightlights;
