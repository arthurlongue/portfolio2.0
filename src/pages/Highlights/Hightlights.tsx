import { ImageSlider } from "../../components/ImageSlider";
import { default as img1, default as img4 } from "/assets/active-states.jpg";
import img3 from "/assets/desktop-preview.jpg";
import img5 from "/assets/desktop-preview.png";
import img2 from "/assets/finances-preview.jpg";

const IMAGES = [
  { url: img1, alt: "img One" },
  { url: img2, alt: "img Two" },
  { url: img3, alt: "img Three" },
  { url: img4, alt: "img Four" },
  { url: img5, alt: "img Five" },
];

function Hightlights() {
  return (
    <div id="highlights">
      <h1 className="mb-8 px-4 text-5xl text-red-800">Projetos em destaque</h1>

      <div className="mockup-browser m-auto w-[95%] max-w-7xl bg-red-950">
        <div className="mockup-browser-toolbar">
          <div className="input text-red-500">
            https://github.com/arthurlongue
          </div>
        </div>
        <div className="flex justify-center bg-red-50 bg-opacity-10">
          <div
            className=""
            style={{
              maxWidth: "1000px",
              width: "90%",
              aspectRatio: "10 / 6",
              margin: "0 auto",
            }}
          >
            <ImageSlider images={IMAGES} />
            {/* <a href="/" style={{ fontSize: "4rem" }}>
            Link
          </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hightlights;
