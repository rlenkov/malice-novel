import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Posts from '../components/posts'

const BlogIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title='All posts' />
            <Posts />
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
