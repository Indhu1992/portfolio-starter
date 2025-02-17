import React from 'react'
import '../../Components/Card/Card.css'

const Card = ({emoji, heading, detail, color}) => {
    return (
      <div className="card" style={{borderColor: {color}}}> 
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="button c-button">LEARN MORE</button>
      </div>
    );
  };

export default Card