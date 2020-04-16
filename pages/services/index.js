import Layout from '../../components/layout'
import { Row, Col, Divider } from '@zeit-ui/react'
import ServiceList from '../../components/services/serviceList'
import { getAllPosts } from '../../lib/api'
import Hero from '../../components/hero'

export default function ServicesPage({ allPosts }) {
  return (
    <Layout title='Services'>
      <Hero
        title='Services N-Fusion'
        description='Learn more about how N-Fusion can help your business'
        size='55'
      />
      <Row gap={0}>
        <Col span={24}>
          {allPosts ? (
            <ServiceList posts={allPosts} />
          ) : (
            <h1>Currently there are no posts to view, check back soon!</h1>
          )}
        </Col>
      </Row>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage'])

  return {
    props: { allPosts },
  }
}
