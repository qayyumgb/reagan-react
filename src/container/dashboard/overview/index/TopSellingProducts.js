import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { AgingDays } from '../../../../redux/gallary/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { TopSellerWrap } from '../../Style';
import { BorderLessHeading, TableDefaultStyle } from '../../../styled';

import topProduct from '../../../../demoData/table-data.json';

const { topSaleProduct } = topProduct;



const TopSellingProduct = React.memo(() => {
  const dispatch = useDispatch();
  const value = {
    "startDate": "08/01/2023",
    "endDate": "08/30/2023"
  }

  useEffect(() => {
    dispatch(AgingDays(value));
  },[]);
  const AgingData = useSelector((state) => state.gallery.agingData);
  const sellingColumns = [
    {
      title: 'WIP Aging Days',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'price',
      key: 'price',
    },
  ];
  const [state, setState] = useState({
    sellingTab: 'today',
  });

 

  /* State destructuring */
let i = 1
  const sellingData = [];
  if (AgingData) {
    AgingData.map((value) => {
      value = { ...value, key: i++}
      const { key, Days,Qty } = value;
      return sellingData.push({
        key,
        name: (
          <div className="product-info align-center-v">
            {/* <div className="product-img">
              <img src={require(`../../../../static/img/products/electronics/${img}`)} alt="" />
            </div> */}
            <span className="product-name">{Days}</span>
          </div>
        ),
        price:(
          <span className='quatity'>{Qty}</span>
        )
      });
    });
  }

  return (
    <div className="full-width-table">
      <BorderLessHeading>
        <Cards
          // isbutton={
          //   <div className="ninjadash-card-nav">
          //     <ul>
          //       <li className={sellingTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
          //         <Link onClick={(e) => handleChangePeriod('today', e)} to="#">
          //           Today
          //         </Link>
          //       </li>
          //       <li className={sellingTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
          //         <Link onClick={(e) => handleChangePeriod('week', e)} to="#">
          //           Week
          //         </Link>
          //       </li>
          //       <li className={sellingTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
          //         <Link onClick={(e) => handleChangePeriod('month', e)} to="#">
          //           Month
          //         </Link>
          //       </li>
          //     </ul>
          //   </div>
          // }
          title="WIP Aging Days"
          size="small" className='border-bottom-0'
        >
          <TableDefaultStyle className="ninjadash-having-header-bg">
            <TopSellerWrap>
              <div className="table-bordered top-seller-table table-responsive">
                <Table columns={sellingColumns} dataSource={sellingData} pagination={false} />
              </div>
            </TopSellerWrap>
          </TableDefaultStyle>
        </Cards>
      </BorderLessHeading>
    </div>
  );
});

export default TopSellingProduct;
