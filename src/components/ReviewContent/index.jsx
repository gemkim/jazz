import React, { useEffect } from 'react';
import style from './ReviewContent.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviews from "../../data/review.json"

const ReviewContent = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
console.log(reviews);
  }, [])
  return(
    <div className={style.reviewWrap}>
      <div className='container'>
        <h3>유저의 REAL PICK</h3>
        <p className={style.desc}>방문자들의 생생한 솔직 리뷰를 만나보세요.</p>
        <div className={style.slideWrap}>
          <Slider {...settings}>
            { reviews.map( reivew => (
              <div className={style.slide}>
              <span className={style.thumb}>
                <img src="#" alt={reivew.place.storeName} />
              </span>
              <div className={style.context}>
                <div className={style.textBox}>
                  <h4 className={style.reviewTitle}>{reivew.title}</h4>
                  <span className={style.grade}>
                    {reivew.rate}
                    (<em className={style.num}>{reivew.totalReview}</em>)
                  </span>
                  <p className={style.review}>{reivew.reviewText}</p>
                </div>
                <div className={style.reviewer}>
                  <span className={style.profile}><img src="#" alt={`${reivew.nickname} 프로필`} /></span>
                  <p className={style.name}>@{reivew.nickname}</p>
                  <button className={style.btnFollow}>+ FOLLOW</button>
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  )
};

export default ReviewContent;