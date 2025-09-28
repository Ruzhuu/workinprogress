import { useState } from 'react'
import touchGrass from './assets/Touchgrass.png'
import cloud from './assets/Cloud.png'
import eye from './assets/Eye.png'
import sun from './assets/Sun.png'
import './Homepage.css'

function Homepage() {

  return (
    <>
     
     <div className="pageColumn pageColumn--title">

        <img src={touchGrass} className="pageColumn pageColumn--img" alt="Touching grass"/>

        
        <div className="textGroup textGroup--title">
        <h1> WORK IN PROGRESS </h1>
        <h2> <i> a socratica node @ Penn. </i> </h2>

      </div>

      <div className="textGroup">
      <img src={sun} className="icon" alt="Touching grass"/>
      <h2> What is WIP? </h2>
      <h2> We are a group of builders, creatives, musicians, designers, engineers etc. who get together every week to work on personal projects together.  </h2>
      </div>

      <div className="textGroup">
      <img src={eye} className="icon" alt="Touching grass"/>
      <h2> Our vision </h2>
      <h2> We want WIP to be a community of people who enjoy making things together - we want to carve out space in our lives for joy and playfulness.  </h2>
      </div>

      <div className="textGroup">
      <img src={cloud} className="icon" alt="Touching grass"/>
      <h2> How do I join? </h2>
      <h2> Join our mailing list and our WhatsApp group! Find updates @Penninprogress on instagram.  </h2>
      </div>

      </div>
    </>
  )
}

export default Homepage
