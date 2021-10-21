import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Welcome from './components/shared/Welcome';
import Medications from './components/medications/Medications';
import ShowMedication from './components/medications/ShowMedication';
import ConnectedProfile from './components/auth/Profile';
import MyMedicine from './components/pages/MyMedicine';
const App = () => (
  <>

  <Navbar />
  <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/home" component={Home} /> 
        <ProtectedRoute exact path="/profile" component={ConnectedProfile} /> 
        <ProtectedRoute exact path="/medications/" component={MyMedicine} />
        <ProtectedRoute exact path="/medications/:id" component={ShowMedication} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>

  </>
)

export default App;
