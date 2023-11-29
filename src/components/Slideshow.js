// src/components/Slideshow.js

import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 2 + 4) % 4 + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <button className="prev-button" onClick={prevSlide}>&#10094;</button>
      <div className={`slide fade ${currentSlide === 1 ? 'active' : ''}`}>
        <img src="https://pictures.kartmax.in/live/1600x800/cover/quality=6/sites/w0ACRcy407Pb14QWUoSQ/gif/DKA-web-banner-desktop-626080bc-bc87-43d6-b654-80c1a214777b.gif" alt="Slide 1" />
      </div>
      <div className={`slide fade ${currentSlide === 2 ? 'active' : ''}`}>
        <img src="https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?w=1380&t=st=1701268273~exp=1701268873~hmac=4fb653fa2b83e74173e54ad7b360a27e62ffcfa4d9fd2a1812c42d42dec48079" alt="Slide 2" />
      </div>
      <div className={`slide fade ${currentSlide === 3 ? 'active' : ''}`}>
        <img src="https://pictures.kartmax.in/live/1600x800/cover/quality=6/sites/w0ACRcy407Pb14QWUoSQ/gif/DFLweb2-100-ac232c78-70e5-4b5d-95ed-81abb5541c89.gif" alt="Slide 3" />
      </div>
      <div className={`slide fade ${currentSlide === 4 ? 'active' : ''}`}>
        <img src="https://img.freepik.com/premium-vector/beautiful-men-group-standing-together-attractive-guys-male-cartoon-characters-fashion-clothes-full-length-flat-horizontal_48369-23504.jpg?w=1380" alt="Slide 4" />
      </div>
      <button className="next-button" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slideshow;
