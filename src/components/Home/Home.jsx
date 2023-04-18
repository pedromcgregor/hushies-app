import React from 'react';
import CardMedium from '../Cards/CardMedium.jsx';
import HashiesBanner from '../HashieBanner/HashiesBanner.jsx'
import andresPic from '../../assets/images/F_Andres.png';
import pedroPic from '../../assets/images/F_Peter.png';
import charliePic from '../../assets/images/F_Charlie.png';


const Home = () => {
    return (
      <div className="container">
        <HashiesBanner />
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            
            <CardMedium imagen={pedroPic}
                name={"Pedro"}
                roleJob={"The Admin"}
                notes={"He is a very good fellow"}/>

          </div>
          <div className="col">

            <CardMedium imagen={andresPic}
             name={"Andres"}
              roleJob={"The Artist"}
               notes={"He is a very good fellow"} />
          
          </div>
          <div className="col">
            <div className="card-body">
              
              <CardMedium imagen={charliePic}
               name={"Charlie"}
               roleJob={"el Guapo"}
                notes={"He is a very good fellow. Football player, member od the Aquinas First division team."}
               />
            </div>
          </div>
          
        </div>
      </div>
    )
  }
  
export default Home;