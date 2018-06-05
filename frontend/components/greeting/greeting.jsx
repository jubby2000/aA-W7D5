import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render () {
    return (
      this.props.currentUser ? (
        <hgroup>
          <h2>Welcome, {this.props.currentUser.username}</h2>
          <button onClick={this.props.logout}>Logout</button>
        </hgroup>  
      ) : (
        <nav>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </nav>  
      )
    );  
  }
}

export default Greeting;