import {
  Redirect,
  Route as ReactDOMRouter,
  RouteProps as ReactDOMRouteProps,
} from "react-router-dom";

import Header from "../components/Header";
import { useAuth } from "../hooks/auth";
import DefaultLayout from "../styles/layouts/DefaultLayout";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
}

export default function Route({ isPrivate, ...rest }: RouteProps) {
  const { user } = useAuth();

  if (user && !isPrivate) {
    return <Redirect to="/tools" />;
  }

  if (!user && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <DefaultLayout>
      {user && <Header />}
      <ReactDOMRouter {...rest} />
    </DefaultLayout>
  );
}
