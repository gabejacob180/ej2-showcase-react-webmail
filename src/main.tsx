import { registerLicense } from '@syncfusion/ej2-base';
import ReactDOM from 'react-dom/client';
import App from './home/App.tsx';
import './home/index.css';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhOYVBpR2Nbe05zfldFalxQVBYiSV9jS3pTcEVgWHpcc3RXQGhcWA==');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App/>
)