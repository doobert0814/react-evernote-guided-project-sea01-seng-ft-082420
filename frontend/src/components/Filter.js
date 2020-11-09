import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div className='drop-down-filter'>
        <label>
          filter by:
          <select  onChange={this.handleChange} >
            <option value="date">Date</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Filter;