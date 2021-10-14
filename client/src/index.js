import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware } from 'devise-axios';
import MedicationProvider from './providers/MedicationProvider';
initMiddleware()


ReactDOM.render(

  <AuthProvider>
    <MedicationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </MedicationProvider>
  </AuthProvider>,
  document.getElementById('root')
);

