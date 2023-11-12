import React from 'react'
import './stylesheet/Home.css'
import Button from './Button'
import embroidedPatches from './pictures/embroidedPatches.png'
import FeaturesItem from './FeaturesItem'
import  {featureItem}  from '../constants/ArrayItems'


function Home() {
    return (
        <>
            <section className='customPatch' >
                <div >
                    <h1>Create Custom <br /> Embroided <span style={{ color: '#74BDE0' }} >Patches</span> </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the <br /> 1500s, when an unknown printer took a galley of type and scrambled it to make <br /> a type specimen book. It </p>
                    <div className="customPatchBtns">
                        <Button btnTitle='Get Started' style={{ border: 'none', color: '#FFFF', backgroundColor: '#74BDE0', padding: '7px 15px', borderRadius: '5px' }} />
                        <Button btnTitle='Live Chat' style={{ border: '1px solid #74BDE0', color: '#74BDE0', backgroundColor: '#FFFF', padding: '7px 10px', borderRadius: '5px' }} />
                    </div>
                </div>
                <div className="cpImg">
                    <img src={embroidedPatches} alt="" />
                    <div className='ellipse' >
                    </div>
                </div>
            </section>
            <section className='banner' >
                <div>
                    <h2>The fastest way to grow your business with the leader in Technology</h2>
                    <p>Check out our options and features included.</p>
                </div>
            </section>
            <section className='features' >
                {featureItem.map((item) => {
                    return <FeaturesItem
                        key={item.key}
                        title={item.title}
                        img={item.img}
                        description={item.description}
                        imgBg={item.imgBg}
                        bodyBg={item.bodyBg}
                    />

                })}
            </section>
        </>
    )
}

export default Home
