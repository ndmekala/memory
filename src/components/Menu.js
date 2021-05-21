import React, { useState } from "react";
import '../styles/menu.css'



const Hamburger = (props) => {
    return (
        <div className="menu-hamburger" onClick={props.handleHamburger}>
            <span id="menu-hamburger-1"></span>
            <span id="menu-hamburger-2"></span>
            <span id="menu-hamburger-3"></span>
        </div>
    )
}

const Overlay = () => {
    return (
        <div className="menu-overlay">
            <div className="menu-link"><a href="https://www.github.com/ndmekala/memory">Repository</a></div>
            <div className="menu-link"><a href="https://ndmekala.github.io/">Portfolio</a></div>
        </div>
    )
}

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    function handleHamburger() {
        const hamburger1 = document.getElementById('menu-hamburger-1')
        const hamburger2 = document.getElementById('menu-hamburger-2')
        const hamburger3 = document.getElementById('menu-hamburger-3')
        const overlay = document.querySelector('.menu-overlay')

        if (menuOpen) {
            hamburger1.classList.remove('menu-hamburger-animate-1')
            hamburger2.classList.remove('menu-hamburger-animate-2')
            hamburger3.classList.remove('menu-hamburger-animate-3')
            overlay.classList.remove('menu-cover')
        } else {
            hamburger1.classList.add('menu-hamburger-animate-1')
            hamburger2.classList.add('menu-hamburger-animate-2')
            hamburger3.classList.add('menu-hamburger-animate-3')
            overlay.classList.add('menu-cover')
        }
        let stateCopy = menuOpen
        setMenuOpen(!stateCopy)
    }
    return (
        <nav className="menu-wrapper">
            <Overlay 
            animationClass="menu-visible"/>
            <Hamburger 
            animationClass1="menu-hamburger-animate-1" 
            animationClass2="menu-hamburger-animate-2"
            animationClass3="menu-hamburger-animate-3"
            handleHamburger={handleHamburger}/>
        </nav>
    )
}

export default Menu