import React from 'react'
import '../Services/Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Card from '../../Components/Card/Card'
import Humble from '../../img/humble.png'
import Resume from '../../Components/Services/Resume - 2023-12-19.pdf'

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <spane>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </spane>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            
            <div className="blur s-blur" style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left:'14rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma, sketch, photoshop, Adobe, Adobe xd"}
                />
            </div>
            {/* Second card */}
            <div style={{top:"12rem", left:'-4rem'}}>
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={"Html, Css, Javascript, React"}
                />
            </div>
            {/* Third card */}
            <div style={{top:"19rem", left:'12rem'}}>
                <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                />
            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services