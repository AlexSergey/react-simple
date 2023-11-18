import { createRoot } from 'react-dom/client';

import { App } from './app';

const container = document.body;

const root = createRoot(container as HTMLElement);

root.render(<App />);
