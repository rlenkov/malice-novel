import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import NotFound from '../components/404'

const NotFoundPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return <NotFound />
}

export default NotFoundPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
