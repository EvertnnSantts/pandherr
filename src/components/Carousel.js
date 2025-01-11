import React, { useEffect, useRef } from 'react';
import '../styles/components/Carousel.css';

const Carousel = () => {
  const slides = [
    { id: 1,  imageUrl: '' },
    { id: 2,  imageUrl: '' },
    { id: 3,  imageUrl: '' },
    { id: 4,  imageUrl: '' },
    { id: 5,  imageUrl: '' },
    { id: 6,  imageUrl: '' },
    { id: 7,  imageUrl: '' },
    { id: 8,  imageUrl: '' },
    { id: 9,  imageUrl: '' },
    { id: 10, imageUrl: '' },
  ]

  const carouselRef = useRef(null);

  useEffect(() => {
    const track = carouselRef.current;
    if (track) {
      const slideWidth = track.children[0].offsetWidth;
      const totalWidth = slideWidth * slides.length;
            let scrollPosition = 0;

      const scrollSlides = () => {
        scrollPosition += 1; 
        track.style.transform = `translateX(-${scrollPosition}px)`;

        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
          track.style.transition = 'none';
          track.style.transform = `translateX(0)`;
        } else {
          track.style.transition = 'transform 0.01s linear';
        }

        requestAnimationFrame(scrollSlides);
      };

      scrollSlides();
    }
  }, [slides.length]);

  return (
    <div className="carousel">
      <div className="carousel-track" ref={carouselRef}>
        {slides.concat(slides).map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <h3 id='id'>{slide.title}</h3>
            <p>{slide.content}</p>
            <img src={slide.imageUrl} alt={slide.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
