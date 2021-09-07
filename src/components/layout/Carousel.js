import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className='bg-dark text-dark'
      pause='hover'
      variant='dark'
      activeIndex={index}
      onSelect={handleSelect}>
      <Carousel.Item>
        <img
          width={400}
          height={400}
          className='d-block w-100'
          src={img1}
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={400}
          height={400}
          className='d-block w-100'
          src={img2}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={400}
          height={400}
          className='d-block w-100'
          src={img3}
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
