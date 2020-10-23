import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To My Cart',
  description: 'We sell the best Products',
}

export default Meta
