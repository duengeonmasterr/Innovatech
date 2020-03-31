
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/reusable/herosection"
import Infoblock from "../components/reusable/Infoblock"
import Contact from "../components/Contact/Contact"


const ContactusPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Herosection
      img={data.img.childImageSharp.fluid}
      title="Contact Us "
      subtitle=""
      heroclass="about-background"
    />
      
      <Infoblock heading="How can we help ?" />
      <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactusPage
