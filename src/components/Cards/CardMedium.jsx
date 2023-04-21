import React from 'react'
import './flipCard.css'

const CardMedium = props => {
  // const {name, image, role, notes} = props
  // console.log(props)
  return (
    <div className="rounded-3 shadow-mb">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="imagen-esquina"
              src={props.imagen}
              alt="Avatar"
              style={{ width: '300px', height: '300px' }}
            />
          </div>
          <div className="flip-card-back">
            <p></p>
            <h1>{props.name}</h1>
            <p>{props.roleJob}</p>
            <textarea className="text-area" rows="4">
              {props.notes}
            </textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardMedium
