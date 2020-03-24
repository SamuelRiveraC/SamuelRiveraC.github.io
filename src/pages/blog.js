import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Posts from "../components/posts"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => (
  <Layout>
  	<SEO title="All posts" />
    <div className="blog w100" >
      <Posts postEdges={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)
export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {frontmatter: {posttype: {eq: "post"}}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`