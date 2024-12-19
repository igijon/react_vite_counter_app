import {createRoot} from 'react-dom/client';

import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

const root = createRoot(document.getElementById('root'));
//root.render(<HelloWorldApp/>);
root.render(<FirstApp/>);
