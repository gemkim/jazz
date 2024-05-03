import React, { useEffect } from 'react';
import style from './ReviewContent.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reviews from "../../data/review.json"

const ReviewContent = (props) => {
  const settings = {
    dots: true,
    // dotsClass: 'primaryDots',
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
            { reviews.map( (review) => (
              <div className={style.slide}>
              <div className={style.thumb}>
                <div className={style.storeInfo}>
                  <span className={style.type}>{review.place.subject}</span>
                  <span className={style.location}>{review.place.storeName}·{review.place.location}</span>
                </div>
                <img src="#" alt={review.place.storeName} />
              </div>
              <div className={style.context}>
                <div className={style.textBox}>
                  <h4 className={style.reviewTitle}>{review.title}</h4>
                  <span className={style.grade}>
                    {review.rate}
                    (<em className={style.num}>{review.totalReview}</em>)
                  </span>
                  <p className={style.review}>{review.reviewText}</p>
                </div>
                <div className={style.reviewer}>
                  <span className={style.profile}><img src="#" alt={`${review.nickname} 프로필`} /></span>
                  <p className={style.name}>@{review.nickname}</p>
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