
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Router,Switch } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";

function App() {
  
  return (
    <div className="main">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
