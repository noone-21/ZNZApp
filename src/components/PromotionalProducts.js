import React from 'react'
import './stylesheet/PromotionalProducts.css'
import PromotionalProductsItem from './PromotionalProductsItem'
import { promotionalItems } from '../constants/ArrayItems'

function PromotionalProducts() {
  return (
    <>
      <section className='promotionalProducts' >
            <h3 >Promotional Products</h3>
            <div className='promotionalProductsItems' >
            {promotionalItems.map((item) => {
                      return  <div key={item.key} className='promotionalItemWrapper'>
                        <PromotionalProductsItem
                          key={item.key}
                          img={item.img}
                          titleColor={item.titleColor}
                        />
                      </div>
                    })}
            </div>
      </section>
    </>
  )
}

export default PromotionalProducts
