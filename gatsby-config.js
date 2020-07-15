require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Malice`,
        author: {
            name: `Richard Lenkovits`,
        },
        description: `There is no light.`,
        siteUrl: `https://malice.com/`,
        social: {
            twitter: `malice`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        {
            resolve: 'gatsby-source-s3-asset',
            options: {
                bucketName: 'malice-resources',
                domain: 's3.eu-central-1.amazonaws.com',
                protocol: 'https', // [optional] Default to `https`.
                publicDomain: 'malice-resources.s3.eu-central-1.amazonaws.com',
                accessKeyId: process.env.S3_ACCESS_ID, // You can also use something like process.env.AWS_ACCESS_KEY
                secretAccessKey: process.env.S3_ACCESS_KEY,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Cinzel`,
                        subsets: [`latin`],
                        variants: [`200`, `300`, `400`, `600`, `700`, `800`],
                    },
                    {
                        family: `Grenze Gotisch`,
                        subsets: [`latin`],
                        variants: [`100`, `400`, `700`, `900`],
                    },
                    {
                        family: `Crimson Text`,
                        variants: [`400`, `600`, `700`],
                    },
                    {
                        family: `Roboto`,
                        subsets: [`latin`],
                        variants: [`400`, `600`, `700`],
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Malice`,
                short_name: `Malice`,
                start_url: `/`,
                background_color: `#0d0b12`,
                theme_color: `#710934`,
                display: `minimal-ui`,
                icon: `content/assets/malice_logo.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
