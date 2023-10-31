import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import Gallery from './gallery';
import withAdminLayout from '../../layout/withAdminLayout';

const Components = lazy(() => import('./components'));
const Firebase = lazy(() => import('./firebase'));
const NotFound = lazy(() => import('../../container/pages/404'));

const Admin = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/*" element={<Dashboard />} />
        <Route path="gallery/*" element={<Gallery />} />
        <Route path="components/*" element={<Components />} />
        {/* <Route path="app/kanban/*" element={<Kanban />} /> */}
        <Route path="firestore/*" element={<Firebase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
