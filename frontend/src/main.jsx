import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

const myRootContainer = createRoot(document.getElementById("root"));

myRootContainer.render(<App />);
