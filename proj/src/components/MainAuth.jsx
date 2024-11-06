import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const MainAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin(true);
  const toggleSignup = () => setIsLogin(false);

  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center">
      {isLogin ? (
        <Login toggleSignup={toggleSignup} />
      ) : (
        <Signup toggleLogin={toggleLogin} />
      )}
    </div>
  );
};

export default MainAuth;
