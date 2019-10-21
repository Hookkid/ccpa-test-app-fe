import React, { Component } from 'react';
import { Item, Button, Divider } from 'semantic-ui-react';
import './Cart.scss';

const propTypes = {};

class Cart extends Component {
  render() {
    return (
      <div className="cartWrapper">
        Meu Carrinho
        <Item.Group relaxed>
          <Item>
            <Item.Image size="mini" src="/carnemoida.jpg" />
            <Item.Content verticalAlign="middle">
              <Item.Header className="header">Carne Moída</Item.Header>
              <Item.Description>
                <Button.Group size="mini">
                  <Button>-</Button>
                  <Button.Or text="01" />
                  <Button positive>+</Button>
                </Button.Group>
              </Item.Description>
              <Item.Extra>R$ 99,99</Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size="mini" src="/filemignon.jpg" />
            <Item.Content verticalAlign="middle">
              <Item.Header className="header">File Mignon</Item.Header>
              <Item.Description>
                <Button.Group size="mini">
                  <Button>-</Button>
                  <Button.Or text="01" />
                  <Button positive>+</Button>
                </Button.Group>
              </Item.Description>
              <Item.Extra>R$ 99,99</Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Image size="mini" src="/bisteca-suina.jpg" />
            <Item.Content verticalAlign="middle">
              <Item.Header className="header">Bisteca Suina</Item.Header>
              <Item.Description>
                <Button.Group size="mini">
                  <Button>-</Button>
                  <Button.Or text="01" />
                  <Button positive>+</Button>
                </Button.Group>
              </Item.Description>
              <Item.Extra>R$ 99,99</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Divider />
        <div>
          Total (sem frete): <b>R$ 299,90</b>
        </div>
        <Button positive fluid>
          Fechar Pedido
        </Button>
      </div>
    );
  }
}

Cart.propTypes = propTypes;
export default Cart;
