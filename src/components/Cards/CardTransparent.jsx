import React from 'react'
import './flipCard.css'

const CardTransparent = props => {
  // const {title, paragraph1, paragraph2} = props
  //console.log(props)
  return (
    <div className="cardTransparent">
      <div className="">
        <h2>{props.title}</h2>
        <div className="PedroText">
          <p readOnly className="cardTransparent" rows="4">
            {props.paragraph1}
          </p>
          {/* <br></br> */}
          <p readOnly className="cardTransparent" rows="4">
            {props.paragraph2}
          </p>
        </div>
      </div>
    </div>
  )
}
export default CardTransparent
