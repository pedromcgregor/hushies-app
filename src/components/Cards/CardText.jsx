import React from 'react'
import './flipCard.css'

const CardText = props => {
  // const {title, paragraph1, paragraph2} = props
  // console.log(props)
  return (
    <div className="rounded-3 shadow-mb textarea-text">
      <div className="textarea">
        <h2>{props.title}</h2>
        <div className="flip-card-inner">
          <textarea className="text-area" rows="4">
            {props.paragraph1}
          </textarea>
          <br></br>
          <textarea className="text-area" rows="4">
            {props.paragraph2}
          </textarea>
        </div>
      </div>
    </div>
  )
}
export default CardText
