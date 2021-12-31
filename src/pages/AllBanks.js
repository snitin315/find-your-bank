import React from "react";
import { Divider, Row, Col, Typography, Input, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import ListBanks from "../components/ListBanks";
import updateSearchParams from "../actionCreators/updateSearchParams";
import updateLoading from "../actionCreators/updateLoading";

const { Option, OptGroup } = Select;
const { Title } = Typography;
const { Search } = Input;

const AllBanks = () => {
  const banks = useSelector((state) => state.allBanks);
  const searchParams = useSelector((state) => state.searchParams);
  const dispatch = useDispatch();

  const [filteredBankList, setFilteredBankList] = React.useState([]);

  React.useEffect(() => {
    setFilteredBankList(banks);

    if (searchParams.query !== "") {
      dispatch(updateLoading(true));

      setFilteredBankList(
        banks.filter((bank) => {
          return bank[searchParams.category]
            .toLowerCase()
            .includes(searchParams.query.toLowerCase());
        })
      );

      dispatch(updateLoading(false));
    }
  }, [banks, searchParams.category, searchParams.query, dispatch]);

  return (
    <React.Fragment>
      <Divider orientation="center">
        <Title> All Banks</Title>
      </Divider>
      <React.Fragment>
        <Row gutter={[32, 16]}>
          <Col className="gutter-row" xs={24} sm={24} md={6}>
            <Title level={3}>Search Parameters</Title>
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={6}>
            <Select
              placeholder="Select a city"
              style={{ width: "100%" }}
              value={searchParams.city}
              onSelect={(value) =>
                dispatch(
                  updateSearchParams({ city: value, category: "", query: "" })
                )
              }
            >
              <OptGroup label="City">
                <Option value="DELHI">Delhi</Option>
                <Option value="MUMBAI">Mumbai</Option>
                <Option value="BANGLORE">Banglore</Option>
                <Option value="HYDERABAD">Hyderabad</Option>
                <Option value="LUCKNOW">Lucknow</Option>
              </OptGroup>
            </Select>
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={6}>
            <Select
              placeholder="Select a category"
              style={{ width: "100%" }}
              onSelect={(value) =>
                dispatch(
                  updateSearchParams({
                    city: searchParams.city,
                    category: value,
                    query: "",
                  })
                )
              }
            >
              <OptGroup label="Category">
                <Option value="ifsc">IFSC</Option>
                <Option value="branch">Branch</Option>
                <Option value="bank_name">Bank Name</Option>
              </OptGroup>
            </Select>
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={6}>
            <Search
              placeholder={
                searchParams.category.length === 0
                  ? "Please select a category"
                  : "input search text"
              }
              disabled={searchParams.category.length === 0}
              onKeyUp={(e) => {
                dispatch(
                  updateSearchParams({
                    city: searchParams.city,
                    category: searchParams.category,
                    query: e.target.value,
                  })
                );
              }}
            />
          </Col>
        </Row>
      </React.Fragment>
      <Divider />
      <ListBanks banks={filteredBankList} loading={banks.length === 0} />
    </React.Fragment>
  );
};

export default AllBanks;
