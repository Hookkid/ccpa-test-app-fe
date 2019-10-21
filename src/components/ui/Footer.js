import React, { Component } from 'react';
import { Segment, Container, Grid, Header, Icon } from 'semantic-ui-react';

const propTypes = {};

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={12}>
                <Header as="h4" inverted>
                  Siga a gente nas redes sociais:
                </Header>
                <Icon name="facebook" size="big" />
                <Icon name="instagram" size="big" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

Footer.propTypes = propTypes;
export default Footer;
