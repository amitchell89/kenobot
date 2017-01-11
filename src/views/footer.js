import React, {Component} from 'react';
import { Link } from 'react-router'

export default class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <footer>
        <p>&copy; {year} KeanuBot</p>
      </footer>
    )
  }
}