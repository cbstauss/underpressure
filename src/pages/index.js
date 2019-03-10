import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import header from "../components/header"
import { checkPropTypes } from "prop-types";
import Carousel from 'nuka-carousel';
import logo from "../images/logo.jpg"

const IndexPage = () => (
  <Layout>
    <header></header>
    <Carousel
      autoplay={true}
      speed={5}
      swiping={false}
      enableKeyboardControls={false}
      transitionMode={'fade'}
      heightMode={'max'}
      pauseOnHover={true}
      wrapAround={true}
    >
        <div class="container">
          <Link to="/hardware"><img src="https://source.unsplash.com/SJ5TmRRSM1U/1920x1080" alt="Hardware Used in Under Pressure TPMS"/></Link>
          <div class="bottom-left">Hardware</div>
        </div>
        <div class="container">
          <Link to="/software"><img src="https://source.unsplash.com/Skf7HxARcoc/1920x1080" alt="Programming Under Pressure TPMS on PC"/></Link>
          <div class="bottom-left">Software</div>
        </div>
        <div class="container">
          <Link to="/our_team"><img src= {logo} alt="Under Pressure Logo"/></Link>
          <div class="bottom-left">Our Team</div>
        </div>
    </Carousel>
    <center>
      <h1>Underpressure. IoT TPMS Solution.</h1>
      <h5>Click an image above for more information.</h5>
    </center>
  </Layout>
)

export default IndexPage
