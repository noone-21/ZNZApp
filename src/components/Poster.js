import React from 'react'
import './stylesheet/Poster.css'
import beainie from './pictures/beanie.png'
import stickers from './pictures/tags2.png'
import tags from './pictures/tags.png'
import cap from './pictures/cap.png'
import posterEllipse from './pictures/posterEllipse.png'
import darkEllipse from './pictures/darkEllipse.png'
import Button from './Button'

function Poster() {
    return (
        <>
            <section className='poster' >
                <img className='beanie' src={beainie} alt="" />
                <img className='stickers' src={stickers} alt="" />
                <img className='tags' src={tags} alt="" />
                <img className='cap' src={cap} alt="" />
                <div className='posterBody' >
                    <h2>So What Are You Waiting For?</h2>
                    <h3>Let's Make Something Unique Together!</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a <br /> type specimen book. </p>
                    <div className='posterBtns' >
                        <Button btnTitle='Get Started' style={{ border: 'none', color: '#FFFF', backgroundColor: '#74BDE0', padding: '7px 15px', borderRadius: '5px' }} />
                        <Button btnTitle='Chat With Us' style={{ border: '1px solid #74BDE0', color: '#74BDE0', backgroundColor: '#FFFF', padding: '7px 10px', borderRadius: '5px' }} />
                    </div>
                </div>
                <img className='posterEllipse' src={posterEllipse} alt="" />
                <img className="darkEllipse" src={darkEllipse} alt="" />
                <div  ></div>
                <div ></div>
            </section>
        </>
    )
}

export default Poster
