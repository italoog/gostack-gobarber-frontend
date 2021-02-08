import React from 'react';

import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobalStyle from './style/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Italo' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
  </>
);
export default App;
