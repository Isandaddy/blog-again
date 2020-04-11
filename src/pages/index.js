import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
     {/* <Image />*/}
     <h4>{data.allMarkdownRemark.totalCount}posts</h4>
     <header>
      {data.allMarkdownRemark.edges.map(
        ({node}) => (
          <div key={node.id}>
            <h3 style={{
                  marginBottom: `rhythm(1 / 4)`,
                }}>
                  {node.frontmatter.title}
            </h3>
            <small>{node.frontmatter.date}</small>
            <p>{node.excerpt}</p>
          </div>
        )
      )}
     </header>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
