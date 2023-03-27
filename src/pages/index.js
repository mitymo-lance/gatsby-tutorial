import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p><strong>Question</strong>: Does it come with Browersync style capabilities? </p>
      <p>The docs indicates it works, but I found it doesn't work with Safari.  </p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
