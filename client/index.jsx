import React from 'react';
import {render} from 'react-dom';
import MyComponent from './MyComponent.jsx';

class App extends React.Component {
    render () {
        return (
	    <div>
              <h1>Hello React.js</h1>
	      <MyComponent/>
	    </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
