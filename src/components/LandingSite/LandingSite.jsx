// Text 55% image 45%
import React from 'react'
import CardMedium from '../Cards/CardMedium'
import CardTextSolo from '../Cards/CardTextSolo'
// import pedroPic from '../../assets/images/F_Peter.png'
// import charliePic from '../../assets/images/F_Charlie.png'

function LandingSite(props) {
  return (
    <div className="container">
      <br />
      <br />
      <br />

      <div className="row ">
        <div className="col">
          <header>{props.title}</header>
          <CardTextSolo
            paragraph={
              'Meet the aliens. They come in 7 unique colors and 5 expressions that show up when they get discovered. Some aliens like to mark themselves with unique patterns that remind them of Earthly things. The UFOs they fly are painted to resemble ships from their favorite movies and TV shows. Their appearance changes depending on the time of day and their dimension.'
            }
          />
        </div>
        <div className="col">
          <div className="card-body">
            <CardMedium
              imagen={props.imagen}
              name={'Charlie'}
              roleJob={'el Guapo'}
              notes={
                'He is a very good fellow. Football player, member od the Aquinas First division team.'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingSite
