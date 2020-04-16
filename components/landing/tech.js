import { Spacer, useTheme, Row, Col, Text, Divider } from '@zeit-ui/react'

const Technology = () => {
  const { palette } = useTheme()

  return (
    <section
      style={{ backgroundColor: `${palette.successLight}` }}
      className='section-wrapper'
    >
      <Row gap={4}>
        <Col span={24}>
          <Text style={{ color: 'white' }} h2>
            What We Do
          </Text>
          <Divider />
        </Col>
      </Row>
      <div className='tech-container'>
        {softData &&
          softData.map(({ key, title, description, src }) => (
            <TechPlack4
              key={key}
              title={title}
              description={description}
              src={src}
            />
          ))}
      </div>
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
          background-color: ${palette.successLight};
        }
        @media (max-width: 600px) {
          .tech-container {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
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
  const { palette } = useTheme()
  return (
    <div style={{ borderStyle: 'none' }} className='zi-card pin tech-card'>
      <div className='content-wrapper'>
        <h4>{title}</h4>
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
          flex: 0 1 calc(25% - 1em);
          box-sizing: border-box;
          margin: 2rem 0;
          background-color: ${palette.successLight};
          color: white;
        }
        .description {
          font-size: 1.2rem;
          line-height: 1.5;
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

const softData = [
  {
    key: 1,
    title: 'Service 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    src: './icons/layout.svg',
  },
  {
    key: 2,
    title: 'Service 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    src: './icons/code.svg',
  },
  {
    key: 3,
    title: 'Service 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    src: './icons/tool.svg',
  },
  {
    key: 4,
    title: 'Service 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    src: './icons/smartphone.svg',
  },
  {
    key: 5,
    title: 'Service 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    src: './icons/inbox.svg',
  },
  {
    key: 6,
    title: 'Service 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    src: './icons/book-open.svg',
  },
  {
    key: 7,
    title: 'Service 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    src: './icons/search.svg',
  },
]

export default Technology
