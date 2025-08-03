import './App.css'
import LoadingScreen from './Views/LoadingScreen'
import LandingPage from './Views/LandingPage'
import React, { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading, replace with your own logic (e.g. images loaded, API call, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <LandingPage onLoaded={() => setLoading(false)} loading={loading} />
      )}
    </div>
  );
}

export default App
