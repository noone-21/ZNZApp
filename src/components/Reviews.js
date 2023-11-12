import React from 'react'
import './stylesheet/Reviews.css'
import leftArrow from './pictures/vectorLeft.png'
import rightArrow from './pictures/vectorRight.png'
import { customerReviews } from '../constants/ArrayItems'
import ReviewItem from './ReviewItem'

function Reviews() {
    return (
        <>
            <section className='reviews' >
                <div className='reviewsHeader' >
                    <h2>What Our Customer Says</h2>
                    <div className='reviewsNavigation' >
                        <img src={leftArrow} alt="" />
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
                <div className="reviewsBody">
                {customerReviews.map((item) => {
                    //   return  <div key={item.key} className='promotionalItemWrapper'>
                      return  <ReviewItem
                          key={item.key}
                          customerName={item.customerName}
                          tag={item.tag}
                          img={item.img}
                          date={item.date}
                          rating={item.rating}
                        />
                    //   </div>
                    })}
                </div>
            </section>
        </>
    )
}

export default Reviews
