import React from 'react'
// import CardMedium from '../Cards/CardMedium'
// import pedroPic from '../../assets/images/F_Peter.png'
//import CardText from '../Cards/CardText'
import CardTransparent from '../Cards/CardTransparent'
const para1 =
  'Welcome to the Mothership. You like the view of Earth? We are a collection of 10,000 aliens created in the Ethereum multiverse looking to help human advancement ... or to mess with you, depending on the day. We often return here to the Mothership to escape the chaos that is humankind'
const para2 = `We have been spotted hovering around some of the world's most recognizable and mysterious locations, sporting different disguises, and in different dimensions. We are quite photogenic and we hope you appreciate us for the works of art we are.`

function Roadmap() {
  return (
    <div className="container">
      <CardTransparent
        title={'Roadmap'}
        paragraph1={para1}
        paragraph2={para2}
      />
    </div>
  )
}
export default Roadmap
