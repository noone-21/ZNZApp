import React from 'react'
import './stylesheet/Footer.css'

function FooterItem(props) {

    const { title, contents, icons } = props

    return (
        <>
            <section className='footerItem' >
                <h2> {title} </h2>
                {contents.map((item, index) => {
                    return <p style={{ color: title === 'Contact Us' && index === 0 ? '#74BDE0' : '#868686' }} > {item} </p>
                })}
                <div className="footerSocials">
                {icons?icons.map((item, index) => {
                    return <img src={item} alt="" />
                }) : '' }
                </div>
            </section>
        </>
    )
}

export default FooterItem
