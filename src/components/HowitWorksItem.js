import React from 'react'
import './stylesheet/HowItWorks.css'

function HowitWorksItem(props) {

    const {title,description}=props

    return (
        <>
            <section className='howItWorksItem' >
                <h2> {title} </h2>
                <p> {description} </p>
            </section>
        </>
    )
}

export default HowitWorksItem
