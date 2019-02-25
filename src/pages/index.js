import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import header from "../components/header"
import { checkPropTypes } from "prop-types";
import Carousel from 'nuka-carousel';

const IndexPage = () => (
  <Layout>
    <header></header>
    <Carousel

      autoplay={true}
      speed={1}
      enableKeyboardControls={false}
      transitionMode={'fade'}
      heightMode={'max'}
      pauseOnHover={true}

      renderBottomCenterControls={({ currentSlide, slideCount }) => (
        <div>Slide: {currentSlide + 1} of {slideCount}</div>
      )}
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide}>Previous</button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide}>Next</button>
      )}
    >
        <img src="https://source.unsplash.com/random/3840 x 2160" />
        <img src="https://source.unsplash.com/random/1920x1080" />
    </Carousel>
    <h1>Site in progress.</h1>
  </Layout>
)

export default IndexPage
