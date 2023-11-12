import React from 'react'
import './stylesheet/Footer.css'
import logo from './pictures/logo.png'
import { FooterItems } from '../constants/ArrayItems'
import FooterItem from './FooterItem'
import Visa from './pictures/Visa.png'
import Paypal from './pictures/Paypal.png'
import moneyGram from './pictures/moneyGram.png'
import masterCard from './pictures/masterCard.png'

function Footer() {

  return (
    <>
      <section className='footer' >
        <div className='footerLogo' >
          <img src={logo} alt="" />
          <p>Logoipsum</p>
        </div>
        <div className="footerBody">
          {FooterItems.map((item) => (
            <div key={item.key} className='footerItemWrapper'>
              <FooterItem
                key={item.key}
                title={item.title}
                contents={item.contents}
                icons={item.icons}
              />
            </div>
          ))}
        </div>
        <div className="paymentMethods">
          <img src={Visa} alt="" />
          <img src={Paypal} alt="" />
          <img src={moneyGram} alt="" />
          <img src={masterCard} alt="" />
        </div>
        <hr />
        <p className='footerRights' >@ 2022 The <span style={{color:'#74BDE0'}} >Patchio</span> <span style={{color:'#3B7197'}} >.</span> All Right Reserved</p>
      </section>
    </>
  )
}

export default Footer
