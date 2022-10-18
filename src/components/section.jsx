import React from 'react'
import Rick1 from '../images/rick_1.png'
import Title from '../images/title_1.png'
import '../styles/section.css'

function Section() {
  return (
    <div className='container-section'>
        <div className='section'>
            <div className='section-rick'>
          <img src={Rick1} alt="" />
          </div>
          <div className='section-title'>
          <img src={Title} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Section