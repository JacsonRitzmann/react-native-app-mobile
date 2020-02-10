import React from 'react';
import {StatusBar} from 'react-native';
import Routers from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routers />
    </>
  );
}
