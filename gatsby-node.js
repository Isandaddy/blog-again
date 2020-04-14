/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/blog-post.js')
  const result = await graphql(
    `
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      }
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
      }
  }



  // exports.createPages = ({ graphql, actions }) => {
  //   const { createPage } = actions
  //   return  graphql(`
  //     query {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //       result.data.allMarkdownRemark.edges.forEach(({node}) => {
  //           createPage({
  //               path: node.fields.slug,
  //               component: path.resolve(`./src/templates/blog-post.js`),
  //               context: {
  //                   slug: node.fields.slug,
  //               },
  //           })
  //       })
  //   })
  // }