import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PostBox from '../components/postBox'

import styles from './posts.module.scss'

const Posts = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
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
        `,
    )

    const posts = data.allMarkdownRemark.edges

    const postList = posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
            <PostBox
                slug={node.fields.slug}
                title={title}
                date={node.frontmatter.date}
                description={node.frontmatter.description}
                excerpt={node.excerpt}
            />
        )
    })

    return <div className={styles.container}>{postList}</div>
}

export default Posts
