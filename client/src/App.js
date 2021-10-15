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
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>

  </>
)

export default App;
