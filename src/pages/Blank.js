import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as uiActions } from '../redux/modules/ui';

const propTypes = {};

class Blank extends Component {
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
      ></div>
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

Blank.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blank);
