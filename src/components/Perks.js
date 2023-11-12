import React from 'react'
import './stylesheet/Perks.css'
import { PerksItems } from '../constants/ArrayItems'
import PerkItem from './PerkItem'

function Perks() {
    return (
        <>
            <section className='perks' >
                <h3>Shop With Confidence</h3>
                <div className='perkItems ' >
                {PerksItems.map((item) => {
                           return <PerkItem
                                key={item.key}
                                img={item.img}
                                title={item.title}
                                description={item.description}
                            />
                    })}
                </div>
            </section>
        </>
    )
}

export default Perks
