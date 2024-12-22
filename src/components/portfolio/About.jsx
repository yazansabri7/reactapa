import React from 'react'
import downloadImg from'./../../assets/download-solid.svg'

export default function About() {
  return (
    <div className="about py-5 mt-5 d-flex flex-column align-items-center justify-content-center gap-3 ">
        <h2 className='d-flex justify-content-center'>ABOUT</h2>
        <div className='para d-flex align-items-start gap-3 justify-content-center container py-3'>

            <p className='col-4 ms-auto'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className = 'col-4 me-auto' >You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>

        </div>
        <button type="button" class="btn btn-outline-light btn-lg">
          Free Download !
          </button>
    </div>
  )
}
