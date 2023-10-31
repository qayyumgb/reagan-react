import React from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';

function Editors() {
  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: 'first',
      breadcrumbName: 'Editors',
    },
  ];
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Editors" routes={PageRoutes} />
    </>
  );
}

export default Editors;
