import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from 'nuka-carousel';

const our_team = () => (
  <Layout>
    <SEO title="Team Under Pressure" />
    <h1>Our Team</h1>
    <Carousel
      heightMode={'first'}
      slidesToShow="5"
      disableAnimation={true}
      withoutControls={true}
      swiping={false}
      enableKeyboardControls={false}
      transitionMode={'fade'}
      heightMode={'current'}
      pauseOnHover={true}
      wrapAround={true}
    >
    <div class="container">
      <a href="#NathanMerrill"><img src="https://source.unsplash.com/random/400x800" alt="Random Picture from Unsplash"/></a>
      <div class="top-left">Nathan Merrill</div>
    </div>
    <div class="container">
      <a href="#CarlosMeza"><img src="https://source.unsplash.com/random/400x800" alt="Random Picture from Unsplash"/></a>
      <div class="top-left">Carlos Meza</div>
    </div>
    <div class="container">
      <a href="#AadityaPurani"><img src="https://source.unsplash.com/random/400x800" alt="Random Picture from Unsplash"/></a>
      <div class="top-left">Aaditya Purani</div>
    </div>
    <div class="container">
      <a href="#VijitSingh"><img src="https://source.unsplash.com/random/400x800" alt="Random Picture from Unsplash"/></a>
      <div class="top-left">Vijit Singh</div>
    </div>
    <div class="container">
      <a href="#ColbyStauss"><img src="https://source.unsplash.com/random/400x800" alt="Random Picture from Unsplash"/></a>
      <div class="top-left">Colby Stauss</div>
    </div>
    </Carousel>
    <p>
      <h3><a id="NathanMerrill">Nathan Merrill</a></h3>
      <br></br>
      <h3><a id="CarlosMeza">Carlos Meza</a></h3>
      <br></br>
      <h3><a id="AadityaPurani">Aaditya Purani</a></h3>
      <br></br>
      <h3><a id="VijitSingh">Vijit Singh</a></h3>
      Vijit Singh is a Senior studying Computer Science Engineering at University of Texas at Arlington. He was the system architect for both software and hardware systems.
      <br></br>
      <h3><a id="ColbyStauss">Colby Stauss</a></h3>
    </p>
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default our_team
