import React from 'react'
import './stylesheet/PatchCategoryItem.css'
import rightArrow from './pictures/rightArrow.png'

function PatchCategoryItem(props) {

    const {img, title} =props

    return (
        < >
            <section className='patchItem' >
                <img src={img} alt="" />
                <div className="patchItemBody">
                    <h2>{title}</h2>
                    <p>Create embroidered patches, woven <br /> patches, leather patches, and more to <br /> show off your artwork or rep your <br /> organization.</p>
                    <div>Create Custom Patch <img src={rightArrow} alt="" /> </div>
                </div>
            </section>
        </>
    )
}

export default PatchCategoryItem
