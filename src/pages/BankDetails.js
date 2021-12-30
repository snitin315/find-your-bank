import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider, Card, Typography } from "antd";

const { Title } = Typography;

function BankDetails() {
  const { ifsc } = useParams();
  const banks = useSelector((state) => state.allBanks);
  const favorites = useSelector((state) => state.favorites);
  const [bankDetails, setbankDetails] = React.useState(null);

  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };

  React.useEffect(() => {
    banks.map((bank) => {
      if (bank.ifsc === ifsc) {
        setbankDetails(bank);
      }
    });
    if (bankDetails === null) {
      favorites.map((bank) => {
        if (bank.ifsc === ifsc) {
          setbankDetails(bank);
        }
      });
    }
  });

  return (
    <React.Fragment>
      <Divider orientation="center">
        <Title> Bank Details</Title>
      </Divider>
      {bankDetails && (
        <Card title={<Title>Bank Name : {bankDetails.bank_name}</Title>}>
          <Card.Grid style={gridStyle}>
            <Title level={3}>Address</Title>
            {bankDetails.address}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Title level={3}>Bank ID</Title>
            {bankDetails.bank_id}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Title level={3}>Branch</Title>
            {bankDetails.branch}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Title level={3}>City</Title>
            {bankDetails.city}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Title level={3}>District</Title>
            {bankDetails.district}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Title level={3}>IFS Code</Title>
            {bankDetails.ifsc}
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Title level={3}>State</Title>
            {bankDetails.state}
          </Card.Grid>
        </Card>
      )}
    </React.Fragment>
  );
}

export default BankDetails;
