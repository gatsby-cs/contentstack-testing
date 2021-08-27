import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  return <h1>{data.contentstackBlogpost.title}</h1>
}

// highlight-start
export const query = graphql`
  query ($id: String) {
    contentstackBlogpost(id: { eq: $id }) {
      title
    }
  }
`

export default BlogPost
