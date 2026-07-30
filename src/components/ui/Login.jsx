import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignInAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const { login, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');

    if (!username || !password) {
      setLoginError('Please enter both username and password');
      setLoading(false);
      return;
    }

    const result = await login(username, password);
    if (!result.success) {
      setLoginError(result.error || 'Login failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <h1>Admin Login</h1>
          <p>Catholic Diocese of Malakal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faUser} /> Username or Email
            </label>
            <input
              type="text"
              placeholder="Enter your username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              autoFocus
            />
          </div>

          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faLock} /> Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {(loginError || error) && (
            <div className="login-error">
              <FontAwesomeIcon icon={faLock} /> {loginError || error}
            </div>
          )}

          <button 
            type="submit" 
            className="btn-login" 
            disabled={loading}
          >
            {loading ? (
              <><FontAwesomeIcon icon={faSpinner} spin /> Logging in...</>
            ) : (
              <><FontAwesomeIcon icon={faSignInAlt} /> Login</>
            )}
          </button>

          <div className="login-footer">
            <p>Default admin credentials:</p>
            <p className="login-hint">Username: <strong>admin</strong> | Password: <strong>admin123</strong></p>
            <p className="login-note">Please change default password after first login.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;