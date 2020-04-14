import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout' 

export default ({ data, pageContext }) => {
    const post = data.markdownRemark
    const { previous, next } = pageContext
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <hr
            style={{
                marginBottom: `1rem`,
            }}
            />
            <nav>
                <ul>
                    <li>
                        { previous && (
                            <Link to={previous.fields.slug} rel="prev">← {previous.frontmatter.title}</Link>
                        )}
                    </li>
                    <li>
                        { next && (
                            <Link to={next.fields.slug} rel="next">← {next.frontmatter.title}</Link>
                        )}
                    </li>
                </ul>
                
            </nav>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }

`

