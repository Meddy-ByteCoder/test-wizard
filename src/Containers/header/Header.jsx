import React from 'react'
import Logo from '../../Components/logo'
import Select from '../../Components/select'
import './Header.css'

export default function Header({ theme, setTheme = () => { } }) {
  return (
    <header>
      <div className='headerDiv container'>
        <Logo />
        <Select theme={theme} setTheme={setTheme}/>
      </div>
    </header>
  )
}

