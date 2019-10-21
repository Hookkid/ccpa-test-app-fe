import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { actions as accountActions } from '../../redux/modules/account';
import { actions as uiActions } from '../../redux/modules/ui';

const propTypes = {};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    this.props.hideTopMenu();
  }

  handleInput = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    if (!this.props.loggingIn)
      this.props.login({ email: this.state.email, password: this.state.password });
  };

  render() {
    const justRegistered = window.location.search.includes('ok');
    return this.props.email ? (
      <Redirect to="/" />
    ) : (
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src="/emporio.svg" size="medium" centered />
          <Header as="h2" color="red" textAlign="center">
            {justRegistered ? 'Account registered successfully' : 'Sign in to your account'}
          </Header>
          {this.props.errors && this.props.errors.length > 0 && (
            <Message negative>
              <Message.Header>Oops!</Message.Header>
              <p>Incorrect password or invalid username.</p>
            </Message>
          )}
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                value={this.state.email}
                onChange={e => this.handleInput('email', e.target.value)}
                icon="user"
                iconPosition="left"
                placeholder="Seu e-mail"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Senha"
                value={this.state.password}
                onChange={e => this.handleInput('password', e.target.value)}
                type="password"
              />

              <Button
                onClick={() => this.submit()}
                color="red"
                fluid
                size="large"
                loading={this.props.loggingIn}
              >
                Sign in
              </Button>
            </Segment>
          </Form>
          <Message size="tiny">
            <div>
              No account? <Link to="/account/signup">Create one here!</Link>
            </div>
            <div>
              Forgot your password? <a href="#">Retrieve it here.</a>
            </div>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  email: state.account.email,
  errors: state.errors.errors,
  loggingIn: state.account.loggingIn
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: ({ email, password }) => dispatch(accountActions.login({ email, password })),
  hideTopMenu: () => dispatch(uiActions.hideTopMenu())
});

Login.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
