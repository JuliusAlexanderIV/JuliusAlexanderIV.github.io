import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "tim-hecker-imaginary-country.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{
          "boxShadow": "inset 0 0 8px 8px black",
        }}
        imgStyle={{
          "zIndex": "-1",
        }}
        
      />
    )}
  />
)
export default Background


/*render={data => (
      <div style={{ position: "relative" }}>
      <div style={{
          "boxShadow": "inset 0 0 8px 8px black",
          position: "absolute",
          width: "100%",
          height: "100%"
        }}>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        
      />
      </div>
      </div>
    )}*/
