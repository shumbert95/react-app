import React, { Component } from 'react';
import './App.css';
import Products from './Products';

class App extends Component {
  render() {
    return (
        <div>
            <section>
                <Products ></Products>
            </section>
        </div>
    );
  }
}

export default App;
