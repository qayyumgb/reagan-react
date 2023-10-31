import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BrowserStateWrap } from '../../Style';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import browserStates from '../../../../demoData/table-data.json';

const { browserState } = browserStates;

const BrowserState = React.memo(() => {
  const [state, setState] = useState({
    browserTab: 'today',
  });

  const handleChangePeriod = (value, event) => {
    event.preventDefault();
    setState({
      ...state,
      browserTab: value,
    });
  };

  /* State destructuring */
  const { browserTab } = state;

  const browserData = [];

  if (browserState !== null) {
    browserState[browserTab].map((value) => {
      const { key, name, quantity, income} = value;
      return browserData.push({
        key,
        total: (
          <div className="ninjadash-product-info align-center-v">
            <span className="ninjadash-product-name">{name}</span>
          </div>
        ),
        quantity,
        income
      });
    });
  }

  const browserColumns = [
    {
      title: 'Totals',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Income',
      dataIndex: 'income',
      key: 'income',
    },
  ];

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
         
          title="Browser State"
          size="large" className="border-top-0"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <BrowserStateWrap>
              <div className="table-bordered browser-state-table table-responsive">
                <Table columns={browserColumns} dataSource={browserData} pagination={false} />
              </div>
            </BrowserStateWrap>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default BrowserState;
