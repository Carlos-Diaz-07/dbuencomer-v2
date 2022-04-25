require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: "fe1f99d0-c47e-11ec-9354-334e02da4ec3",
        objectTypes: ['posts','settings'],
        apiAccess: {
          read_key: "uEqHYstUyStVc53JMhrOXu4aL6XB13FX3qek4KXBtGNzsU2sgD",
          write_key: "nF6B2W2auoi7tHTnNDZ4Lvhd6CAi54blF5JBTlV4gwqVyojnoM",
        },
        localMedia: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
