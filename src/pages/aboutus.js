import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/reusable/herosection"
import Infoblock from "../components/reusable/Infoblock"
import DualInfoblock from "../components/reusable/DualInfoblock"
import Teamphotosection from "../components/aboutus/Teamphotosection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Herosection
      img={data.img.childImageSharp.fluid}
      title="I write code "
      subtitle=""
      heroclass="about-background"
    />
      <DualInfoblock heading="A message from ceo" />
      <Infoblock heading="Our vision" />
      <Teamphotosection  />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
