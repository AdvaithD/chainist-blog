import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../css/index.css'

export default function Index ({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className='blog-posts'>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Link to={post.frontmatter.path} className='blog-post-preview card' key={post.id}>
              <div className="card-body">
                <h5 className="blog-post-heading card-title">
                {post.frontmatter.title}
                </h5>
                <h6 className="blog-post-date card-subtitle mb-2 text-muted">{post.frontmatter.date}</h6>
              </div>
              <div className="card-body body-2">
              <p className="blog-post-body card-text">{post.excerpt}</p>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
