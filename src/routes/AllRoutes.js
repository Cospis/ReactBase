import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import One from "./../pages/One";
import Two from "./../pages/Two";
import Three from "./../pages/Three";
import Four from "./../pages/Four";
import DashboardIndex from "../layouts/DashboardIndex";
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>
);

const ProtectedAppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const { user, token, isAuthenticated, role, adminStatus } = useSelector(
    (state) => state.userAuth
  );
  const { path } = rest;
  console.log("user", user, isAuthenticated, path);
  console.log("adminStatus", adminStatus);
  return token ? (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  ) : (
    <Redirect to="/login" />
  );
};

function AllRoutes() {
  return (
    <Switch>
      <AppRoute exact path="/one" layout={DashboardIndex} component={One} />
      <AppRoute exact path="/two" layout={DashboardIndex} component={Two} />
      <AppRoute exact path="/three" layout={DashboardIndex} component={Three} />
      <AppRoute exact path="/one" layout={DashboardIndex} component={One} />
      <AppRoute exact path="/four" layout={DashboardIndex} component={Four} />
      {/* <ProtectedAppRoute
        exact
        path="/"
        layout={DashboardIndex}
        component={Container}
      /> */}

      <Redirect to="/login" />
    </Switch>
  );
}
export default AllRoutes;
