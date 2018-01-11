import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import '../css/blog-post.css'
import Footer from '../layouts/footer'

export default function Template ({
  data
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="container-fluid">
    <div className='blog-post-container container-fluid'>
      <Helmet title={`Chainist - ${post.frontmatter.title}`} />
      <div className='blog-post'>

        <h1 className="blog-post-content-title">{post.frontmatter.title}</h1>
        <p className="text-muted my-5 blog-post-content-date">{post.frontmatter.date}</p>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
    <Footer next={post.frontmatter.next} previous={post.frontmatter.previous} path={post.frontmatter.path}/>
    </div>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        next
        previous
      }
    }
  }
`
