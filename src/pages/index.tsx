import { HeadFC } from "gatsby";
import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

export default function Main() {
  return (
    <>
      <div>this is Main Page</div>
      <StaticImage
        src='../images/icon.png'
        alt='this is a page'
      />
    </>
  )
}

export const Head: HeadFC = () => <title>Main Page</title>