import React from 'react'
import './stylesheet/Footer.css'

function FooterItem(props) {

    const { title, contents, icons } = props

    return (
        <>
            <section className='footerItem' >
                <h2> {title} </h2>
                {contents.map((item, index) => {
                    return <p style={{ color: title === 'Contact Us' && index === 0 ? '#74BDE0' : (title==='Apparel'&&index===4?'#000000':'#868686'),fontSize: title==='Apparel'&&index===4?'24px':'16px',fontWeight:title==='Apparel'&&index===4?'bold':'', }} > {item} </p>
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
