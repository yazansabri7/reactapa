import React from 'react'
import facebook from './../../assets/facebook-brands-solid.svg'
import twitter from './../../assets/twitter-brands-solid.svg'
import linkedin from './../../assets/linkedin-in-brands-solid.svg'
export default function Footer() {
  return (
    <div className="footer py-5 mt-5">

    <footer className=' container d-flex justify-content-center align-items-center  gap-3'>
        <div className='footer-item col-4'>
            <h2>LOCATION</h2>
            <span>2215 John Daniel Drive
            Clark, MO 65243</span>
        </div>
        <div className="foooter-item col-4">
            <h2>AROUND THIS WEB</h2>
            <div className="social d-flex gap-3 w-50 justify-content-center">
                <img src={facebook}  alt="" />
                <img src={twitter}  alt="" />
                <img src={linkedin}  alt="" />

            </div>
        </div>
        <div className="footer-item col-4">
            <h2>ABOUT FREELANSER</h2>
            <span>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .</span>
        </div>
    </footer>
    </div>
  )
}
