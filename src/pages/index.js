import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosection from "../components/reusable/herosection"
import Infoblock from "../components/reusable/Infoblock"
import DualInfoblock from "../components/reusable/DualInfoblock"
import Coursecart from "../components/cart/Coursecart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Herosection
      img={data.img.childImageSharp.fluid}
      title="I write code "
      subtitle="learn code online"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <Coursecart courses={data.courses}/>
    <DualInfoblock heading="Our Team" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
