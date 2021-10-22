import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = ({user, handleLogout, location, history }) => {
  
  const rightNavItems = () => {
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/about'>
            <Menu.Item
              id='about'
              name='about'
              active={location.pathname === '/about'}
              />
          </Link>
          <Link to='/profile'>
            <Menu.Item
              id='profile'
              name='profile'
              active={location.pathname === '/profile'}
              />
          </Link>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
 
  return (
    <div>
      <Menu pointing secondary>
        <Link to='/today'>
          <Menu.Item
            name='today'
            id='today'
            active={location.pathname === '/today'}
          />
        </Link>
          { rightNavItems() }
      </Menu>
    </div>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => 
      <Navbar { ...props } { ...auth } />
    }
  </AuthConsumer>
)
 

export default withRouter(ConnectedNavbar);