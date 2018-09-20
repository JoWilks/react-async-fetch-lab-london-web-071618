import React from 'react';
import Button from './components/Button';
import ExampleComponent from './components/ExampleComponent';
import Greeting from './components/Greeting';

class App extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => {
            let people = json.people;
            this.setState({people})
        })
    }

    render() {
      return (
        <div>
            <div>
                <Greeting />
            </div>
            <div>
                <ExampleComponent />
            </div>
            <div>
                <Button />
            </div>
        </div>
      )
    }
  
  }
  
  export default App;