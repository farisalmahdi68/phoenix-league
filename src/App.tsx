import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import UserHomePage from './components/UserHomePage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      setCurrentPage('userhome');
    }
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSignUpSuccess = (authToken: string, userData: any) => {
    setToken(authToken);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleSignInSuccess = (authToken: string, userData: any) => {
    setToken(authToken);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Reset state
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'signup' && (
        <SignUpPage 
          onNavigate={handleNavigate} 
          onSignUpSuccess={handleSignUpSuccess}
        />
      )}
      {currentPage === 'signin' && (
        <SignInPage 
          onNavigate={handleNavigate} 
          onSignInSuccess={handleSignInSuccess}
        />
      )}
      {currentPage === 'userhome' && isAuthenticated && (
        <UserHomePage 
          user={user} 
          onLogout={handleLogout}
        />
      )}
    </>
  );
}

export default App;