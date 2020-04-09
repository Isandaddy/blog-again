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
          title
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
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div style={{
          display:`block`, 
          clear:`both`
          }}>
          <aside style={{
            position: `fixed`,
            bottom: `0`,
            width: `20%`,
            top:`60`,
            backgroundColor: `#555`
            }}>
              나 소개
          </aside>
          <main style={{
            float:`right`,
            width: `80%`
            }}>
              {children}
          </main>
        </div>
        <footer style={{
          position: `absolute`,
          height: `60px`,
          width: `100%`
        }}>
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
