import React from "react";
import { Divider, Row, Col, Typography, Input, Select, Table } from 'antd';

const { Option, OptGroup } = Select;
const { Title } = Typography;
const { Search } = Input;

const dataSource = [
    {
        key: '1',
        bank: 'Mike',
        branch: 32,
        bankId: 12345,
        ifsc: 56,
        address: '10 Downing Street',
    },
    {
        key: '2',
        bank: 'Mike',
        branch: 32,
        bankId: 12345,
        ifsc: 56,
        address: '10 Downing Street',
    },    
];

const columns = [
    {
        title: 'Favorite',
        dataIndex: 'favorite',
        key: 'favorite',
    },
    {
        title: 'Bank',
        dataIndex: 'bank',
        key: 'bank',
    },
    {
        title: 'Branch',
        dataIndex: 'branch',
        key: 'branch',
    },
    {
        title: 'IFSC',
        dataIndex: 'ifsc',
        key: 'ifsc',
    },
    {
        title: 'Bank ID',
        dataIndex: 'bankId',
        key: 'bank-id',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

function handleChange(value) {
    console.log(`selected ${value}`);
}

const AllBanks = () => (
    <React.Fragment>
        <Divider orientation="center">
            <Title> All Banks</Title>
        </Divider>
        <React.Fragment>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <Title level={3}>
                        Search Parameters
                    </Title>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Select placeholder="Select a city" style={{ width: "100%" }} onChange={handleChange}>
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
                    <Select placeholder="Select a category" style={{ width: "100%" }} onChange={handleChange}>
                        <OptGroup label="Category">
                            <Option value="IFSC">IFSC</Option>
                            <Option value="BRANCH">Branch</Option>
                            <Option value="BANK_NAME">Bank Name</Option>
                        </OptGroup>
                    </Select>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Search placeholder="input search text" onSearch={console.log("hi")} />
                </Col>
            </Row>
        </React.Fragment>
        <Table dataSource={dataSource} columns={columns} />;
    </React.Fragment>
);

export default AllBanks;