import React, { useEffect, useRef, useState } from 'react';
import style from './TopTenContent.module.scss'
import Slider from "react-slick";
import singers from "../../data/singers.json"

const TopTenContent = (props) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: true,
    className: "topTenSlide",
    centerMode: true,
    infinite: true,
    speed: 500,
  };

  return(
    <div className={style.toptenWrap}>
      <div className="container">
        <h3>TOP TEN <em>ARTISTS</em></h3>
        <section className={style.topten}>
          <Slider
            {...settings}
            asNavFor={nav1}
            ref={slider => (sliderRef2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {
              singers.map(list => (
                <div className={style.artist}>
                  <span><img src={list.imgURL} alt={list.imgAlt} /></span>
                  <p>{list.singer}</p>
                </div>
              ))
            }
          </Slider>
        </section>

        <section className='posterSlide'>
          <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
            {
              singers.map(list => (
                <div className='bigPoster'>
                  <span className='bigImg'><img src={list.imgURL} alt={list.imgAlt} /></span>
                  <div className='textbox'>
                    <h4 className='myself'>{list.motto}</h4>
                    <p className='explain'>
                      {list.info}
                    </p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </section>
      </div>
    </div>
  )
};

export default TopTenContent;