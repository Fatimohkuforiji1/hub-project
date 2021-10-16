
import {Route} from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-me" exact>
          <AboutMe/>
        </Route>
      </div>
    </div>
  );
}

export default App;
