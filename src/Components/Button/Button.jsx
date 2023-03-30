import React from 'react';

//CSS
import './Button.css';

const Button = ({label,onClick}) => {
  return (
    <div className='btn-container'>
     <button className='btn' type="submit" onClick={(e)=>onClick(e)} >{label}</button>
    </div>
  )
}

export default Button;