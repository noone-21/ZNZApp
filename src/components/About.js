import React from 'react'
import './stylesheet/About.css'
import Button from './Button'
import about from './pictures/about.png'

function About() {
  return (
    <>
      <section className='about' >
        <div className="aboutImg">
            <div className="dottedBorder"></div>
            <img src={about} alt="" />

        </div>
        <div className="aboutBody">
            <h1>About Our Company</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <Button btnTitle='View More' style={{ border: 'none', color: '#FFFF', backgroundColor: '#74BDE0', padding: '7px 15px', borderRadius: '5px' }}/>
        </div>
      </section>
    </>
  )
}

export default About
