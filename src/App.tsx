import React, { useRef, useState, useEffect } from 'react'
import Headroom from 'headroom.js'
import cn from 'classnames'

import { PrimaryHeader } from './modules'
import Routes from './Routes'

const App = () => {
  const headerGroupRef = useRef(null)
  const [headerPinned, setHeaderPinned] = useState(false)

  const handlePinHeader = () => {
    setHeaderPinned(true)
  }

  const handleUnPinHeader = () => {
    setHeaderPinned(false)
  }

  // Start Headroom (Sticky Header)
  useEffect(() => {
    const { current }: { current: string | null } = headerGroupRef
    if (current !== null) {
      const headroom = new Headroom(current, {
        tolerance: {
          up: 5,
          down: 5,
        },
        onPin: handlePinHeader,
        onUnpin: handleUnPinHeader,
      })
      headroom.init()

      return () => {
        headroom.destroy()
      }
    }
  }, [])

  return (
    <div
      className={cn('main-container', {
        'main-container--header-pinned': headerPinned,
        'main-container--header-unpinned': !headerPinned,
      })}
    >
      <PrimaryHeader ref={headerGroupRef} />
      <main>
        <Routes />
      </main>
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__copyright">License Copyright: Unknown. </p>
        </div>
      </footer>
    </div>
  )
}

export default App
