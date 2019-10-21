import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as uiActions } from '../redux/modules/ui';
import { actions as accountActions } from '../redux/modules/account';
import ItemScroller from '../components/ui/ItemScroller';
import { Button, Icon } from 'semantic-ui-react';

const propTypes = {};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      response: {},
      resolving: false,
      errorMesssage: null
    };
  }

  componentDidMount() {
    this.props.showTopMenu();
  }

  handleInput = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    this.props.login({ email: this.state.email, password: this.state.password });
  };

  render() {
    console.log('user', this.props.user);
    return (
      <div
        style={{
          backgroundColor: '#fafaf9',
          padding: '20px'
        }}
      >
        {this.props.user && (
          <div>
            Test the opt out:{' '}
            <Button
              loading={this.props.resolving}
              onClick={() =>
                this.props.privacyOptout({
                  email: this.props.user.email,
                  firstName: this.props.user.firstName,
                  lastName: this.props.user.lastName,
                  phone: '1234567890'
                })
              }
            >
              Opt out
            </Button>
          </div>
        )}
        <ItemScroller
          header="A content container"
          items="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu justo, volutpat a lacus vel, porttitor imperdiet leo. Pellentesque venenatis metus ut dolor cursus, id porta lorem facilisis. Sed viverra, ligula quis hendrerit hendrerit, leo massa gravida nisi, eu tempus enim leo id nibh."
        ></ItemScroller>
        <ItemScroller
          header="Another content"
          items=" Suspendisse molestie urna rutrum viverra sodales. Donec fringilla efficitur fringilla. Nunc pharetra elit et tellus rhoncus venenatis id non turpis "
        ></ItemScroller>
        <ItemScroller
          header="And some additional stuff"
          items="Aenean pulvinar mauris et libero tincidunt, in tempus mi aliquet. Phasellus pellentesque pellentesque risus vel congue. Integer malesuada nunc in ligula sodales, eget dictum lorem commodo."
        ></ItemScroller>
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '13px'
          }}
        >
          <Button
            icon
            circular
            color="red"
            size="massive"
            style={{
              boxShadow: '6px 7px 9px -4px rgba(163,163,163,1)'
            }}
          >
            <Icon name="comment" />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { location }) => ({
  productList: state.products.productList,
  user: state.account.user,
  resolving: state.account.resolving
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  showTopMenu: () => dispatch(uiActions.showTopMenu()),
  privacyOptout: (email, firstName, lastName, phone) =>
    dispatch(accountActions.privacyOptout(email, firstName, lastName, phone))
});

Home.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
