import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import './Navbar.css'
function Navbar() {
    const[show, setShow] = useState(false);
    const navigate = useNavigate();
    const transitionNavbar = () => {
        if (window.scrollY > 100 ) {
            setShow(true);
        }  else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <div className='nav-contents'>
            <img
                onClick={()=> {navigate("/")}}
                className='nav-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                alt='logo' />

            <img
                onClick={() => {navigate("/profile")}}
                className='nav-avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='avatar' />

        </div>
        </div>
    )
}

export default Navbar