import React from 'react'
import './stylesheet/HowItWorks.css'
import HowitWorksItem from './HowitWorksItem'
import Rectangle from './pictures/Rectangle.png'

function HowItWorks() {

    let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"

    const bodyText = Array.from({ length: 3 }, (_, index) => {
        return <> <HowitWorksItem key={index} title='Our Work' description={description} />
            <HowitWorksItem key={index} title='Planning' description={description} /> </>;
    });
    const bodyImg = Array.from({ length: 3 }, (_, index) => {
        return  <img key={index} src={Rectangle} alt="" />;
    });

    return (
        <>
            <section className='howItWorks' >
                <div className='howItWorksHeader' >
                    <hr />
                    <h2>How it Works</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type. </p>
                </div>
                <div className='howItWorksBody' >
                    <div className='bodyLeft' >
                        {bodyText}
                    </div>
                    <div className='bodyRight' >
                        {bodyImg}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks
