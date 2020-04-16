import Layout from '../components/layout'
import {
  useTheme,
  Row,
  Col,
  Code,
  Divider,
  Text,
  Spacer,
  Collapse,
} from '@zeit-ui/react'
import Hero from '../components/hero'
import data from '../lib/data/about.json'

export default function About() {
  const { palette } = useTheme()

  return (
    <Layout title='About Salvatore Argentieri'>
      <Hero
        title='About Frisco Notary'
        description='See who we are, as a company and as individuals'
        size='55'
      />
      <Row gap={2}>
        <Col span={24}>
          <h1>About content goes here</h1>
        </Col>
      </Row>
      <style jsx>{`
        .sections {
          width: 100%;
        }
        @media (max-width: 600px) {
          .mobile {
            flex=direction: column;
          }
          .sections {
            width: 50%;
          }
        }
      `}</style>
    </Layout>
  )
}
