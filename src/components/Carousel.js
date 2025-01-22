import React, { useEffect, useRef } from 'react';
import '../styles/components/Carousel.css';
import site1 from '../assets/site1.jpg'
import site2 from '../assets/site2.png'
import site3 from '../assets/site3.png'
import site4 from '../assets/site4.png'
import site5 from '../assets/site5.png'
import site6 from '../assets/site6.png'
import site7 from '../assets/site7.png'

const Carousel = () => {
  const slides = [
    { imageUrl: site1},
    { imageUrl: site2},
    { imageUrl: site3},
    { imageUrl: site4},
    { imageUrl: site5},
    { imageUrl: site6},
    { imageUrl: site7},
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
            <img src={slide.imageUrl} alt={slide.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

