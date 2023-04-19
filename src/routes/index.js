import Accounts from '~/pages/Accounts';
import LegalEntity from '~/pages/LegalEntity';
import Product from '~/pages/Product';
import Project from '~/pages/Project';
import Reports from '~/pages/Reports';
import Vendor from '~/pages/Vendor';
import Invoice from '~/pages/Purchase/Invoice';
import Order from '~/pages/Purchase/Order';
import Requisition from '~/pages/Purchase/Requisition';

const publicRoutes = [
  { path: '/', component: Accounts, title: 'Accounts', icon: '/images/icons/user.svg' },
  { path: '/legal-entity', component: LegalEntity, title: 'Legal Entity', icon: '/images/icons/legal-entity.svg' },
  { path: '/product', component: Product, title: 'Product', icon: 'images/icons/product.svg' },
  { path: '/project', component: Project, title: 'Project', icon: '/images/icons/project.svg' },
  { path: '/reports', component: Reports, title: 'Reports', icon: '/images/icons/reports.svg' },
  { path: '/vendor', component: Vendor, title: 'Vendor', icon: '/images/icons/vendor.svg' },
  {
    path: '/purchase-invoice',
    component: Invoice,
    title: 'Purchase Invoice',
    icon: '/images/icons/purchase-invoice.svg',
  },
  { path: '/purchase-order', component: Order, title: 'Purchase Order', icon: '/images/icons/purchase-order.svg' },
  {
    path: '/purchase-requisition',
    component: Requisition,
    title: 'Purchuase Requisition',
    icon: '/images/icons/purchase-requisition.svg',
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
