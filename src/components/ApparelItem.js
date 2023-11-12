import React from 'react'
import './stylesheet/Apparel.css'

function ApparelItem(props) {

    const {title,img} =props

  return (
    <>
      <section className='apparelItem' >
        <img src={img} alt="" />
        <p>{title}</p>
      </section>
    </>
  )
}

export default ApparelItem
