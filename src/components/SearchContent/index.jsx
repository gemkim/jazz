import React from 'react';
import style from './SearchContent.module.scss'

const SearchContent = (props) => {
  return (
    <div className={style.serachWrap}>
      <div className={style.serachArea}>
        <div className='container'>
          <h3>SEARCH</h3>
          <input className={style.searchInput} type="text" placeholder='search...' />
          <ul className={style.tags}>
            <li><button type='#'>강남재즈바</button></li>
            <li><button type='#'>데이트추천</button></li>
            <li><button type='#'>라이브바</button></li>
          </ul>
        </div>
      </div>
      <div className={style.map}></div>
    </div>
  )
};

export default SearchContent;