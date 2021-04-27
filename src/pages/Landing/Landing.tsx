import React, { useContext } from 'react';
import { UserContext } from '../../data/UserContext';
import Login from '../Login/Login';
import StartPage from '../StartPage/StartPage';

const Landing = () => {
  const { user } = useContext(UserContext);

  return user.authenticated ? <StartPage /> : <Login />;
};

export default Landing;
