import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PostBox from '../components/postBox'

import styles from './posts.module.scss'

const Posts = () => {
    const [observerState, setObserverState] = useState({})
    const [boxStates, setBoxStates] = useState({})

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
                            }
                        }
                    }
                }
            }
        `,
    )

    useEffect(() => {
        const isClient = typeof window === 'object'
        if (isClient) {
            const statusObj = {}
            const boxes = posts.map(({ node }) => {
                statusObj[`post-box-${node.fields.slug}`] = false
                return document.getElementById(`post-box-${node.fields.slug}`)
            })
            setBoxStates(statusObj)

            const observer = new IntersectionObserver((entries, observer) => {
                const objectCopy = {}
                entries.forEach(entry => {
                    const elementId = entry.target.getAttribute('id')
                    objectCopy[elementId] = entry.isIntersecting ? true : false
                })
                setObserverState(objectCopy)
            })
            boxes.forEach(box => {
                observer.observe(box)
            })
        }
    }, [])

    useEffect(() => {
        const copyStates = { ...boxStates }
        let change = false
        Object.entries(observerState).map(([key, value]) => {
            if (value && copyStates[key] !== value) {
                copyStates[key] = value
                change = true
            }
        })
        if (change) {
            setBoxStates(copyStates)
        }
    }, [observerState])

    const posts = data.allMarkdownRemark.edges

    const postList = posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
            <PostBox
                key={`post-box-${node.fields.slug}`}
                slug={node.fields.slug}
                title={title}
                date={node.frontmatter.date}
                description={node.frontmatter.description}
                excerpt={node.excerpt}
                visible={boxStates[`post-box-${node.fields.slug}`]}
            />
        )
    })

    return <div className={styles.container}>{postList}</div>
}

export default Posts
