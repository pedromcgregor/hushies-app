import React from 'react'
//import PropTypes from 'prop-types'
import './flipCard.css'

const CardImage = props => {
  // const {image} = props
  // const {width, height} = props
  console.log(props)
  return (
    <div className="rounded-3 shadow-mb">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="imagen-esquina"
              src={props.imagen}
              alt="Avatar"
              // style={{ width: props.width, height: props.height }}
              width={props.width || '450px'}
              height={props.height || '450px'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardImage
