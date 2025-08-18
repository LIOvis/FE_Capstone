import { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import image1 from "../assets/images/carousel-image-1.jpg";
import image2 from "../assets/images/carousel-image-2.jpg";
import image3 from "../assets/images/carousel-image-3.jpg";
import image4 from "../assets/images/carousel-image-4.jpg";
import image5 from "../assets/images/carousel-image-5.jpg";
import image6 from "../assets/images/carousel-image-6.jpg";
import image7 from "../assets/images/carousel-image-7.jpg";
import image8 from "../assets/images/carousel-image-8.jpg";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000); // change slide every 3s
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      startAutoplay();
      emblaApi.on("pointerDown", stopAutoplay);
      emblaApi.on("pointerUp", startAutoplay);
    }
    return () => stopAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="embla__img" />
          </div>
        ))}
      </div>
    </div>
  );
}
