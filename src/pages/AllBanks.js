import React from "react";
import { Divider, Row, Col, Typography, Input, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import ListBanks from "../components/ListBanks";
import updateSearchParams from "../actionCreators/updateSearchParams";

const { Option, OptGroup } = Select;
const { Title } = Typography;
const { Search } = Input;

const AllBanks = () => {
  const banks = useSelector((state) => state.allBanks);
  const searchParams = useSelector((state) => state.searchParams);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Divider orientation="center">
        <Title> All Banks</Title>
      </Divider>
      <React.Fragment>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <Title level={3}>Search Parameters</Title>
          </Col>
          <Col className="gutter-row" span={6}>
            <Select
              placeholder="Select a city"
              style={{ width: "100%" }}
              value={searchParams.city}
              onSelect={(value) =>
                dispatch(updateSearchParams({ city: value }))
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
          <Col className="gutter-row" span={6}>
            <Select
              placeholder="Select a category"
              style={{ width: "100%" }}
              onSelect={(value) =>
                dispatch(
                  updateSearchParams({
                    city: searchParams.city,
                    category: value,
                  })
                )
              }
            >
              <OptGroup label="Category">
                <Option value="IFSC">IFSC</Option>
                <Option value="BRANCH">Branch</Option>
                <Option value="BANK_NAME">Bank Name</Option>
              </OptGroup>
            </Select>
          </Col>
          <Col className="gutter-row" span={6}>
            <Search
              placeholder="input search text"
              onSearch={console.log("hi")}
            />
          </Col>
        </Row>
      </React.Fragment>
      <ListBanks banks={banks} loading={banks.length === 0} />
    </React.Fragment>
  );
};

export default AllBanks;
