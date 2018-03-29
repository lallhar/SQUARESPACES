import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from "gatsby-image";

import Link from 'gatsby-link'

import $ from 'jquery'



import './change.js'


import './incopy.css'

import CMS from 'netlify-cms'







import './bulma-carousel.min.css'





import Header from '../components/Header'

import './index.css'

import './bulma.css'

import './bootstrap.css'

import './typed.js'







const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Squarespace"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
     
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}






export default TemplateWrapper
