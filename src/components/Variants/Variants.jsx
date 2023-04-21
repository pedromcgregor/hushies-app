import React from 'react'
import CardMedium from '../Cards/CardMedium'
import CardTextSolo from '../Cards/CardTextSolo'
import pedroPic from '../../assets/images/F_Peter.png'
import charliePic from '../../assets/images/F_Charlie.png'
import LandingSite from '../LandingSite/LandingSite'
import MachuPicchu from '../../assets/images/Landing Machu Picchu.webp'
import Nazca from '../../assets/images/Landing Nazca Lines Monkey.webp'
import Pyramids from '../../assets/images/Landing Pyramids of Giza.webp'
import Stone from '../../assets/images/Landing Stonehenge.webp'
import Teotihuacan from '../../assets/images/Landing Teotihuacan.webp'

function Variants() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <header>Variants</header>
      <div className="row ">
        <div className="col">
          <CardMedium
            imagen={pedroPic}
            name={'Pedro'}
            roleJob={'The Admin'}
            notes={'He is a very good fellow'}
          />
        </div>
        <div className="col">
          <CardTextSolo
            paragraph={
              'Meet the aliens. They come in 7 unique colors and 5 expressions that show up when they get discovered. Some aliens like to mark themselves with unique patterns that remind them of Earthly things. The UFOs they fly are painted to resemble ships from their favorite movies and TV shows. Their appearance changes depending on the time of day and their dimension.'
            }
          />
        </div>
        <div className="col">
          <div className="card-body">
            <CardMedium
              imagen={charliePic}
              name={'Charlie'}
              roleJob={'el Guapo'}
              notes={
                'He is a very good fellow. Football player, member od the Aquinas First division team.'
              }
            />
          </div>
        </div>
      </div>
      <header>Langing Sites</header>
      <LandingSite imagen={MachuPicchu} title={'Machu Picchu'} />
      <LandingSite imagen={Nazca} title={'Nazca Lines'} />
      <LandingSite imagen={Pyramids} title={'Pyramids of Gizau'} />
      <LandingSite imagen={Stone} title={'Stonehenge'} />
      <LandingSite imagen={Teotihuacan} title={'Teotihuacan'} />
    </div>
  )
}
export default Variants
