import { Spacer, useTheme, Row, Col, Text, Divider } from '@zeit-ui/react'

const Technology = ({ data }) => {
  return (
    <section className='section-wrapper'>
      <Row>
        <Col>
          <div className='tech-container'>
            {data &&
              data.map(({ key, title, description, src }) => (
                <TechPlack4
                  key={key}
                  title={title}
                  description={description}
                  src={src}
                />
              ))}
          </div>
        </Col>
      </Row>
      <style>{`
        .section-wrapper {
          padding: 2rem 0;
        }
        .tech-container {
          min-height: 65vh;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          background-color: white;
          padding: 0 4rem;
        }
        @media (max-width: 600px) {
          .tech-container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 3.125rem;
          }
        }
        @media (max-width: 1025px) {
          .tech-container {
            display: flex;
            flex-wrap: wrap;  
            justify-content: space-around;
          }
        }
      `}</style>
    </section>
  )
}

const TechPlack4 = ({ title, description, src }) => {
  return (
    <div style={{ borderStyle: 'none' }} className='zi-card pin tech-card'>
      <div className='content-wrapper'>
        <h4 className='title'>{title}</h4>
        <img
          style={{ fill: 'white' }}
          className='logos'
          src={src}
          alt={title}
        />
        <br />
        <p className='description'>{description}</p>
      </div>
      <style jsx>{`
        .logos {
          width: 50px;
          margin: auto;
        }
        .content-wrapper {
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
        }
        .tech-image {
          margin-bottom: 0.5rem;
        }
        .tech-card {
          flex: 0 1 calc(24% - 1em);
          box-sizing: border-box;
          margin: 2rem 0;
          background-color: #162140;
          color: white;
        }
        .description {
          font-size: 1.2rem;
          line-height: 1.5;
          margin: 0 0 2rem 0;
        }
        .title {
          margin: 2rem 0 0 0;
        }
        @media (max-width: 600px) {
          .tech-card {
            flex: 0 1 calc(25% - 1em);
          }
          .content-wrapper {
            padding: 1rem;
          }
        }
        @media (max-width: 1025px) {
          .tech-card {
            flex: 0 1 calc(50% - 1em);
          }
        }
      `}</style>
    </div>
  )
}

export default Technology
