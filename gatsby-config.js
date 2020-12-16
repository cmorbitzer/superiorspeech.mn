module.exports = {
  siteMetadata: {
    title: `Superior Speech Therapy`,
    description: `Therapy for all ages and communication goals via in-home or virtual sessions.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -50,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Superior Speech Therapy`,
        short_name: `Superior Speech`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        icon: `src/images/superior_speech_therapy-logo.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/icons`,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
