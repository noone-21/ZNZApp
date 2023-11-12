import React from 'react'
import './stylesheet/Reviews.css'
import star from './pictures/star.png'
import emptyStar from './pictures/emptyStar.png'

function ReviewItem(props) {

    const { customerName, tag, img, date, rating } = props

    const ratingStar = Array.from({ length: rating }, (_, index) => {
        return <>  <img src={star} alt="" /></>;
    });
    const noRating = Array.from({ length: 5-rating }, (_, index) => {
        return <>  <img src={emptyStar} alt="" /></>;
    });

    return (
        <>
            <section className='reviewItem' >
                <div className='reviewItemHeader' >
                    <img src={img} alt="" />
                    <div>
                        <h3> {customerName} </h3>
                        <p> {tag} </p>
                    </div>
                </div>
                <p className='reviewDesc' > Lorem Ipsum is simply dummy text of the printing and type <br /> setting industry. Lorem Ipsum has been the industry'standard <br /> dummy text since the 1500s, when an unknown printer took a <br /> galley of type and  </p>
                <div className="reviewItemFooter">
                    <p> {date} </p>
                    <div className='rating' >
                        {ratingStar}
                        {noRating}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewItem
