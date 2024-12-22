import React from 'react'
import cake from './../../assets/cake.png'
import circus from './../../assets/circus.png'
import game from './../../assets/game.png'
import house from './../../assets/house.png'
import safe from './../../assets/safe.png'
import sub from './../../assets/submarine.png'

export default function Portfolio() {
  return (
    <div className='portfolio mt-5 container'>
        <h2 className='d-flex justify-content-center py-3'>PORTFOILIO</h2>
        <div className="img-port d-flex justify-content-center gap-4 flex-wrap ">
            <div className="port-img">
                <img src={house} className='img-fluid' alt="" />
            </div>
            <div className="port-img ">
                <img src={cake} className='img-fluid' alt="" />
            </div>
            <div className="port-img">
                <img src={circus} className='img-fluid' alt="" />
            </div>
            <div className="port-img">
                <img src={game} className='img-fluid' alt="" />
            </div>
            <div className="port-img">
                <img src={safe} className='img-fluid' alt="" />
            </div>
            <div className="port-img">
                <img src={sub} className='img-fluid' alt="" />
            </div>
        </div>
    </div>
  )
}
