import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Background from "../components/Background"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <Background />
    </div>
  </Layout>
)

export default IndexPage
// background: `#fcfdf8`,
