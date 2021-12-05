import { Footer } from '../components/footer'
import { Maincontent } from '../components/maincontent'
import { Navbar } from '../components/navbar'
import { getFeatures } from '../helpers/api'
import React from 'react'

export default function Home({ features }) {
  setTimeout(() => {
    const now = document.getElementsByClassName('now')[0]
    if (now) now.scrollIntoView()
  }, 2000)
  const [ filter, setFilter ] = React.useState({});
  return (
    <>
      <Navbar features={features} setFilter={setFilter} />
      <Maincontent features={features} filter={filter} />
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
