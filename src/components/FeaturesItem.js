import React from 'react'
import './stylesheet/FeatureItem.css'

function FeaturesItem(props) {

    const {img,title,description,imgBg,bodyBg}=props

    return (
        <>
            <div className='featureItem' >
                <img style={{backgroundColor:imgBg?'#FFC217':'#FFFF'}} src={img} alt="" />
                <div style={{backgroundColor:bodyBg?'#74BDE0':'none'}}  className='ftrItemBody' >
                    <h2>{title}</h2>
                    <p> {description} </p>
                </div>
            </div>
        </>
    )
}

export default FeaturesItem
