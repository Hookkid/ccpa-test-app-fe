import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import uniqid from 'uniqid';
import 'semantic-ui-css/semantic.min.css';
import { actions as accountActions } from './redux/modules/account';
import { actions as productsActions } from './redux/modules/products';
import { actions as cartActions } from './redux/modules/cart';
import NavBar from './components/ui/NavBar';

const propTypes = {};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
      shoppingCartVisible: false
    };
  }

  componentWillMount() {
    this.state = { tempUserId: cookie.load('tempUserId') };
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  handleUserDropDownChange = (e, data) => {
    switch (data.value) {
      case 3:
        this.props.logout();
        break;

      default:
        break;
    }
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogOutClick = () => this.props.logout();

  handleCartClick = () => {
    this.setState({ shoppingCartVisible: !this.state.shoppingCartVisible }, () => {
      if (this.state.shoppingCartVisible) {
        if (this.props.user) {
          this.props.getCartItems({ userId: this.props.user.id });
        } else {
          if (!this.state.tempUserId) {
            cookie.save('tempUserId', uniqid(), { path: '/' });
          }
          this.props.getCartItems({ userId: this.state.tempUserId });
        }
      }
    });
  };

  render() {
    const { props } = this;
    return (
      <div>
        {props.topMenuVisible && (
          <NavBar
            shoppingCartVisible={this.state.shoppingCartVisible}
            user={this.props.user}
            productList={this.props.productList}
            handleUserDropDownChange={this.handleUserDropDownChange}
            handleCartClick={this.handleCartClick}
          />
        )}
        <div>{props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, { location }) => ({
  location,
  user: state.account.user,
  topMenuVisible: state.ui.topMenuVisible,
  productList: state.products.productList,
  isSearchLoading: state.products.isSearching
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(accountActions.logout()),
  getAllProducts: () => dispatch(productsActions.getAllProducts()),
  getCartItems: userId => dispatch(cartActions.getCartItems(userId))
});

App.propTypes = propTypes;
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
