import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import system_overview from "../images/tmps-system-overview.jpg"


const hardware = () => (
  <Layout>
    <SEO title="Under Pressure Hardware" />
    <h1>Hardware</h1>
    <p>Explain mobile phone, hub module, and sensor module</p>
    <img src= {system_overview} alt="System Overview of Under Pressure TPMS"/>
    <br></br>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default hardware
