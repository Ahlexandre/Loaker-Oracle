// LoginForm.jsx
import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSignupHovered, setIsSignupHovered] = useState(false);
  const [isSignupActive, setIsSignupActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = "Connexion à Oracle";
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '/assets/images/oracle-logo-symbol-vector.png';
    document.head.appendChild(favicon);
    
    return () => {
      document.head.removeChild(favicon);
    };
  }, []);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => !username && setIsFocused(false);

  return (
    <div className="oracle-login-container">
      <div className="login-card">
        <h1 className="login-title">Connexion à Oracle</h1>
        
        <div className="input-container">
          {isFocused || username ? (
            <label className="floating-label active">Nom utilisateur ou E-mail</label>
          ) : (
            <label className="floating-label">Nom utilisateur ou E-mail</label>
          )}
          <input
            ref={inputRef}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="login-input"
          />
        </div>

        <button className="next-button">Suivant</button>
        <a href="#" className="forgot-link">Nom utilisateur oublié ?</a>
      </div>

      <div className="signup-card">
        <h2 className="signup-title">Vous n'avez pas de compte Oracle ?</h2>
        <button 
          className={`signup-button ${isSignupActive ? 'active' : ''}`}
          onMouseEnter={() => setIsSignupHovered(true)}
          onMouseLeave={() => setIsSignupHovered(false)}
          onMouseDown={() => setIsSignupActive(true)}
          onMouseUp={() => setIsSignupActive(false)}
        >
          Créer un compte
        </button>
        
        <div className="footer-links">
          <span>© Oracle</span>
          <span>|</span>
          <span>Conditions d'utilisation</span>
          <span>|</span>
          <span>Charte de confidentialité</span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;