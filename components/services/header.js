import Router from 'next/router'
import { CornerDownLeft } from 'react-feather'
import { Text, Image, Spacer } from '@zeit-ui/react'
import Date from './date'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <div className='post-header'>
      <div className='coverImage'>
        <Image
          className='post-image'
          width='100%'
          height='auto'
          src={coverImage}
        />
      </div>
      <style jsx>{`
        .back {
          cursor: pointer;
        }
        .subtitle {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .post-image {
          height: 450px;
        }
        .post-header {
          width: 60%;
          margin: auto;
        }
        @media (max-width: 840px) {
          .post-image {
            height: 250px;
          }
          .post-header {
            padding: 1rem;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
