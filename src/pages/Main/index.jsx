import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopBanner from '../../components/TopBanner';
import TodayContent from '../../components/TodayContent';
import WeekLiveContent from '../../components/WeekLiveContent';
import TopTenContent from '../../components/TopTenContent';
import LineUpContent from '../../components/LineUpContent';
import ReviewContent from '../../components/ReviewContent';
import SearchContent from '../../components/SearchContent';

const Main = (props) => {
  return(
    <>
      <TopBanner />
      <TodayContent />
      <WeekLiveContent />
      <TopTenContent />
      <LineUpContent />
      <ReviewContent />
      <SearchContent />
    </>
  )
};

export default Main;