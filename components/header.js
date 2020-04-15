import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { throttle } from 'lodash'
import Link from 'next/link'
import { Text, Button, ButtonDropdown, Spacer } from '@zeit-ui/react'
import ToggleTheme from './toggleTheme'
import Brand from './brand'

const links = [
  { href: '/', label: 'Home', key: 1 },
  { href: '/services', label: 'Services', key: 2 },
  // { href: '/portfolio', label: 'Portfolio', key: 3 },
  { href: '/about', label: 'About', key: 4 },
]

export default function Header() {
  function useDocumentScrollThrottled(callback) {
    const [, setScrollPosition] = useState(0)
    let previousScrollTop = 0

    function handleDocumentScroll() {
      const { scrollTop: currentScrollTop } =
        document.documentElement || document.body

      setScrollPosition((previousPosition) => {
        previousScrollTop = previousPosition
        return currentScrollTop
      })

      callback({ previousScrollTop, currentScrollTop })
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250)

    useEffect(() => {
      window.addEventListener('scroll', handleDocumentScrollThrottled)

      return () =>
        window.removeEventListener('scroll', handleDocumentScrollThrottled)
    }, [])
  }

  const [shouldHideHeader, setShouldHideHeader] = React.useState(false)
  const [shouldShowShadow, setShouldShowShadow] = React.useState(false)

  const MINIMUM_SCROLL = 200
  const TIMEOUT_DELAY = 800

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? 'shadow' : ''
  const hiddenStyle = shouldHideHeader ? 'hidden' : ''
  const shadowTextDesktop = shouldShowShadow ? 'show' : 'hidden'
  const shadowText = shouldShowShadow ? 'grey' : 'white'

  const vis = {}

  const nonVis = {
    background: 'transparent',
    borderColor: 'white',
    color: 'white',
  }

  const shadowBtn = shouldShowShadow ? vis : nonVis

  function isActive(route) {
    if (route === router.pathname) {
      return
    }
  }

  return (
    <header className={`${shadowStyle} ${hiddenStyle}`}>
      <div className='center'>
        <Link href='/'>
          <a>
            <Brand shadowText={shadowText} />
          </a>
        </Link>
      </div>
      <nav className='btns-wrapper center'>
        <ul>
          {links.map(({ key, label, href }) => (
            <li key={key}>
              <Link href={href}>
                <a className={`${shadowTextDesktop}`}>{label}</a>
              </Link>
            </li>
          ))}
          <li>
            <Link href='/contact'>
              <a>
                <Button
                  style={shadowBtn}
                  className={`zi-btn auto ghost success`}
                  type='button'
                  value='contact'
                  aria-labelledby='success'
                >
                  Contact Us
                </Button>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className='center btn-wrapper'>
        <ButtonDropdown>
          <ButtonDropdown.Item style={shadowBtn} main>
            Menu
          </ButtonDropdown.Item>

          <ButtonDropdown.Item
            onClick={() => {
              Router.push('/about')
            }}
          >
            About
          </ButtonDropdown.Item>

          <ButtonDropdown.Item
            onClick={() => {
              Router.push('/services')
            }}
          >
            Services
          </ButtonDropdown.Item>

          <ButtonDropdown.Item
            onClick={() => {
              Router.push('/contact')
            }}
          >
            Contact
          </ButtonDropdown.Item>
          <ButtonDropdown.Item>
            <ToggleTheme />
          </ButtonDropdown.Item>
        </ButtonDropdown>
      </nav>
      <style jsx>{`
        .show {
          color: grey;
        }
        .hidden {
          color: white;
        }
        .section-wrapper {
          display: flex;
          justify-content: space-between;
          margin: 1rem;
        }
        .nav-content {
          width: 100%;
          height: 100%;
        }
        .btn-wrapper {
          margin: 0 2rem;
        }
        header.shadow {
          box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
          transition: background-color 200ms linear;
          background: white;
        }
        header.hidden {
          transform: translateY(-110%);
        }
        header {
          display: flex;
          width: 100%;
          height: 50px;
          flex-direction: row;
          padding: 1rem;
          justify-content: space-between;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 15;
        }
        nav > ul {
          padding: none;
        }
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        li {
          display: flex;
          padding: 6px 8px;
          margin: 1rem;
        }
        li > a {
          font-size: 1.5rem;
          text-decoration: none;
        }
        li:hover {
          color: red;
        }
        li:before {
          content: none;
        }
        @media (min-width: 840px) {
          .btn-wrapper {
            display: none;
          }
        }
        @media (max-width: 840px) {
          .btns-wrapper {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}
