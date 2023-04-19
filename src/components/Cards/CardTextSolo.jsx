import React from 'react'
import './flipCard.css'

const CardTextSolo = props => {
  // const {title, paragraph1, paragraph2} = props
  // console.log(props)
  return (
    <div className="container">
      <p>{props.paragraph}</p>
    </div>
  )
}
export default CardTextSolo
