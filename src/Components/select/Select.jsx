import React, { useState } from 'react'
import './Select.css'

export default function Select({ theme, setTheme }) {
  // "fa-sharp fa-solid fa-gear settings"
  const [setting, setSetting] = useState(false)

  const toggleTheme = () => {
    debugger;
    if (theme == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className='selectDiv'>
      {/* <i class="fa-regular fa-sun"></i>
      <i class="fa-regular fa-moon"></i> */}
      {theme === "light"
        && <i onClick={() => toggleTheme()} class="fa-regular fa-moon"></i>
      }
      {theme === "dark"
        && <i onClick={() => toggleTheme()} class="fa-regular fa-sun"></i>
        }
      <i className={setting ? "fa-sharp fa-solid fa-gear settings" : "fa-sharp fa-solid fa-gear"} onClick={() => setSetting(!setting)}></i>
    </div>
  )
}
