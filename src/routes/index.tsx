import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import SignIn from "../pages/Auth/SignIn";
import Tools from "../pages/Tools";
import Route from "./Route";

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/tools" isPrivate component={Tools} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
