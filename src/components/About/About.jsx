import React from 'react'
import CardImage from '../Cards/CardImage'
// import CardText from '../Cards/CardText'
import imageGIF from '../../assets/images/Scrolling.gif'
import CardTransparent from '../Cards/CardTransparent'
const para1 =
  'Welcome to the Mothership. You like the view of Earth? We are a collection of 10,000 aliens created in the Ethereum multiverse looking to help human advancement ... or to mess with you, depending on the day. We often return here to the Mothership to escape the chaos that is humankind'
const para2 = `We have been spotted hovering around some of the world's most recognizable and mysterious locations, sporting different disguises, and in different dimensions. We are quite photogenic and we hope you appreciate us for the works of art we are.`
function About() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col">
          <CardTransparent
            title={'About Hushies'}
            paragraph1={para1}
            paragraph2={para2}
          />
        </div>
        <div className="col">
          <CardImage imagen={imageGIF} />
        </div>
      </div>
    </div>
  )
}
export default About
