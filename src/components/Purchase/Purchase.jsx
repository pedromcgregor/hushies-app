import React from 'react'
// import CardMedium from '../Cards/CardMedium'
import pedroPic from '../../assets/images/F_Peter.png'
//import CardTransparent from '../Cards/CardTransparent'
// import CardImage from '../Cards/CardImage'
import './Purchase.css'

const para1 =
  'Welcome to the Mothership. You like the view of Earth? We are a collection of 10,000 aliens created in the Ethereum multiverse looking to help human advancement ... or to mess with you, depending on the day. We often return here to the Mothership to escape the chaos that is humankind'
const para2 = `We have been spotted hovering around some of the world's most recognizable and mysterious locations, sporting different disguises, and in different dimensions. We are quite photogenic and we hope you appreciate us for the works of art we are.`

function Purchase() {
  return (
    <div className="body">
      <header>Purchase</header>
      <div className="main">
        <aside className="left">
          <p>{para1}</p>
          {para2}
        </aside>
        <aside className="right">
          Ledger
          <img
            className="imagen-esquina"
            src={pedroPic}
            alt="Avatar"
            width={'250px'}
            height={'250px'}
          />
          <div className="">
            Trezor
            <img
              className="imagen-esquina"
              src={pedroPic}
              alt="Avatar"
              width="250px"
              height="250px"
            />
          </div>
        </aside>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="column">
            <CardTransparent
              
              
            />
          </div>
          <div className="column">
            
          </div>
        </div>
      </div> */}
      {/* <CardMedium
        imagen={pedroPic}
        name={'Hushies'}
        roleJob={'The Story'}
        notes={'Once apond a time'}
      /> */}
    </div>
  )
}
export default Purchase
