import React from 'react'
import './Contact.scss'
import InstagramIcon from "@mui/icons-material/Instagram"
import GoogleIcon from "@mui/icons-material/Google"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Contact</span>
            <div className="mail">
                <input type="text" placeholder='Enter your e-mail' />
                <button>Klick mich</button>
            </div>
            <div className="icons">
                <InstagramIcon />
                <GoogleIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact