import { Component } from "react";
import {Label} from './Filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.filter)
    this.props.onSearch(this.state.filter);
    };

  render() {
    return (
      <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={this.state.filter}
        onChange={this.handleChange}
      />
      </Label> 
    );
  }
}

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired
}
