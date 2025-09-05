import './App.css'
import LoadingScreen from './Views/LoadingScreen'
import AppRoutes from './routes/AppRoutes'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading, replace with your own logic (e.g. images loaded, API call, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        {loading ? (
          <LoadingScreen />
        ) : (
          <AppRoutes />
        )}
      </div>
    </Router>
  );
}

export default App
