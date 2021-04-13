import React from 'react';
import style from './styles/page.module.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component{

  render(){
    return (
      <div className={style.root}>
        
        <Router>
          <Header that={this} />
          {/* <link path="/" component={Header} /> */}
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
  
            <Route path="/about">
              <About />
            </Route>

            <Route path="/services">
              <Services />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
