import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Divider, Layout, Menu, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";

import updateFavorites from "./actionCreators/updateFavorites";
import fetchBanksFromAPI from "./utils/fetchBanks";
import AllBanks from "./pages/AllBanks";
import BankDetails from "./pages/BankDetails";
import Favorites from "./pages/Favorites";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [isSmallScreen, setIsSmallScreen] = React.useState();
  const [isCollapsed, setIsCollapsed] = React.useState();
  const searchParams = useSelector((state) => state.searchParams);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchBanksFromAPI();
  }, [searchParams.city]);

  React.useEffect(() => {
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
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            setIsSmallScreen(broken);
          }}
          onCollapse={(collapsed) => {
            setIsCollapsed(collapsed);
          }}
        >
          {isSmallScreen && !isCollapsed && (
            <Divider orientation="center">
              <Typography.Title
                type="sucess"
                style={{ color: "#fff" }}
                level={2}
              >
                {" "}
                Find Your Bank
              </Typography.Title>
            </Divider>
          )}
          {!isSmallScreen && <Header />}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[
              window.location.pathname.includes("favorites")
                ? "favorites"
                : "all-banks",
            ]}
          >
            <Menu.Item key="all-banks">
              <Link style={{ color: "#fff" }} to="/all-banks">
                {" "}
                All Banks{" "}
              </Link>
            </Menu.Item>
            <Menu.Item key="favorites">
              <Link to="/favorites"> Favorites </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            {(!isSmallScreen || (isSmallScreen && isCollapsed)) && (
              <Divider orientation="center">
                <Typography.Title
                  type="sucess"
                  style={{ color: "#fff" }}
                  level={1}
                >
                  {" "}
                  Find Your Bank
                </Typography.Title>
              </Divider>
            )}
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
      </Layout>
    </Router>
  );
}

export default App;
