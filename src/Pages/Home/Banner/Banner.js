import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../img/slide/slide1.png';
import banner2 from '../../../img/slide/slide-2.png';
import banner3 from '../../../img/slide/slide-3.png';

const Banner = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>RIDING</h3>
          <p>Bicycle riding keep up mind fresh.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>FITNESS</h3>
          <p>Cycling increases stamina, strength and aerobic fitness</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>HEALTH</h3>
          <p>
         Cycling can help shape a healthy lifestyle, both physically and mentally.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner
