import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const NotFound = lazy(() => import('../../container/pages/404'));

function ChartRoute() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ChartRoute;
