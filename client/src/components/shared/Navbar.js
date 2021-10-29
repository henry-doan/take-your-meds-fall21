import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/NavLogo.png'


const Navbar = ({user, handleLogout, location, history }) => {
  
  const leftNavItems = () => {
    return (
      <Image className="profile-logo" src={logo} alt="Logo"/>
    )
  }
  const rightNavItems = () => {
    if (user) {
      return (

        <Menu.Menu position='right'>
          <Link to='/today'>
            <Menu.Item
              name='today'
              id='today'
              active={location.pathname === '/today'}
            />
        </Link>
          <Link to='/medications'>
            <Menu.Item
              id='medications'
              name='my meds'
              active={location.pathname === '/medications'}
              />
          </Link>
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
          <a><Menu.Item
            name='logout'
            onClick={ () => handleLogout(history) }
          />
          </a>
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
      { leftNavItems() }
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