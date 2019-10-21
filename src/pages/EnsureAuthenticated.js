import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const propTypes = {};

class EnsureAuthenticated extends Component {
  render() {
    return this.props.email ? this.props.children || null : <Redirect to="/account/login" />;
  }
}

const mapStateToProps = (state, { location }) => ({
  location,
  email: state.account.email
});
const mapDispatchToProps = (dispatch, ownProps) => ({});

EnsureAuthenticated.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnsureAuthenticated);
