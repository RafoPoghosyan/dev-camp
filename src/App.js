import './App.css';
import Intro from "./app/pages/intro/Intro";
import {HashRouter, Switch, Route} from "react-router-dom";
import Home from "./app/pages/home/Home";
import Header from "./app/components/header/Header";

function App() {
  return (
      <HashRouter>
          <Header/>
          <Switch>
              <Route exact path='/' component={Intro}/>
              <Route exact path='/home' component={Home}/>
          </Switch>
      </HashRouter>
  );
}

export default App;
