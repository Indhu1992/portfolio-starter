import React from 'react'
import '../Intro/Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../../Components/FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I am</span>
                <span>Indhumathi Chandrashekar</span>
                <span>Frontend Developer with four years 
                    of experience in web development, producing the 
                    Quality work
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                {/* <a href=""></a> */}
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'74%'}}>
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
            </div>
            <div style={{top:'18rem', left:'9rem'}}>
                <FloatingDiv image={thumbup} txt1="Best" txt2="Design"/>
            </div>
            {/* blur divs */}
            <div className="blur" style={{background:'rgb(238 210 255)'}}>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
            </div>
        </div>
    </div>
  )
}

export default Intro
