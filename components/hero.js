import { useTheme, Row, Col, Text, Divider } from '@zeit-ui/react'

const Hero = ({ title, description, size }) => {
  const { palette } = useTheme()

  return (
    <Row
      align='middle'
      className='hero'
      style={{
        minHeight: `${size}vh`,
      }}
    >
      <Col span={24}>
        <div className='hero-container'>
          <div className='hero-text'>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </Col>
      <Divider />
      <style jsx>{`
        .hero-container {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 65vh;
        }
        .hero-text {
          border-bottom: 3px solid #162140;
          padding: 2rem 0 2rem;
          margin: 2rem 0 2rem;
          width: 60%;
        }
        .hero-text h1 p {
          color: #162140;
        }

        @media (max-width: 600px) {
          .hero-text {
            width: 90%;
          }
        }
      `}</style>
    </Row>
  )
}

export default Hero
