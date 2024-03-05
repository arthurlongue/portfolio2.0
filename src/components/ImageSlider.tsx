// imageslider.tsx

import ".././styles/image-slider.css";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
  links: string[];
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  imageIndex: number;
};

export function ImageSlider({
  images,
  links,
  setImageIndex,
  imageIndex,
}: ImageSliderProps) {
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
      className="relative mb-8 mt-5 h-full w-full sm:mb-10 md:mb-14"
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
        className="img-slider-btn absolute -left-3 bottom-0 top-0 block cursor-pointer drop-shadow-lg sm:-left-4 lg:-left-6"
        aria-label="View Previous Image"
      >
        <i className="fa-solid fa-arrow-up rounded-full border-2 border-red-500 p-1 text-[1rem] text-white sm:text-[2rem] lg:text-[3rem]"></i>
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn absolute -right-3 bottom-0 top-0 block cursor-pointer drop-shadow-lg sm:-right-4 lg:-right-6"
        aria-label="View Next Image"
      >
        <i className="fa-solid fa-arrow-down rounded-full border-2 border-red-500 p-1 text-[1rem] text-white sm:text-[2rem] lg:text-[3rem]"></i>
      </button>
      <div className="absolute -bottom-8 left-2/4 flex -translate-x-2/4 font-bold  md:-bottom-10 md:gap-2 md:text-3xl">
        {images.map((_, index) => (
          <button
            key={index}
            className={`img-slider-dot-btn h-max ${
              index === imageIndex ? `scale-125 text-xl` : ""
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
