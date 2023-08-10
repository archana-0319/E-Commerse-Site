require('dotenv').config();

module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    siteName: 'Gaming App',
=======
    siteName: 'E Commerce Gaming App',
>>>>>>> 1e9800c8a621528baf120fa2cb9032fe232e2318
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken:
          process.env.DATO_READONLY_API_KEY 
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart-advanced',
      options: {
        publicApiKey:
          process.env.SNIPCART_PUBLIC_API_KEY,
        autopop: true,
      },
    },
  ],
};
