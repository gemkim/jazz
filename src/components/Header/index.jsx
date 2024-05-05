import React, {  } from 'react';
import style from './Header.module.scss'

const TopHeader = () => {
  const nav = ([
    {
      id: 1,
      type: 'Home',
      url: "#"
    },
    {
      id: 2,
      type: 'Live',
      url: "#"
    },
    {
      id: 3,
      type: 'Booking',
      url: "#"
    },
    {
      id: 4,
      type: 'Review',
      url: "#"
    },
  ])
  return(
    <header className={style.header}>
      <div className="container">
        <h1 className={style.logo}>
          LIVE<br />
          LIFE
        </h1>
        <nav>
          <ul className={style.navList}>
            {
              nav.map(list => (
                <li key={list.id}>
                  <a href={list.url} target='_self'>{list.type}</a>
                </li>
              ))
            }
          </ul>
          <ul className={style.utils}>
            {/* <li><button href=""><span>찾기</span></button></li> */}
            <li><button className='login' title='로그인 기능' type='button'><span className='ir'>로그인</span></button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
};
export default TopHeader;
