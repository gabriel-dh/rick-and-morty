import React from 'react'
import Logo from '../images/Logo.png'
import '../styles/bottom.css'

function Bottom() {
  return (
    <div>
        <div className='container-bottom'>
           <div className='bottom'>
            <img src={Logo} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Bottom