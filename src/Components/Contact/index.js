import React from 'react'
import ring from "../../image/ring.png"
import c2Icon from "../../image/c2Icon.png"
import "./contact.css"
function Contact() {
    return (
        <div className='loaderBackgroung'>
                    <div className='loader-box'>
                    <img className="loader-ring" src={ring} alt="loading ... "/>
                    <img className="loader-c2icon" src={c2Icon} alt="loading ... "/>
                    </div>
        </div>
    )
}

export default Contact