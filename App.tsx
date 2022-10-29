import React from 'react';
import { TaskProvider } from './src/context';
import { Home } from './src/pages';

const App = () => (
  <TaskProvider >
    <Home />
  </TaskProvider>
)

export default App