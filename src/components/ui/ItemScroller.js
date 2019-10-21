import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import './ItemScroller.scss';

const propTypes = {};

class ItemScroller extends Component {
  render() {
    const { header, items } = this.props;
    return (
      <div className="wrapper">
        <Header as="h1">{header}</Header>
        <Segment raised>
          <div className="itemScroller">
            <div className="infiniteX">{items}</div>
          </div>
        </Segment>
      </div>
    );
  }
}

ItemScroller.propTypes = propTypes;
export default ItemScroller;
