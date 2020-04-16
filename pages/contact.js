import Layout from '../components/layout'
import ContactForm from '../components/contactForm.js'
import { Row, Col, Divider } from '@zeit-ui/react'
import Hero from '../components/hero'

export default function Contact() {
  return (
    <Layout title='Contact Frisco Notary'>
      <Hero
        title='Contact Frisco Notary'
        description='Contact us to set up an appointment'
        size='55'
      />
      <Row justify='center' gap={2}>
        <Col span={24}>
          <ContactForm />
        </Col>
      </Row>
      <style jsx>{``}</style>
    </Layout>
  )
}
