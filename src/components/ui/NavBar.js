import React, { Component } from 'react';
import { Button, Image, Icon, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SearchItem from './SearchItem';
import Cart from '../cart/Cart';
import './NavBar.scss';

const propTypes = {};

const options = optedOut => [
  { key: 1, text: `Opted out: ${optedOut}`, value: 1 },
  { key: 3, text: 'Sign out', value: 3 }
];

class NavBar extends Component {
  render() {
    const {
      user,
      productList,
      shoppingCartVisible,
      handleUserDropDownChange,
      handleCartClick
    } = this.props;
    const userMenuItem = user ? (
      <div className="userMenu">
        <Image
          src="https://ik.imagekit.io/rigqxutwl/joe_O87fZzhU3O.jpg"
          size="mini"
          circular
          className="profilePicture"
        />
        <Dropdown
          style={{ marginLeft: '5px' }}
          item
          simple
          text={user.firstName}
          direction="right"
          options={options(user.optedOut)}
          onChange={(event, data) => handleUserDropDownChange(event, data)}
        />
      </div>
    ) : (
      <div className="loginSignup">
        <Link to="/account/login">
          <Button inverted basic>
            Sign in
          </Button>
        </Link>
        <Link to="/account/signup">
          <Button inverted>Sign Up</Button>
        </Link>
      </div>
    );
    return (
      <div className="navBar">
        <div className="navBarContent">
          <div>
            <Image
              src="/emporio.svg"
              style={{ marginLeft: '-4px' }}
              size="small"
              floated="right"
              verticalAlign="middle"
            />
          </div>
          <div
            style={{
              width: '500px'
            }}
          >
            <SearchItem productList={productList} />
          </div>
          {userMenuItem}
          <div className="menuHover" onClick={() => handleCartClick()}>
            <Icon name="shopping cart" /> 23
          </div>
          {shoppingCartVisible && <Cart />}
        </div>
        <div className="subMenu">
          <div className="menuHover">Home</div>
          <div className="menuHover">About</div>
          <div className="menuHover">Corporate</div>
          <div className="menuHover">FAQ</div>
          <div className="menuHover">Contact</div>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = propTypes;
export default NavBar;
