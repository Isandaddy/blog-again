import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
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
          fields {
            slug
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
     <h4>{data.allMarkdownRemark.totalCount}posts</h4>
     <header>
      {data.allMarkdownRemark.edges.map(
        ({node}) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3 style={{
                    marginBottom: `rhythm(1 / 4)`,
                  }}>
                    {node.frontmatter.title}
              </h3>
              <small>{node.frontmatter.date}</small>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        )
      )}
     </header>
    </div>
  </Layout>
)
export default IndexPage
