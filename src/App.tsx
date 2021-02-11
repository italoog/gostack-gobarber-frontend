import React from 'react';

import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobalStyle from './style/global';

import ToastContainer from './components/ToastContainer';

import { AppProvider } from './hooks';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyle />
  </>
);
export default App;
