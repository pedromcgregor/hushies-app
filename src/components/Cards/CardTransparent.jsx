import React from 'react'
import './flipCard.css'

const CardTransparent = props => {
  // const {title, paragraph1, paragraph2} = props
  //console.log(props)
  return (
    <div className="cardTransparent">
      <div className="">
        <h2>{props.title}</h2>
        <div className="">
          <textarea className="cardTransparent" rows="4">
            {props.paragraph1}
          </textarea>
          <br></br>
          <textarea className="cardTransparent" rows="4">
            {props.paragraph2}
          </textarea>
        </div>
      </div>
    </div>
  )
}
export default CardTransparent
