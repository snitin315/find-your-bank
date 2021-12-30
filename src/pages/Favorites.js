import React from "react";
import { useSelector } from "react-redux";
import { Divider, Typography } from "antd";
import ListBanks from "../components/ListBanks";

const Favorites = () => {
  const favoriteBanks = useSelector((state) => state.favorites);

  return (
    <React.Fragment>
      <Divider orientation="center">
        <Typography.Title> Favorite Banks</Typography.Title>
      </Divider>
      <ListBanks banks={favoriteBanks} />
    </React.Fragment>
  );
};

export default Favorites;
