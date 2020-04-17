import { Row, Col, Spacer, Divider, Code } from '@zeit-ui/react'
import CallTo from './callToAction'

export default function end() {
  return (
    <>
      <Row justify='center'>
        <div className='end-wrapper'>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2 className='title'>Why Choose Us?</h2>
            <h5 className='end-description'>
              At Frisco on the go Notary Service, we provide exemplary and
              efficient service to each of our customers every time. Our
              industry knowledgeable and professional staff provide quality
              services that meet your individual and business need. We don’t
              just provide services, we provide solutions. We do this by being:
              <ul>
                <li>Available 24/7 with 365-day availability</li>
                <li>Remote, and mobile for your convenience</li>
                <li>Industry knowledgeable</li>
              </ul>
              <Code>
                And, as always, we guarantee a quality and efficient service!
              </Code>
            </h5>
          </Col>
        </div>
      </Row>

      <Row>
        <Col>
          <CallTo />
        </Col>
      </Row>
      <style jsx>
        {`
          .title {
            width: 90%;
          }
          .end-img {
            width: 100%;
            height: auto;
          }
          .end-wrapper {
            background: whitesmoke;
            display: flex;
            padding: 2rem;
            margin: auto;
          }
          .end-description {
            line-height: 2.5;
            width: 90%;
          }
          a {
            cursor: text;
          }
          @media (max-width: 840px) {
            .wrapper {
              display: flex;
              flex-direction: column;
            }
            .end-wrapper {
              flex-direction: column;
            }
          }
          @media (max-width: 600px) {
            .end-description {
              line-height: 2;
            }
          }
        `}
      </style>
    </>
  )
}
