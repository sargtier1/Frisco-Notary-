import Layout from '../../components/layout'
import { Row, Col, Spacer, Tabs, Button } from '@zeit-ui/react'
import ServiceList from '../../components/services/serviceList'
import { getAllPosts } from '../../lib/api'
import Hero from '../../components/hero'
import Tech from '../../components/services/tech'

export default function ServicesPage({ allPosts }) {
  return (
    <Layout title='Services'>
      <Hero
        title='Services We Offer'
        description='Learn more about and begin a service with us'
        size='55'
      />
      <Spacer y={1} />
      <Row justify='space-around' gap={0.8}>
        <div className='btn-wrapper'>
          <Col span={12}>
            <Button
              shadow
              style={{
                width: '250px',
                height: '50px',
              }}
            >
              <h5 style={{ margin: 0 }}>Book an Appointment</h5>
            </Button>
          </Col>
          <Spacer y={5} />
          <Spacer x={3} />
          <Col span={12}>
            <Button
              shadow
              style={{
                width: '250px',
                height: '50px',
              }}
            >
              <h5 style={{ margin: 0 }}>Start an Online Notary</h5>
            </Button>
          </Col>
        </div>
      </Row>
      <Spacer y={6} />
      <Row justify='center' gap={0.8}>
        <Col span={24}>
          <Tabs
            initialValue='1'
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Tabs.Item label='Notary Services' value='1'>
              <Tech data={noteData} />
            </Tabs.Item>
            <Tabs.Item label='Legal Services' value='2'>
              <Tech data={legalData} />
            </Tabs.Item>
          </Tabs>
        </Col>
      </Row>
      <style jsx>{`
        .tabs header {
          overflow-x: scroll;
          text-align: center;
        }
        .btn-wrapper {
          display: flex;
          justify-content: space-around;
        }
        @media (max-width: 840px) {
          flex-direction: column;
        }
      `}</style>
    </Layout>
  )
}

const noteData = [
  {
    key: 1,
    title: 'Online Remote Notary',
    description: 'Lorem ipsum dolor',
    src: './icons/layout.svg',
  },
  {
    key: 2,
    title: 'Mobile Notary',
    description: 'Lorem ipsum dolor',
    src: './icons/code.svg',
  },
  {
    key: 3,
    title: 'Oath for deposition',
    description: 'Lorem ipsum dolor',
    src: './icons/tool.svg',
  },
  {
    key: 4,
    title: 'Apostille Certification',
    description: 'Lorem ipsum dolor',
    src: './icons/smartphone.svg',
  },
  {
    key: 5,
    title: 'Loan Closing',
    description: 'Lorem ipsum dolor',
    src: './icons/inbox.svg',
  },
  {
    key: 6,
    title: 'Will Signing',
    description: 'Lorem ipsum dolor',
    src: './icons/book-open.svg',
  },
]

const legalData = [
  {
    key: 1,
    title: 'Document Preparation',
    description: 'Lorem ipsum dolor',
    src: './icons/layout.svg',
  },
  {
    key: 2,
    title: 'Contract Review',
    description: 'Lorem ipsum dolor',
    src: './icons/code.svg',
  },
  {
    key: 3,
    title: 'Signature Witness',
    description: 'Lorem ipsum dolor',
    src: './icons/tool.svg',
  },
  {
    key: 4,
    title: 'I-9 Employment Eligibility',
    description: 'Lorem ipsum dolor',
    src: './icons/smartphone.svg',
  },
  {
    key: 5,
    title: 'Loan Closing',
    description: 'Lorem ipsum dolor',
    src: './icons/inbox.svg',
  },
  {
    key: 6,
    title: 'Will Signing',
    description: 'Lorem ipsum dolor',
    src: './icons/book-open.svg',
  },
]

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage'])

  return {
    props: { allPosts },
  }
}
