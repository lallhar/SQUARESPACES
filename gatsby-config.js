
module.exports = {
  siteMetadata: {
    title: 'Squarespace',
  },
  
  plugins: [


{
    resolve: `gatsby-plugin-less`,
    options: {
      path: `${__dirname}/src/layouts`,
      name: 'pages',
      },
    }, 
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/images`,
      name: 'images',
    },
  },
  'gatsby-plugin-react-helmet'
],




};
  













