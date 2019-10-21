import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as accountActions } from '../redux/modules/account';
import { actions as uiActions } from '../redux/modules/ui';
import {
  Container,
  Grid,
  Image,
  Header,
  Form,
  Segment,
  Button,
  Icon,
  Message
} from 'semantic-ui-react';
import './Landing.scss';
const propTypes = {};

const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const zipcodeValidationRegex = /^([\d]{2})\.?([\d]{3})-?([\d]{3})/;
// const isNumber = /^\d+$/;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: false,
      email: '',
      emailError: false,
      zipcode: '',
      zipcodeError: false,
      disabled: true,
      errorMesssage: null
    };
  }

  componentDidMount() {
    this.props.hideTopMenu();
  }

  handleInput = (key, value) => {
    if (key === 'name') {
      this.setState(
        {
          [key]: value
        },
        () => {
          if (this.state.name.length === 0) {
            this.setState({
              errorMesssage: 'Informe seu nome.',
              nameError: true
            });
            return;
          } else {
            this.setState({ errorMesssage: null, nameError: false });
          }
        }
      );
    }
    if (key === 'zipcode' && value.length < 10) {
      const newValue = value
        .replace(/\D/g, '')
        .replace(/^([\d]{2})\.?([\d]{3})-?([\d]{3})/g, '$1.$2-$3');
      this.setState(
        {
          [key]: newValue
        },
        () => {
          if (
            !zipcodeValidationRegex.test(this.state.zipcode.toLowerCase()) &&
            this.state.zipcode.length > 0
          ) {
            this.setState({
              errorMesssage: 'Informe um CEP válido.',
              zipcodeError: true
            });
            return;
          } else {
            this.setState({ errorMesssage: null, zipcodeError: false });
          }
        }
      );
    }
    if (key === 'email') {
      this.setState(
        {
          [key]: value
        },
        () => {
          if (
            !emailValidationRegex.test(this.state.email.toLowerCase()) &&
            this.state.email.length > 0
          ) {
            this.setState({
              errorMesssage: 'Informe um endereço de email válido.',
              emailError: true
            });
            return;
          } else {
            this.setState({ errorMesssage: null, emailError: false });
          }
        }
      );
    }
  };

  submit = () => {
    if (this.state.name === '' || this.state.email === '' || this.state.zipcode === '') {
      this.setState({ errorMesssage: 'Preencha todos os campos por favor.' });
    } else {
      this.props.registerProspect({
        email: this.state.email,
        name: this.state.name,
        zipcode: this.state.zipcode
      });
    }
  };
  render() {
    return (
      <div className="background-image">
        <Container className="landing-content">
          <Image src="/emporio.svg" style={{ marginTop: '15px' }} size="small" />
          {this.props.prospect && (
            <Segment>
              <Header as="h1">
                <Icon name="flag checkered"></Icon>Pronto!
              </Header>
              <p>Obrigado, {this.props.prospect.name}!</p>
              <p>
                Em algumas semanas iniciaremos o envio dos convites para algumas regiões de Brasília
                e entorno.
              </p>
              <p>
                Fique atento à sua caixa de email. Te mandamos um agora só pra confirmar que está
                tudo certo. Caso não o veja dentro de alguns minutos, verifique sua caixa de spam.
              </p>
              <p>
                Para se cadastrar como outra pessoa nesse computador,
                <a onClick={() => this.props.logout()}>clique aqui</a>.
              </p>
            </Segment>
          )}
          {!this.props.prospect && (
            <div>
              <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column mobile={16} tablet={8} computer={8}>
                    <div style={{ marginTop: '35px', fontSize: '1.5rem' }}>
                      <Header inverted as="h1">
                        Do aplicativo para sua casa
                      </Header>
                      <p className="landing">
                        O <b>Empório das Carnes</b> está chegando para lhe trazer{' '}
                        <b>as melhores carnes</b>, trabalhadas pelos <b>melhores açougueiros</b> na
                        convêniencia do seu celular ou computador.
                      </p>
                      <p className="landing">
                        <b>Cadastre-se agora</b> para ser um dos primeiros convidados a usar o
                        serviço. Além de ter acesso antecipado, você também ganha desconto de até
                        10% nas primeiras compras.
                      </p>
                      <p className="landing">
                        Você vai ser notificado assim que o serviço começar na sua região.
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={8}>
                    <Form size="large" className="landing-form">
                      {this.state.errorMesssage && (
                        <Message negative size="tiny">
                          {this.state.errorMesssage}
                        </Message>
                      )}
                      <Segment stacked>
                        <Form.Input
                          fluid
                          value={this.state.name}
                          onChange={e => this.handleInput('name', e.target.value)}
                          icon="user"
                          iconPosition="left"
                          placeholder="Seu nome"
                          error={this.state.nameError}
                        />
                        <Form.Input
                          fluid
                          value={this.state.zipcode}
                          onChange={e => this.handleInput('zipcode', e.target.value)}
                          icon="map marker alternate"
                          iconPosition="left"
                          placeholder="Seu cep"
                          error={this.state.zipcodeError}
                        />
                        <Form.Input
                          fluid
                          value={this.state.email}
                          onChange={e => this.handleInput('email', e.target.value)}
                          icon="mail"
                          iconPosition="left"
                          placeholder="Seu e-mail"
                          error={this.state.emailError}
                        />
                        <Button
                          color="red"
                          fluid
                          size="large"
                          onClick={() => this.submit()}
                          loading={this.props.loading}
                          disabled={
                            this.state.nameError ||
                            this.state.zipcodeError ||
                            this.state.emailError ||
                            (this.state.name.length === 0 ||
                              this.state.zipcode.length === 0 ||
                              this.state.email.length === 0)
                          }
                        >
                          Cadastrar
                        </Button>
                      </Segment>
                    </Form>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  prospect: state.account.prospect,
  errors: state.errors.errors,
  loading: state.account.loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  registerProspect: ({ email, name, zipcode }) =>
    dispatch(
      accountActions.registerProspect({
        email,
        name,
        zipcode
      })
    ),
  logout: () => dispatch(accountActions.logout()),
  hideTopMenu: () => dispatch(uiActions.hideTopMenu())
});

Landing.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
