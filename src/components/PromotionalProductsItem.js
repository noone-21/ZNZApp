import React from 'react'

function PromotionalProductsItem(props) {

    const {img,titleColor} =props

  return (
    <>
      <section className='promotionalProductsItem' >
            <img src={img} alt="" />
            <div className='promotionalProductsItemBody' >
                <h2 style={{color:titleColor?'#FFC217':'#222222'}} >Embroided Keychains</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s</p>
            </div>
      </section>
    </>
  )
}

export default PromotionalProductsItem
