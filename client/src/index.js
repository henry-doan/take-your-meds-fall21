import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware } from 'devise-axios';
import MedicationProvider from './providers/MedicationProvider';
import CommentProvider from './providers/CommentProvider'
import './index.css';

initMiddleware()


ReactDOM.render(

  <AuthProvider>
    <MedicationProvider>
      <CommentProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CommentProvider>
    </MedicationProvider>
  </AuthProvider>,
  document.getElementById('root')
);

