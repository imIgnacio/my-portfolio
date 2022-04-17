import React from 'react'
import './index.css';

function Experience() {
  return (
      <section>
        <h3>⚙️ Experience</h3>
        <div className='experiences'>
          <h4>Full-Stack Web Developer | 01.22 - 04.22</h4>
          <h4>Isanto Limitada</h4>
          <p>
            First attempt to work as Freelancer. This company contacted me to build a web applicaction where fruits and vegetables can be advertised and 
            sold. I was responsible for building Single Page Application, using MERN Stack. For Front-End ReactJS library was used, in addition to it, 
            Redux to handle application state. In terms of Server Side, NodeJS was used to build all logic. GraphQL was implemented to handle API queries and
            Stripe for checkout and payments.
          </p>
          <h4>Junior Web Developer | 12.20 - 01.22</h4>
          <h4>Irizar Asia Pacific</h4>
          <p>
            As part of development team, my tasks were mainly on client side. As company was creating and designing new buses and vehicles, I had to create
            new pages where bus's information, features and special conditions were accesible. View would show bus's make, model, chassis, number of seats and
            extra color. User would see different perspectives of the bus, where they could zoom in and find all parts the bus has. If user clicks on a part, 
            it shows part's description and unique code.
            <br/>
            Besides Front-End development, I sometimes had to create new routes when new buses became available. Connecting server with database, and handling
            http requests.
          </p>
        </div>
      </section>
  )
}

export default Experience