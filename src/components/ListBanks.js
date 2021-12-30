import React from "react";
import { useHistory } from "react-router-dom";
import { Checkbox, Table, Tooltip } from "antd";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  addFavorites,
  removeFavorites,
} from "../actionCreators/updateFavorites";

const { Column } = Table;

const ListBanks = ({ banks, loading }) => {
  const [cursorStyle, setCursorStyle] = React.useState("auto");
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const history = useHistory();

  return (
    <Table
      bordered
      loading={loading}
      pagination={{ position: ["bottomCenter"] }}
      dataSource={banks}
      tableLayout="fixed"
      style={{ cursor: cursorStyle }}
      scroll={{ y: 1200 }}
      onRow={() => {
        return {
          onMouseEnter: () => setCursorStyle("pointer"),
          onMouseLeave: () => setCursorStyle("auto"),
        };
      }}
    >
      <Column
        title="Favorite"
        key="action"
        align="center"
        width="100px"
        render={(record) => (
          <Tooltip title="Add to favorites">
            <Checkbox
              onChange={(event) => {
                if (event.target.checked) {
                  dispatch(addFavorites(favorites, record));
                } else {
                  dispatch(removeFavorites(favorites, record));
                }
              }}
              checked={favorites.some(
                (item) => JSON.stringify(item) === JSON.stringify(record)
              )}
            />
          </Tooltip>
        )}
      />
      <Column
        title="Bank Name"
        dataIndex="bank_name"
        key="bank-name"
        onCell={(record) => ({
          onClick: () => history.push(`/bank-details/${record.ifsc}`),
        })}
      />
      <Column
        title="Branch"
        dataIndex="branch"
        key="branch"
        onCell={(record) => ({
          onClick: () => history.push(`/bank-details/${record.ifsc}`),
        })}
      />
      <Column
        title="IFSC"
        dataIndex="ifsc"
        key="ifsc"
        onCell={(record) => ({
          onClick: () => history.push(`/bank-details/${record.ifsc}`),
        })}
      />
      <Column
        title="Address"
        dataIndex="address"
        key="address"
        onCell={(record) => ({
          onClick: () => history.push(`/bank-details/${record.ifsc}`),
        })}
      />
      <Column
        title="Bank ID"
        dataIndex="bank_id"
        key="bank-id"
        width="100px"
        onCell={(record) => ({
          onClick: () => history.push(`/bank-details/${record.ifsc}`),
        })}
      />
    </Table>
  );
};

ListBanks.propTypes = {
  // Array of banks to display
  banks: PropTypes.array,
  // Wether data is being load
  loading: PropTypes.bool,
};

export default ListBanks;
