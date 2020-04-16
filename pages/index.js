import Layout from '../components/layout'
import Hero from '../components/hero'
import Intro from '../components/landing/intro'
import End from '../components/landing/end'
import Tech from '../components/landing/tech'
import CallTo from '../components/landing/callToAction'

const Home = () => (
  <Layout title='Welcome to my site'>
    <Hero
      title='We are Frisco Notary Service'
      description='We offer the best in-class expertise and convenience for all your legal and notary needs!'
    />
    <Intro />
    <Tech />
    <End />
    <style jsx>{``}</style>
  </Layout>
)

export default Home
