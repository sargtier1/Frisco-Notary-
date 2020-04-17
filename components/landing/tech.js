import { useRouter } from 'next/router'
import {
  useTheme,
  Row,
  Col,
  Text,
  Divider,
  Card,
  Spacer,
  Button,
} from '@zeit-ui/react'

const Technology = () => {
  const router = useRouter()
  const { palette } = useTheme()

  return (
    <section className='section-wrapper'>
      <Spacer y={2} />
      <Row gap={4}>
        <Col span={24}>
          <Text h2>What We Do</Text>
        </Col>
      </Row>
      <Row gap={1}>
        <Col>
          <div className='wrapper'>
            <Card
              style={{
                width: '100%',
                height: '100%',
                maxWidth: '350px',
              }}
              shadow
            >
              <div className='card-wrapper'>
                <h3>Notary Services</h3>
                <Divider />
                <img
                  src='./assets/Electric_car_SVG.svg'
                  className='note-img'
                  alt='electric car'
                />
                <Spacer y={1.5} />
                <p className='desc'>
                  We provide remote and online notary services so you can get
                  back to running you business
                </p>
                <Button
                  onClick={() => router.push('/services')}
                  type='success'
                  ghost
                >
                  Learn More
                </Button>
              </div>
            </Card>
            <Spacer y={2} />
            <Card
              style={{ width: '100%', height: '100%', maxWidth: '350px' }}
              shadow
            >
              <div className='card-wrapper'>
                <h3>Legal Services</h3>
                <Divider />
                <img
                  src='./assets/Online_education_SVG.svg'
                  className='note-img'
                  alt='legal books'
                />
                <Spacer y={1.5} />
                <p className='desc'>
                  Our legal services help ensure you don't miss anything during
                  the tumultuous legal process
                </p>
                <Button
                  onClick={() => router.push('/services')}
                  type='success'
                  ghost
                >
                  Learn More
                </Button>
              </div>
            </Card>
            <Spacer y={2} />
          </div>
        </Col>
      </Row>
      <Spacer y={2} />
      <style jsx>{`
        .note-img {
          width: 350px;
          height: 250px;
        }
        .desc {
          width: 325px;
        }
        .wrapper {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .card-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 600px) {
          .wrapper {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default Technology
