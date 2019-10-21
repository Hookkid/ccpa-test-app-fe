import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { actions as accountActions } from '../../redux/modules/account';
import { actions as uiActions } from '../../redux/modules/ui';

const propTypes = {};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      response: {},
      loading: false,
      errorMesssage: null
    };
  }

  componentDidMount() {
    this.props.hideTopMenu();
  }

  handleInput = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ errorMesssage: 'As senhas informadas estão diferentes.' });
    }
    this.props.register({
      username: this.state.email,
      password: this.state.password,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });
  };

  render() {
    return (
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src="/emporio.svg" size="medium" centered />
          <Header as="h2" color="red" textAlign="center">
            Sign up here
          </Header>
          {this.state.errorMesssage && (
            <Message negative>
              <Message.Header>Check this information:</Message.Header>
              {this.state.errorMesssage}
            </Message>
          )}
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                value={this.state.firstName}
                onChange={e => this.handleInput('firstName', e.target.value)}
                icon="user"
                iconPosition="left"
                placeholder="First name"
              />
              <Form.Input
                fluid
                value={this.state.lastName}
                onChange={e => this.handleInput('lastName', e.target.value)}
                icon="user"
                iconPosition="left"
                placeholder="Last name"
              />
              <Form.Input
                fluid
                value={this.state.email}
                onChange={e => this.handleInput('email', e.target.value)}
                icon="mail"
                iconPosition="left"
                placeholder="Your e-mail"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Your password"
                value={this.state.password}
                onChange={e => this.handleInput('password', e.target.value)}
                type="password"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm your password"
                value={this.state.confirmPassword}
                onChange={e => this.handleInput('confirmPassword', e.target.value)}
                type="password"
              />
              <Button
                onClick={() => this.submit()}
                color="red"
                fluid
                size="large"
                loading={this.state.loading}
              >
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message size="tiny">
            <div>
              Forgot your password? <a href="#">Retrieve it here</a>.
            </div>
            <div>
              Already signed up? <Link to="/account/login">Sign in here</Link>.
            </div>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  register: ({ username, password, email, firstName, lastName }) =>
    dispatch(
      accountActions.register({
        username,
        password,
        email,
        firstName,
        lastName
      })
    ),
  hideTopMenu: () => dispatch(uiActions.hideTopMenu())
});

SignUp.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
