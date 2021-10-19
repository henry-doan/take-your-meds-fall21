import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Switch, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
<<<<<<< HEAD
import ShowMedications from './components/medications/ShowMedication';
=======
import Welcome from './components/shared/Welcome';
>>>>>>> 6dc57652846a11726b8fe4ebf33fd57286a370da

const App = () => (
  <>

  <Navbar />
  <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
<<<<<<< HEAD
        <Route exact path="/medications/:id" component={ShowMedications}/>

        <Route component={NoMatch} />
        <ProtectedRoute exact path="/" component={Home} />
=======

        <ProtectedRoute exact path="/home" component={Home} /> 
        <Route component={NoMatch} />
>>>>>>> 6dc57652846a11726b8fe4ebf33fd57286a370da
      </Switch>
    </Container>
  </FetchUser>

  </>
)

export default App;
