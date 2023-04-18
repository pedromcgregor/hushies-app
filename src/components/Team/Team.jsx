import React from 'react'
import CardMedium from '../Cards/CardMedium'
import pedroPic from '../../assets/images/F_Peter.png'

function Team() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h1>Team</h1>
      <CardMedium
        imagen={pedroPic}
        name={'Hushies'}
        roleJob={'The Story'}
        notes={'Once apond a time'}
      />
    </div>
  )
}
export default Team
