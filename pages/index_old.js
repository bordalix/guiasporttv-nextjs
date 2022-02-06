import { Footer } from '../components/footer'
import { Features } from '../components/features'
import { Navbar } from '../components/navbar'
import { getFeatures } from '../helpers/api'
import React from 'react'

export default function Home({ features }) {
  // scroll to features now on TV
  if (process.browser) {
    setTimeout(() => {
      const now = document.getElementsByClassName('now')[0]
      if (now) now.scrollIntoView()
    }, 2000)
  }
  // events filter { sport: 'FUTEBOL } or { channel: 'NBA TV' }
  const [ filter, setFilter ] = React.useState({});
  return (
    <>
      <Navbar features={features} setFilter={setFilter} />
      <Features features={features} filter={filter} />
      <Footer />
    </>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const features = await getFeatures()
  return {
    props: {
       features,
    },
  }
}
