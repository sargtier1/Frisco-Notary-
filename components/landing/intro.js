import { Row, Col, Spacer, Image } from '@zeit-ui/react'

export default function Intro() {
  return (
    <>
      <Row justify='center'>
        <div className='intro-wrapper'>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img className='intro-img' src='./assets/map_SVG.svg' />
          </Col>
          <Spacer y={2} />
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2 className='title'>What is Frisco Notary?</h2>
            <h5 className='intro-description'>
              In 2005, Frisco “on the go” Notary Service began as a concept to
              deliver niche services in Collin County that included mobile
              notary and loan closing services. Little did we know at the time
              our business would experience tremendous growth right along-side
              of the City of Frisco. Our business has grown so much we began
              offering services throughout the Dallas Metroplex. Our service
              area now includes Collin, Denton, Dallas, Grayson, and Cooke
              County.
            </h5>
          </Col>
        </div>
      </Row>
      <style jsx>
        {`
          .title {
            width: 90%;
          }
          .intro-img {
            width: 100%;
            height: auto;
          }
          .intro-wrapper {
            background: whitesmoke;
            display: flex;
            padding: 2rem;
            margin: auto;
            min-height: 90vh;
          }
          .intro-description {
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
            .intro-wrapper {
              flex-direction: column;
            }
          }
          @media (max-width: 600px) {
            .intro-description {
              line-height: 2;
            }
          }
        `}
      </style>
    </>
  )
}
