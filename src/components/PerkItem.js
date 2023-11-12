import React from 'react'
import './stylesheet/Perks.css'

function PerkItem(props) {

    const {img,title,description} =props

  return (
    <>
        <section className='perkItem' >
            <img src={img} alt="" />
            <h2> {title} </h2>
            <p> {description} </p>
        </section>
    </>
  )
}

export default PerkItem
