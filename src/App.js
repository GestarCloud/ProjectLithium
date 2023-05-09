import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
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
