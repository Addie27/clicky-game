import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Jumbotron from "./pages/Jumbotron";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar>
        <Route exact path="/discover" component={Counter} />
      </Navbar>
      <Wrapper>
        <Route exact path="/discover" component={Jumbotron} />
        <Route exact path="/discover" component={Main} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;

