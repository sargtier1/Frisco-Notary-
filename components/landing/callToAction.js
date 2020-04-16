import { useRouter } from 'next/router'

import { Row, Button } from '@zeit-ui/react'

export default function CallToAction() {
  const router = useRouter()
  return (
    <>
      <Row justify='center' align='middle'>
        <div className='call-to-wrapper'>
          <Button type='success' shadow onClick={() => router.push('/contact')}>
            Book an appointment
          </Button>
        </div>
      </Row>
      <style jsx>
        {`
          .call-to-wrapper {
            display: flex;
            padding: 2rem;
            margin: auto;
            height: 25vh;
            width: 100%;
            align-items: center;
            justify-content: center;
          }
          .call-to-description {
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
            .call-to-wrapper {
              flex-direction: column;
            }
          }
          @media (max-width: 840px) {
            .wrapper {
              display: flex;
              flex-direction: column;
            }
            .call-to-wrapper {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}
