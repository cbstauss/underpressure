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
    >
      <img src="https://source.unsplash.com/random/400x800"/>
      <img src="https://source.unsplash.com/random/400x800"/>
      <img src="https://source.unsplash.com/random/400x800"/>
      <img src="https://source.unsplash.com/random/400x800"/>
      <img src="https://source.unsplash.com/random/400x800"/>
    </Carousel>
    <p>Site in progress.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default our_team
