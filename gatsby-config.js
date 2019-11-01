require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Shifter – WordCamp Connect`,
    description: `We're celebrating two global events this week by sponsoring WordCamp Tokyo and WordCamp US in St. Louis.`,
    author: `@getshifter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.GATSBY_TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.GATSBY_TWITTER_CONSUMER_SECRET,
          bearer_token: process.env.GATSBY_TWITTER_BEARER_TOKEN,
        },
        queries: {
          tweets: {
            endpoint: "search/tweets",
            params: {
              q: "from:getshifter",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shifter-wordcamp-connect`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
