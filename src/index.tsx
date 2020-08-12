import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const AppChunk = lazy(() => import('./App'));
const SmallAppChunk = lazy(() => import('./SmallApp'));

const appContainer = document.getElementById('app');
const smallAppContainer = document.getElementById('smallapp');

const App = () => (
  <Suspense fallback={<div>Loading app</div>}>
    <AppChunk/>
  </Suspense>
);

const SmallApp = () => (
  <Suspense fallback={<div>Loading small app</div>}>
    <SmallAppChunk/>
  </Suspense>
);

if (appContainer) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    appContainer
  );
}

if (smallAppContainer) {
  ReactDOM.render(
    <React.StrictMode>
      <SmallApp />
    </React.StrictMode>,
    smallAppContainer
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
