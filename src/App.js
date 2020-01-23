import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Shop from "./components/Shop";
import Reviews from "./components/Reviews";
import ReviewPage from "./components/ReviewPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/review" component={ReviewPage} />
        <Route path="*" render={() => <div> No Found</div>} />
      </Switch>
    </>
  );
}

export default App;
