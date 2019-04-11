import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';

export function bootstrap(): void {
  const mountPoint = document.getElementById('app');

  render(<App />, mountPoint);
}
