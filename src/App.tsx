import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import DropInfo from "./pages/DropInfo";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Merch from "./pages/Merch";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Mint from "./pages/Mint";
import CommunityCollection from "./pages/CommunityCollection";
import CommunityWallet from "./pages/CommunityWallet";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/drop">
            <DropInfo />
          </Route>
          <Route path="/decentrazine">
            <Project />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/merch">
            <Merch />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/mint">
            <Mint />
          </Route>
          <Route path="/communitycollection">
            <CommunityCollection />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/community" exact>
            <CommunityWallet />
          </Route>
          <Footer />
        </Router>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
