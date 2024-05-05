import React, { useEffect } from 'react';
import style from './LineUpContent.module.scss';
import Slider from "react-slick";
import lineup from "../../data/lineup.json"

const LineUpContent = (props) => {

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1
  };
  return(
    <div className={style.lineupWrap}>
      <div className="container">
        <div className={style.mainTitle}>
          <h3>COMMING LINE UP</h3>
          <p className={style.desc}>
          Without music,<br />
          life is a journey through a desert.
          </p>
        </div>
        <section className={style.content}>
          <h4><em>Apr</em> Schedule</h4>
          <div className={style.lineUp}>
            <Slider {...settings}>
              {lineup.map(list => (
                <div className={style.schedule}>
                 <div className={style.date}>
                   <span className={style.day}>{list.day}</span>
                   <span className={style.time}>{list.time}</span>
                 </div>
                 <div className={style.info}>
                   <span className={style.singer}>{list.singer}</span>
                   <span className={style.location}>{list.storeName}·{list.location}</span>
                 </div>
               </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  )
};

export default LineUpContent;