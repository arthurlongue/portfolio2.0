import { useState } from "react";
import ".././styles/image-slider.css";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label="Image Slider"
      className="relative mb-7 mt-5 h-full w-full"
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div className="relative flex h-full w-full flex-col overflow-hidden">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img block h-full w-full flex-shrink-0 flex-grow-0 rounded-3xl object-cover opacity-90"
            style={{ transform: `translate(0, ${-100 * imageIndex}%)` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn absolute bottom-0 left-0 top-0 block cursor-pointer p-4 drop-shadow-lg"
        aria-label="View Previous Image"
      >
        <i className="fa-regular fa-circle-up text-3xl text-red-500"></i>
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn absolute bottom-0 right-0 top-0 block cursor-pointer p-4 drop-shadow-md"
        aria-label="View Next Image"
      >
        <i className="fa-regular fa-circle-down text-3xl text-red-500"></i>
      </button>
      <div className="absolute -bottom-5 left-2/4 flex -translate-x-2/4 gap-1 font-bold items-baseline">
        {images.map((_, index) => (
          <button
            key={index}
            className={`img-slider-dot-btn ${
              index === imageIndex ? `text-xl scale-125` : ""
            }`}
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? `${index + 1}` : "0"}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
