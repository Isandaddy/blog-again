import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from '@material-ui/core/CardActionArea'
import Divider from "@material-ui/core/Divider"

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
    <div style={{ maxWidth: `800px`, marginBottom: `1.45rem` }}>
     <h4>{data.allMarkdownRemark.totalCount}posts</h4>
	 <Divider/>
     <div>
      {data.allMarkdownRemark.edges.map(
        ({node}) => (
		<div>	
          <Card key={node.id}>
			<CardContent>	
				<Link to={node.fields.slug}>
					<CardActionArea>
					  <h3 style={{
							marginBottom: `rhythm(1 / 4)`,
						  }}>
							{node.frontmatter.title}
					  </h3>
					  <small>{node.frontmatter.date}</small>
					  <p>{node.excerpt}</p>
					</CardActionArea>
				</Link>
			</CardContent>
          </Card>
		  <Divider/>
		</div>
        )
      )}
     </div>
    </div>
  </Layout>
)
export default IndexPage
