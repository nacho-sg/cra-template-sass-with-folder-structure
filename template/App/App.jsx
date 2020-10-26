import React from 'react';

import { APP } from 'i18n';

import './App.scss';

const blockName = 'app';

function App() {
  return (
    <div className={blockName}>
      <header className={`${blockName}__header`}>
        {APP.HEADER}
      </header>
      <main className={`${blockName}__main`}>
        Enter your components here
      </main>
    </div>
  );
}

export default App;
