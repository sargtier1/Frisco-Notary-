import Router, { useRouter } from 'next/router'
import { Feather } from 'react-feather'
const Brand = ({ shadowText }) => {
  return (
    <>
      <Feather size={45} color='black' onClick={() => Router.push('/')} />
      <style jsx>{`
        img {
          width: 45px;
          margin-top: 0.65rem;
        }
        img:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Brand
