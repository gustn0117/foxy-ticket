'use client'

import { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getGtag = (): ((...args: any[]) => void) | undefined =>
  typeof window !== 'undefined' ? (window as any).gtag : undefined

export default function GtagConversion() {
  useEffect(() => {
    const fire = () => {
      const gtag = getGtag()
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          send_to: 'AW-17949755839/reQpCPrfvvgbEL-Tju9C',
        })
      }
    }

    if (getGtag()) {
      fire()
    } else {
      const interval = setInterval(() => {
        if (getGtag()) {
          fire()
          clearInterval(interval)
        }
      }, 100)
      return () => clearInterval(interval)
    }
  }, [])

  return null
}
