import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={styles.navbar}>
          <Link to="/home" style={styles.navItem}>Home</Link>
          <Link to="/about" style={styles.navItem}>About</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} style={styles.navButton}>Logout</button>
          ) : (
            <Link to="/login" style={styles.navItem}>Login</Link>
          )}
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
        </Routes>
      </div>
    </Router>
  );
}

// Navbar styles
const styles = {
  navbar: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navItem: {
    marginRight: '15px',
    textDecoration: 'none',
    color: 'black'
  },
  navButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'blue'
  }
};

export default App;
