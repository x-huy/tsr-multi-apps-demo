import { StrictMode } from 'react';
import { AppFoo } from '@my/app-foo';
import { AppBar } from '@my/app-bar';
import { useApp } from './useApp';

import './index.css';

export const AppShell = () => {
  const app = useApp();

  return (
    <StrictMode>
      <div className="p-3">
        <div className="flex gap-3 text-white bg-black p-3 my-3">
          <a href="#/foo">App Foo</a>|<a href="#/bar">App Bar</a>
        </div>
        {app === 'foo' && <AppFoo />}
        {app === 'bar' && <AppBar />}
      </div>
    </StrictMode>
  );
};
