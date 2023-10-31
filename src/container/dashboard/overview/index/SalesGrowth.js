import UilDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import { Spin } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import DashboardChart from '../../../../components/charts/DashboardChart';
import { BorderLessHeading } from '../../../styled';
import { CardBarChart, ChartContainer } from '../../Style';
import config from '../../../../config/config';
import chartData from '../../../../demoData/dashboardChartContent.json';

const SalesGrowth = React.memo(() => {
  const salesGrowthData = chartData.salesGrowth;
  const { mainContent } = useSelector((state) => {
    return {
      mainContent: state.ChangeLayoutMode.mode,
    };
  });
  const [state, setState] = useState({
    sellingTab: 'today',
  });

  /* State destructuring */
  const { sellingTab } = state;
  const { themeColor } = config;
  const chartjsPieChart = {
    height: 300,
    labels: ['apple', 'samsung', 'Other'],
    datasets: [
      {
        data: [20, 20, 30],
        backgroundColor: ['#560bd0', '#3679e9', '#d52027'],
      },
    ],
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },

    option: {
      borderColor: themeColor[mainContent]['white-background'],
      maintainAspectRatio: false,
      responsive: true,
    },
    tooltip: {
      mode: 'index',
      callbacks: {
        label(t) {
          const { dataset, label, dataIndex } = t;
          return `  ${label} ${dataset.data[dataIndex]}`;
        },
        labelColor({ dataIndex, dataset }) {
          return {
            backgroundColor: dataset.backgroundColor[dataIndex],
            borderColor: 'transparent',
          };
        },
      },
    },
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        boxWidth: 6,
        display: true,
        usePointStyle: true,
      },
    },
  };

  return (
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
        title="Sales Growth"
      >
        {!salesGrowthData[sellingTab] ? (
          <div className="sd-spin">
            <Spin />
          </div>
        ) : (
          <CardBarChart className="ninjadash-profitGroth-barCHar-wrap">
            <ChartContainer>
              <div className="ninjadash-chart-container">
                <DashboardChart {...chartjsPieChart} type="pie" id="pieChart" />
              </div>
            </ChartContainer>
          </CardBarChart>
        )}
      </Cards>
    </BorderLessHeading>
  );
});

export default SalesGrowth;
