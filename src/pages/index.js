import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function IndexPage() {
  return <div>
    <Layout>
    <h1>Hello</h1>
    <h2>i'm stef , i'm trying to learn </h2>
    <p>besoin d'un developpeur?<Link to="/contact">Contact me</Link></p>
    </Layout>
  </div>
}
