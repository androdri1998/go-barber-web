import React from 'react';

import { AuthProvider } from './hooks/AuthContext';

import ToastContaner from './components/ToastContainer';
import SignIn from './pages/SignIn/index';
// import SignUp from './pages/SignUp/index';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContaner />
      <GlobalStyle />
    </>
  );
};

export default App;
