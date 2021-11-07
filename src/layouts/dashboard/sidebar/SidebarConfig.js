import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Database',
    path: '/dashboard/database',
    icon: getIcon('fluent:database-search-20-filled')
  },
  {
    title: 'statistics',
    path: '/dashboard/statistics',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'submit',
    path: '/dashboard/submit',
    icon: getIcon('bi:cloud-upload-fill')
  },
  {
    title: 'contacts',
    path: '/dashboard/contacts',
    icon: getIcon('zondicons:conversation')
  },
  {
    title: 'help',
    path: '/dashboard/help',
    icon: getIcon('ci:help-circle')
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('ls:login')
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
