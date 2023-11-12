import React from 'react'
import './stylesheet/Navbar.css'
import logo from './pictures/logo.png'
import facebook from './pictures/facebook.png'
import instagram from './pictures/instagram.png'
import downArrow from './pictures/downArrow.png'
import Button from './Button'
import  {navItems}  from '../constants/ArrayItems'

function Navbar() {
    return (
        <>
            <nav className='navbar' >
                <div className="navLogo">
                <img src={logo} alt="" />
                <p>Logoipsum</p>
                </div>
                <div className='navContent' >
                    <ul className='navMenu' >
                        {navItems.map((item)=>{
                            return <li
                                key={item.key}
                                className={item.isColor?'homeTag':''}
                            >
                                {item.title}
                                {item.isIcon?<img src={downArrow} alt="" />:''}
                            </li>
                        })}
                    </ul>
                    <div className='navSocial' >
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                    <div className='navBtns' >
                        <Button btnTitle='Get Quote' style={{border:'1px solid #74BDE0',color:'#74BDE0',backgroundColor:'#FFFF',padding:'7px 10px',borderRadius:'5px'}} />
                        <Button btnTitle='Login'style={{border:'none',color:'#FFFF',backgroundColor:'#74BDE0',padding:'7px 15px',borderRadius:'5px'}} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
