import React from 'react';
import MainBanner from '../../components/MainBanner';
import LineUpContent from '../../components/LineUpContent';
import ReviewContent from '../../components/ReviewContent';
import TopTenContent from '../../components/TopTenContent';
import WeekLiveContent from '../../components/WeekLiveContent';

const Main = (props) => {
  return(
    <>
      <MainBanner />
      <WeekLiveContent />
      <TopTenContent />
      <LineUpContent />
      <ReviewContent />
    </>
  )
};

export default Main;