import React from 'react'
import './stylesheet/PatchCategories.css'
import PatchCategoryItem from './PatchCategoryItem'
import { patchCategory } from '../constants/ArrayItems'


function PatchCategories() {
    return (
        <>
            <section className='patchCategories' >
                <div className='patchCategoryHeader' >
                    <h1>Custom Patch Categories</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an unknown printer took a galley of type. </p>
                </div>
                <div className='patchCategoryBody' >
                    {patchCategory.map((item) => {
                        return <div className='patchCategoryItemWrapper' >
                            <PatchCategoryItem
                                key={item.key}
                                title={item.title}
                                img={item.img}
                            />
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}

export default PatchCategories
