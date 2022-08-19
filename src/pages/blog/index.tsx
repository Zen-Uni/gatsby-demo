import { HeadFC, graphql, Link } from 'gatsby';
import React from 'react';

export const Head: HeadFC = () => <title>Blog Page</title>

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`

export default function BlogPage(props: any) {
  console.log('props ------ ', props);
  const {data} = props;
  console.log('data ---------- ', data);
  return (
    <div>
       {
        data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </article>
        ))
      }
    </div>
  )
}