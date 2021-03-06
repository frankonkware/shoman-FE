/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@material-ui/core"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
        }}
      >
        <main>{children}</main>
        <footer>
          <Grid className="footerWrapper">
            <Grid item md={8} className="footerItem">
              Let's Chat - shomancodes@gmail.com
            </Grid>
            <Grid item md={4} className="footerItem">
              <Link to="/code-of-conduct" className="footerLink">Code Of Conduct </Link> | &nbsp;
              <Link to="/privacy"  className="footerLink">Privacy </Link> 
              | ©
              {new Date().getFullYear()}
            </Grid>
          </Grid>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
