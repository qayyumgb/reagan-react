import React,{useEffect,useState} from 'react';
import { Row, Col } from 'antd';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardCounter } from '../../../../redux/gallary/actionCreator';
import { DataService } from '../../../../config/dataService/dataService';
import OverviewCard from '../../../../components/cards/OverviewCard';
import { OverviewDataStyleWrap } from '../../Style';

import OverviewData from '../../../../demoData/overviewData.json';

const OverviewDataList = React.memo(({ column }) => {
  const overviewData1 = useSelector((state) => state.gallery.data);
  const OverviewDataSorted = OverviewData.slice(0, 4);
  const dispatch = useDispatch();
  const value = {
    "startDate": "08/01/2023",
    "endDate": "08/30/2023"
  }
  useEffect(() => {
    dispatch(DashboardCounter(value));
  },[]);

  return (
    <OverviewDataStyleWrap>
      <Row gutter={25}>
        {overviewData1.map((item, i) => {
          return (
            <Col xxl={column === '2' ? null : 6} md={6} xs={24} key={i}>
              <OverviewCard data={item} contentFirst />
            </Col>
          );
        })}
      </Row>
    </OverviewDataStyleWrap>
  );
});

OverviewDataList.propTypes = {
  column: propTypes.string,
};

OverviewDataList.defaultProps = {
  column: '2',
};

export default OverviewDataList;
