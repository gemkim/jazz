import React from 'react';
import style from './TopBanner.module.scss'
import TypeButton from '../TypeButton';

const TopBanner = (props) => {
  return (
    <div className={style.TopBanner}>
      <div className={style.content}>
        <p className={style.subText}>MAIN MUSIC OF THIS SUMMER</p>
        <h2 className={style.mainTitle}>Singing That Comes From Soul</h2>
        <div className={style.btnWrap}>
          <TypeButton
            type="button"
            btnType='btnTypeW'
            btnSize='btnLg'
            btnName='TODAY LIVE'
          />
         <TypeButton
            type="button"
            btnType='btnTypeDefault'
            btnSize='btnLg'
            btnName='TODAY LIVE'
          />
        </div>
      </div>
    </div>
  )
};

export default TopBanner;