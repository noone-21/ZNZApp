import React from 'react'
import './stylesheet/Apparel.css'
import ApparelItem from './ApparelItem'
import { apparelItems } from '../constants/ArrayItems'

function Apparel() {
    return (
        <>
            <section className='apparel' >
                <h3 >Apparel</h3>
                <div className='apparelItems' >
                    {apparelItems.map((item) => {
                        return <ApparelItem
                            key={item.key}
                            title={item.title}
                            img={item.img}
                        />

                    })}
                </div>
            </section>
        </>
    )
}

export default Apparel
