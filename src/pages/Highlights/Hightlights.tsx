// highlights.tsx

import { useState } from "react";
import { ImageSlider } from "../../components/ImageSlider";
import { default as img3, default as img5 } from "/assets/active-states.jpg";
import img4 from "/assets/desktop-preview.jpg";
import img1 from "/assets/finances-preview.png";
import img2 from "/assets/fortes-desktop-preview.png";

const IMAGES = [
  { url: img1, alt: "img One" },
  { url: img2, alt: "img Two" },
  { url: img3, alt: "img Three" },
  { url: img4, alt: "img Four" },
  { url: img5, alt: "img Five" },
];

const imageLink = {
  links: [
    "https://arthurlongue.github.io/finances-company-landing-page/",
    "https://ponto-fortes.vercel.app/",
    "https://arthurlongue.github.io/interactive-card-details-form-main/",
    "http://localhost:3003",
    "http://localhost:3004",
  ],
};

function Hightlights() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div id="highlights">
      <h1 className="mb-8 px-4 text-5xl text-red-800">Projetos em destaque</h1>

      <div className="mockup-browser m-auto w-[95%] max-w-7xl bg-red-950">
        <div className="mockup-browser-toolbar ml-0 mr-0 w-full flex-grow">
          <div className="input text-white">
            {imageLink.links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                {index === imageIndex ? `${imageLink.links[index]}` : ``}
              </a>
            ))}
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
            <ImageSlider
              images={IMAGES}
              links={imageLink.links}
              setImageIndex={setImageIndex}
              imageIndex={imageIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hightlights;
