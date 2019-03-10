import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const software = () => (
  <Layout>
    <SEO title="Under Pressure Software" />
    <h1>Software</h1>
    <p>Explain software stack used to create device on Windows, Mac, and RPi/CC1312.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default software
