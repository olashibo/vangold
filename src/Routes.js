import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Containers
import Home from "./pages/Home";
import TermsPage from "./pages/Terms";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import CookiePolicy from "./pages/CookiePolicy";
import ContactUs from "./pages/ContactUs";
import VgdPrice from "./pages/VgdPrice";
import VswapPrice from "./pages/VswapPrice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Roadmap from "./pages/Roadmap";


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/terms" exact component={TermsPage} />
        <Route path="/about" exact component={About} />
        <Route path="/cookie-policy" exact component={CookiePolicy} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        <Route path="/roadmap" exact component={Roadmap} />
        <Route path="/VgdPrice" exact component={VgdPrice} />
        <Route path="/VswapPrice" exact component={VswapPrice} />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
