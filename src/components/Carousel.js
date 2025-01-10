import React, { useEffect, useRef } from 'react';
import '../styles/components/Carousel.css';

const Carousel = () => {
  const slides = [
    { id: 1, title: 'Slide 1', content: 'Texto do Slide 1', imageUrl: 'https://via.placeholder.com/200x150?text=1' },
    { id: 2, title: 'Slide 2', content: 'Texto do Slide 2', imageUrl: 'https://via.placeholder.com/200x150?text=2' },
    { id: 3, title: 'Slide 3', content: 'Texto do Slide 3', imageUrl: 'https://via.placeholder.com/200x150?text=3' },
    { id: 4, title: 'Slide 4', content: 'Texto do Slide 4', imageUrl: 'https://via.placeholder.com/200x150?text=4' },
    { id: 5, title: 'Slide 5', content: 'Texto do Slide 5', imageUrl: 'https://via.placeholder.com/200x150?text=5' },
    { id: 6, title: 'Slide 6', content: 'Texto do Slide 6', imageUrl: 'https://via.placeholder.com/200x150?text=6' },
    { id: 7, title: 'Slide 7', content: 'Texto do Slide 7', imageUrl: 'https://via.placeholder.com/200x150?text=7' },
    { id: 8, title: 'Slide 8', content: 'Texto do Slide 8', imageUrl: 'https://via.placeholder.com/200x150?text=8' },
    { id: 9, title: 'Slide 9', content: 'Texto do Slide 9', imageUrl: 'https://via.placeholder.com/200x150?text=9' },
    { id: 10, title: 'Slide 10', content: 'Texto do Slide 10', imageUrl: 'https://via.placeholder.com/200x150?text=10' },
  ];

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
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
            <img src={slide.imageUrl} alt={slide.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
