import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from "gatsby-image";

import Link from 'gatsby-link'







import './change.js'


import './incopy.css'



import './slide.js'



import './bulma-carousel.min.css'





import Header from '../components/Header'

import './index.css'

import './bulma.css'

import './bootstrap.css'

import './type.js'


import './typed.min.js'




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
