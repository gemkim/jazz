import React, { useEffect, useState } from 'react';
import data from "../../data/weekLists.json"
import style from './WeekLiveContent.module.scss'



const WeekLiveContent = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: 'JAZZ', content: 'Tab menu JAZZ' },
    { name: 'R&B', content: 'Tab menu R&B' },
    { name: 'HIP POP', content: 'Tab menu HIP POP' },
  ];


  useEffect(()=>{
    console.log(data);
    console.log(data[currentTab]);
  }, [currentTab])

  const handleTabMenu = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    setCurrentTab(index);
  };

  return (
    <div className={style.WeekLiveContent}>
      <div className="container">
          <h3>This Week Artists</h3>
          <p className={style.secDesc}>Neque porro quisquam qui dolorem, consectetur, adipisci veli</p>

        <div className={style.contents}>
          <ul className={style.tabs}>
            { menuArr.map((menu, index) => (
              <li className={ `${index === currentTab ? style.actived : ""}` }>
                <button type='button' onClick={() => handleTabMenu(index)}>{menu.name}</button>
              </li>
            ))}
          </ul>
          <section className={style.tabContent}>
            { data.map( list => (
              <div className={style.lists}>
                <div className={style.date}>
                  <span className={style.day}>{ list.day}</span>
                  <span className={style.month}>{ list.month}</span>
                </div>
                <div className={style.profileInfo}>
                  <div className={style.profile}>
                    <img src="" alt="" />
                    <div className={style.info}>
                      <p className={style.name}>{ list.singer}</p>
                      <span className={style.type}>#RandB #Jazz #lorem</span>
                    </div>
                  </div>
                  <p className={style.time}>{ list.time}</p>
                  <p className={style.location}>{ list.location}</p>
                </div>
                <button className={style.btnBooking} type='button'>Booking</button>
              </div>
            ))}
            <div>
              <p>{menuArr[currentTab].content}</p>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
};

export default WeekLiveContent;