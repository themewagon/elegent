interface NavItem {
  title: string;
  path: string;
  icon?: string;
  collapsible: boolean;
  sublist?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: 'ion:home-sharp',
    collapsible: true,
    sublist: [
      {
        title: 'Dashboard',
        path: '/',
        collapsible: false,
      },
      {
        title: 'Sales',
        path: '/',
        collapsible: false,
      },
    ],
  },
  {
    title: 'Pages',
    path: 'pages',
    icon: 'icomoon-free:drawer',
    collapsible: true,
    sublist: [
      {
        title: 'Profile',
        path: 'profile',
        collapsible: true,
        sublist: [
          {
            title: 'Overview',
            path: 'overview',
            collapsible: false,
          },
          {
            title: 'All Projects',
            path: 'all-projects',
            collapsible: false,
          },
        ],
      },
      {
        title: 'Users',
        path: 'users',
        collapsible: true,
        sublist: [
          {
            title: 'All Users',
            path: 'all-users',
            collapsible: false,
          },
          {
            title: 'Add user',
            path: 'add-user',
            collapsible: false,
          },
        ],
      },
      {
        title: 'Account',
        path: 'account',
        collapsible: true,
        sublist: [
          {
            title: 'Setting',
            path: 'setting',
            collapsible: false,
          },
          {
            title: 'Billing',
            path: 'billing',
            collapsible: false,
          },
          {
            title: 'Invoice',
            path: 'invoice',
            collapsible: false,
          },
        ],
      },
      {
        title: 'Projects',
        path: 'projects',
        collapsible: true,
        sublist: [
          {
            title: 'Timeline',
            path: 'timeline',
            collapsible: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Applications',
    path: 'applications',
    icon: 'mingcute:grid-fill',
    collapsible: true,
    sublist: [
      {
        title: 'Kanban',
        path: 'kanban',
        collapsible: false,
      },
      {
        title: 'Wizard',
        path: 'wizard',
        collapsible: false,
      },
      {
        title: 'Data Tables',
        path: 'data-tables',
        collapsible: false,
      },
      {
        title: 'Schedule',
        path: 'schedule',
        collapsible: false,
      },
    ],
  },
  {
    title: 'Ecommerce',
    path: 'ecommerce',
    icon: 'tabler:shopping-bag',
    collapsible: true,
    sublist: [
      {
        title: 'Products',
        path: 'products',
        collapsible: true,
        sublist: [
          {
            title: 'All Products',
            path: 'all-products',
            collapsible: false,
          },
          {
            title: 'Edit Product',
            path: 'edit-product',
            collapsible: false,
          },
          {
            title: 'New Product',
            path: 'new-product',
            collapsible: false,
          },
        ],
      },
      {
        title: 'Orders',
        path: 'orders',
        collapsible: true,
        sublist: [
          {
            title: 'Order List',
            path: 'order-list',
            collapsible: false,
          },
          {
            title: 'Order Detail',
            path: 'order-detail',
            collapsible: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Authentication',
    path: 'authentication',
    icon: 'f7:exclamationmark-shield-fill',
    collapsible: true,
    sublist: [
      {
        title: 'Sign In',
        path: 'login',
        collapsible: false,
      },
      {
        title: 'Sign Up',
        path: 'sign-up',
        collapsible: false,
      },
      {
        title: 'Reset password',
        path: 'reset-password',
        collapsible: false,
      },
    ],
  },
  {
    title: 'Notification',
    path: 'notifications',
    icon: 'zondicons:notifications',
    collapsible: false,
  },
  {
    title: 'Calendar',
    path: 'calendar',
    icon: 'ph:calendar',
    collapsible: false,
  },
  {
    title: 'Message',
    path: 'messages',
    icon: 'ph:chat-circle-dots-fill',
    collapsible: false,
  },
];
