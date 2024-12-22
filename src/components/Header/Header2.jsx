import React from 'react'
import headerImg from './../../assets/avatar.svg'

export default function Header2() {
  return (
    <div className='header d-flex justify-content-center align-items-center flex-column gap-4'>
      <div className='w-75 d-flex justify-content-center'>
        <img src={headerImg} className='w-25' alt="" />
      </div>
        <h1 className='text-uppercase'>Start Bootstrap</h1>
        <span>Graphic Artist - Web Designer - Illustrator</span>
    </div>
  )
}
