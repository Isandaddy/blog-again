/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  //children은 Layout으로 감싼 하위 자식들이다.
  console.log(children);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div style={{
          display: `flex`
        }}>
          <aside style={{
            width: `15%`, 
            background: `#1E90FF`,
            marginRight: `1rem`
          }}>
              {data.site.siteMetadata.author}
          </aside>
          <main style={{
            width: `85%`,  
          }}> 
              {children}
          </main>
        </div>  
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
