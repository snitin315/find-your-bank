import React from "react";
import { useHistory } from "react-router-dom";
import { Divider, Row, Col, Typography, Input, Select, Table } from "antd";
import { useSelector } from "react-redux";

const { Option, OptGroup } = Select;
const { Column } = Table;
const { Title } = Typography;
const { Search } = Input;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const AllBanks = () => {
  const [cursorStyle, setCursorStyle] = React.useState("auto");
  const banks = useSelector((state) => state.allBanks);
  const history = useHistory();

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
              onChange={handleChange}
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
              onChange={handleChange}
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
      <Table
        bordered
        loading={banks.length === 0}
        pagination={{ position: ["bottomCenter"] }}
        dataSource={banks}
        tableLayout="fixed"
        style={{ cursor: cursorStyle }}
        scroll={{ y: 1200 }}
        onRow={(record) => {
          return {
            onClick: () => history.push(`/bank-details/${record.ifsc}`), // click row
            onMouseEnter: () => setCursorStyle("pointer"), // mouse enter row
            onMouseLeave: () => setCursorStyle("auto"), // mouse leave row
          };
        }}
      >
        <Column title="Bank Name" dataIndex="bank_name" key="bank-name" />
        <Column title="Branch" dataIndex="branch" key="branch" />
        <Column title="IFSC" dataIndex="ifsc" key="ifsc" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Bank ID" dataIndex="bank_id" key="bank-id" />
      </Table>
    </React.Fragment>
  );
};

export default AllBanks;
