import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';
import 'semantic-ui-css/semantic.min.css';

const propTypes = {};
class SearchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      value: '',
      isSearchLoading: false
    };
  }

  handleResultSelect = (e, { result }) => this.setState({ value: result.name });

  handleSearchChange = (e, { value }) => {
    this.setState({ isSearchLoading: true, value });
    const resultObject = {};
    _.sortBy(this.props.productList, ['category']).forEach(product => {
      if (
        product.name.toUpperCase().indexOf(value.toUpperCase()) >= 0 ||
        product.description.toUpperCase().indexOf(value.toUpperCase()) >= 0 ||
        product.category.toUpperCase().indexOf(value.toUpperCase()) >= 0
      ) {
        if (resultObject.hasOwnProperty(product.category)) {
          const currentResults = resultObject[product.category].results;
          currentResults.push({
            title: product.name,
            description: product.description,
            image: product.image,
            price: product.cost
          });
          resultObject[product.category].results = currentResults;
        } else {
          resultObject[product.category] = {
            name: product.category,
            results: [
              {
                title: product.name,
                description: product.description,
                image: product.image,
                price: product.cost
              }
            ]
          };
        }
      }
    });
    this.setState({
      isSearchLoading: false,
      searchResults: resultObject
    });
  };

  render() {
    return (
      <Search
        fluid
        category
        placeholder="What are you looking for?"
        noResultsMessage="No products found..."
        input={{ fluid: true }}
        loading={this.state.isSearchLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={this.state.searchResults}
        value={this.state.value}
        {...this.props}
      />
    );
  }
}

SearchItem.propTypes = propTypes;
export default SearchItem;
