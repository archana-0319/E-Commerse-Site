require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteName: 'Game Store',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken:'45fe387f18a6ee7d34c4a2fe242441' },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'NjRiNWE3Y2YtYjUxZi00ODY2LThmZDgtNTE0YTUxNmE2MDMwNjM4MjcxODYyNzQyNzM0MTI0',
        autopop: true
      }
    },
  ],
}
