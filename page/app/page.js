'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from '../src/Views/LoadingScreen'
import LandingPage from '../src/Views/LandingPage'

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading, replace with your own logic (e.g. images loaded, API call, etc.)
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <LandingPage />
      )}
    </div>
  )
}
