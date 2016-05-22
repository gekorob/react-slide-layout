import React from 'react';
import ReactDOM from 'react-dom';

import SlideLayoutContainer from './components/slide_layout_container';

import './styles/base.scss';

class App extends React.Component {
  render(){
    return (
        <SlideLayoutContainer/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
