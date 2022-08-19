import { graphql, HeadFC, Link, useStaticQuery } from "gatsby";
import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

export default function Main() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `)

  return (
    <>
      <div>this is Main Page</div>
      <StaticImage
        src='../images/icon.png'
        alt='this is a page'
      />
      <div>the metadata is: {data.site.siteMetadata.title}</div>
      <div>theme is: {data.siteBuildMetadata.buildTime}</div>
      <Link to='/blog'>link to blog</Link>
    </>
  )
}

export const Head: HeadFC = () => <title>Main Page</title>