import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as uiActions } from '../redux/modules/ui';
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
      loading: false,
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
    return (
      <div
        style={{
          backgroundColor: '#fafaf9',
          padding: '20px'
        }}
      >
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

const mapStateToProps = state => {
  return {
    productList: state.products.productList
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  showTopMenu: () => dispatch(uiActions.showTopMenu())
});

Home.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
