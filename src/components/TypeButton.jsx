import React from 'react';

const TypeButton = ({btnType, btnSize, btnName}) => {
  return (
    <button className={`${btnType} ${btnSize}`}>{btnName}</button>
  )
};

export default TypeButton;