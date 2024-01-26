import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, name, type, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='robots' content='index,follow' />
      <meta name='googlebot' content='index,follow'></meta>

      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />

      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />

      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content={type} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
    </Helmet>
  )
}
