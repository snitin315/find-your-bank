import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";

import updateFavorites from "./actionCreators/updateFavorites";
import fetchBanksFromAPI from "./utils/fetchBanks";
import AllBanks from "./pages/AllBanks";
import BankDetails from "./pages/BankDetails";
import Favorites from "./pages/Favorites";

const { Header, Content, Footer } = Layout;

function App() {
  const searchParams = useSelector((state) => state.searchParams);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBanksFromAPI();
  }, [searchParams.city]);

  useEffect(() => {
    const myStorage = window.localStorage;
    const localfavorites = JSON.parse(myStorage.getItem("favorites"));

    if (localfavorites === null) {
      myStorage.setItem("favorites", JSON.stringify([]));
    } else {
      dispatch(updateFavorites(localfavorites));
    }
  });

  return (
    <Router>
      <Layout className="layout" style={{ height: "100%" }}>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="all-banks">
              <Link to="/all-banks"> All Banks </Link>
            </Menu.Item>
            <Menu.Item key="favorites">
              <Link to="/favorites"> Favorites </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "10px 50px" }}>
          <Switch>
            <Route path="/all-banks">
              <AllBanks />
            </Route>
            <Route path="/bank-details/:ifsc">
              <BankDetails />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/all-banks" />;
              }}
            />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Find Your Bank Application | Made with &hearts; by Nitin Kumar
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
