import { Row, Col, Spacer, Image, Card, Divider } from '@zeit-ui/react'

export default function ServiceIntro() {
  return (
    <>
      <Row justify='center'>
        <div className='services-wrapper'>
          {servicesData &&
            servicesData.map(({ key, title, description, src }) => (
              <ServiceCard
                key={key}
                title={title}
                description={description}
                src={src}
              />
            ))}
        </div>
      </Row>
      <style jsx>
        {`
          .services-wrapper {
            display: flex;
            padding: 2rem;
            margin: auto;
            min-height: 90vh;
          }
          .services-description {
            line-height: 2;
          }
          a {
            cursor: text;
          }
          @media (max-width: 840px) {
            .wrapper {
              display: flex;
              flex-direction: column;
            }
            .services-wrapper {
              flex-direction: column;
            }
          }
          @media (max-width: 840px) {
            .wrapper {
              display: flex;
              flex-direction: column;
            }
            .services-wrapper {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

function ServiceCard({ title, description, src }) {
  return (
    <>
      <Col
        span={24}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='card-wrapper'>
          <Card style={{ width: '100%', height: '100%' }} shadow>
            <h3>{title}</h3>
            <Divider />
            <Image src={src} width='100%' />
            <Spacer y={1.5} />
            <p>{description}</p>
          </Card>
        </div>
      </Col>
      <Spacer y={2} />
      <style jsx>{`
        @media (mix-width: 840px) {
          .card-wrapper {
            min-height: 685px;
          }
        }
      `}</style>
    </>
  )
}

const servicesData = [
  {
    key: 1,
    title: 'Web Development',
    description:
      'We can help your business with everything from designing that perfect website to bringing the experience to life through custom software solutions. We can assist with third party integrations, to ensure your workflow flows smoothly. We know endless problems arise with any business - no matter what tech issue you come across, big or small, we are here to help.',
    src: './assets/engineer.svg',
  },
  {
    key: 2,
    title: 'Internet Marketing',
    description:
      'Our mission at N-Fusion is to use everything at our disposal to bring you more business online. We do this through a variety of digital marketing tactics including: email campaigns, social media marketing, digital advertizing, and much more. We will track the trends of your users so you can rest easy knowing you made the smart move with user outreach and retention.',
    src: './assets/marketing.svg',
  },
]
