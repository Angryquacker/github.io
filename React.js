import React from 'react'
import ReactDOM from 'react'

class FirstClass extends React.Component {
  render() {
    return <h1>Well, this is a test</h1>;
  }
}

ReactDOM.render(<FirstClass />,
document.getElementById('app'));
