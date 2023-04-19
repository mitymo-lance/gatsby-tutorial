import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Gatsby">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpg"
      />
      <p><strong>Question</strong>: Does it come with Browersync style capabilities? </p>
      <p>The docs indicates it works, but I found it doesn't work with Safari.  </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Gatsby" />

export default IndexPage
