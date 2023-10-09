import { ConstructorPage, Page404, Feed } from "../../pages/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import AppHeader from "../app-header/app-header";

import { Location } from "history";

function App() {
  const location = useLocation<{ background: Location }>();

  const background = location.state && location.state?.background;

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path="/" exact={true}>
          <ConstructorPage />
        </Route>
        <Route path="/feed" exact={true}>
          <Feed />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
