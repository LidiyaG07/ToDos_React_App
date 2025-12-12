import { createRoot } from 'react-dom/client';
import Provider from 'react-redux/es/components/Provider';
import { store } from './store';

import App from 'src/App';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
