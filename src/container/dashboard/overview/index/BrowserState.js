import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { PrevousMonth } from '../../../../redux/gallary/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BrowserStateWrap } from '../../Style';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import browserStates from '../../../../demoData/table-data.json';
import { DataService } from '../../../../config/dataService/dataService';

const { browserState } = browserStates;

const BrowserState = React.memo(() => {
  const dispatch = useDispatch();
  const value = {
    "startDate": "08/01/2023",
    "endDate": "08/30/2023"
  }
  useEffect(() => {
    dispatch(PrevousMonth(value));
  },[]);
  useEffect(() => {
    getSummaryData(value)
  },[]);

  const prevMonthData = useSelector((state) => state.gallery.preMonthData);
  const [state, setState] = useState({
    browserTab: 'today',
  });
  const [summaryData, setSummaryData] = useState([]);
  
  const getSummaryData = (value) => {
    DataService.post('/dashboard/get-tmo-summary',value)
      .then(response => {
        setSummaryData(response.data.data)
      })
      .catch(error => {
        
      });
  };
  /* State destructuring */
  const summaryTempData = [];
  let j = 0;
  if (summaryData) {
    [1].map((value) => {
      value = { ...summaryData, key: j++,Name:'TMO Rev'}
      const { key, Name, Rate, Amount} = value;
      return summaryTempData.push({
        key,
        emp1: (
          <div className="ninjadash-product-info align-center-v">
            <span className="ninjadash-product-name">{Name}</span>
          </div>
        ),
        emp2:(
          <span className='quantity'>{Rate}</span>
        ),
        emp3:(
          <span>{Amount}</span>
        ),
      });
    })
   
  }


  const browserData = [];
  let i = 0;
  if (prevMonthData) {
    prevMonthData.map((value) => {
      value = { ...value, key: i++}
      const { key, Name, Qty, Income} = value;
      return browserData.push({
        key,
        total: (
          <div className="ninjadash-product-info align-center-v">
            <span className="ninjadash-product-name">{Name}</span>
          </div>
        ),
        quantity:(
          <span className='quantity'>{Qty}</span>
        ),
        income:(<span>{Income}</span>),
        
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
  const empCol = [
    {
      title: '',
      dataIndex: 'emp1',
      key: 'emp1',
    },
    {
      title: '',
      dataIndex: 'emp2',
      key: 'emp2',
    },
    {
      title: '',
      dataIndex: 'emp3',
      key: 'emp3',
    },
  ];
  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
         
          title="Prev Month Total"
          size="large" className="border-top-0"
        >
          <TableDefaultStyle className="ninjadash-having-header-bg ant-table-autoH">
            <BrowserStateWrap>
              <div className="table-bordered browser-state-table table-responsive">
                <Table columns={browserColumns} dataSource={browserData} pagination={false} />
              </div>
              <div className="table-bordered dashboard-summary-table browser-state-table table-responsive">
                <Table columns={empCol} dataSource={summaryTempData} pagination={false} />
              </div>
              
            </BrowserStateWrap>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default BrowserState;
