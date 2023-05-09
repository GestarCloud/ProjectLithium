import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import cookie from 'react-cookies';
import getUserData from './getInfo'
import AppBar from './components/Header'

function App() {
  return (
    <NextUIProvider>
      <AppBar userObj={getUserData}/>
    </NextUIProvider>
  );
}

export default App;
