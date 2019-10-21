import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const propTypes = {};

class ItemCard extends Component {
  render() {
    const { id, image, name, unit, description, cost } = this.props;
    return (
      <div style={styles.cardStyle} key={id}>
        <Card>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className="date">{unit}</span>
            </Card.Meta>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div
              style={{
                display: 'flex',
                fontSize: '1.4rem',
                color: 'green',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <b>R$ {cost}</b>
              </div>
              <Button color="red">Comprar</Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const styles = {
  cardStyle: {
    padding: '5px'
  }
};

ItemCard.propTypes = propTypes;
export default ItemCard;
