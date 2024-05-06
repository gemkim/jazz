import React from 'react';
import style from './TodayContent.module.scss'
import Slider from "react-slick";

import todayData from "../../data/todayData.json"

const TodayContent = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return(
    <div className={style.TodayContent}>
      <div className="container">
        <div className={style.context}>
          <h3>Today’s<br />Live on</h3>
          <p className={style.text}>Neque porro quisquam qui dolorem, consectetur, adipisci velit...</p>
          <button type='button' className={style.btnMore}>More Place</button>
        </div>
        <div className={style.storeLists}>
          <Slider {...settings}>
            {todayData.map( list => (
              <div className={style.list}>
                <a href={list.LinkURL} target='_self' className={style.thumb}><img src={list.imgURL} alt={list.imgAlt} /></a>
                <div className={style.textBox}>
                  <button className={style.btnLike} type='button'>♡</button>
                  <h4>{list.sotreName}</h4>
                  <p className={style.location}>{list.location}</p>
                  <div className={style.timeTable}>
                    LIVE
                    { list.times.map( (time) => (
                      <button type='button'>{[time]}</button>
                    )) }
                   
                    {/* <button className={style.soldOut} type='button'>20:00</button>
                    <button type='button'>21:00</button> */}
                  </div>
                  <span className={style.fee}>Entrance Fee: <em>{list.fee ? `${list.fee}원` : 'FREE'}</em></span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
};

export default TodayContent;