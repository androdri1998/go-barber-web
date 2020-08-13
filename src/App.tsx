import React from 'react';

import AppProvider from './hooks';

import SignIn from './pages/SignIn/index';
// import SignUp from './pages/SignUp/index';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
