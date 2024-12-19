import {createRoot} from 'react-dom/client';

import { HelloWorldApp } from './HelloWorldApp';

const root = createRoot(document.getElementById('root'));
root.render(<HelloWorldApp/>);
