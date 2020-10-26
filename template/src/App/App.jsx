import React from 'react';

import { APP } from 'i18n';

import './App.scss';

const blockName = 'rq-app';

function App() {
  return (
    <div className={blockName}>
      <header className={`${blockName}__header`}>
        {APP.HEADER}
      </header>
    </div>
  );
}

export default App;
