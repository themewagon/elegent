export const navItems = [
  {
    title: 'Home',
    path: '/',
    icon: 'ion:home-sharp',
    collapsible: true,
    sublist: [
      {
        title: 'Dashboard',
        path: '/dashboard',
      },
      {
        title: 'Sales',
        path: '/sales',
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
        path: '/profile',
        collapsible: true,
        sublist: [
          {
            title: 'Overview',
            path: '/overview',
          },
          {
            title: 'All Projects',
            path: '/all-projects',
          },
        ],
      },
      {
        title: 'Users',
        path: '/users',
        collapsible: true,
        sublist: [
          {
            title: 'All Users',
            path: '/all-users',
          },
          {
            title: 'Add user',
            path: '/add-user',
          },
        ],
      },
      {
        title: 'Account',
        path: '/account',
        collapsible: true,
        sublist: [
          {
            title: 'Setting',
            path: '/setting',
          },
          {
            title: 'Billing',
            path: '/billing',
          },
          {
            title: 'Invoice',
            path: '/invoice',
          },
        ],
      },
      {
        title: 'Projects',
        path: '/projects',
        collapsible: true,
        sublist: [
          {
            title: 'All Projects',
            path: '/all-projects',
          },
          {
            title: 'Timeline',
            path: '/timeline',
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
        path: '/kanban',
      },
      {
        title: 'Wizard',
        path: '/wizard',
      },
      {
        title: 'Data Tables',
        path: '/data-tables',
      },
      {
        title: 'Schedulea',
        path: '/schedule',
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
        path: '/produts',
        collapsible: true,
        sublist: [
          {
            title: 'All Products',
            path: '/all products',
          },
          {
            title: 'Edit Product',
            path: '/edit-product',
          },
          {
            title: 'New Products P',
            path: '/data-tables',
          },
        ],
      },
      {
        title: 'Orders',
        path: '/orders',
        collapsible: true,
        sublist: [
          {
            title: 'Order List',
            path: '/order-list',
          },
          {
            title: 'Order Detail',
            path: '/order-detail',
          },
        ],
      },
    ],
  },
  {
    title: 'Authentication',
    path: 'authentication/login',
    icon: 'f7:exclamationmark-shield-fill',
    collapsible: true,
    sublist: [
      {
        title: 'Sign In',
        path: '/login',
      },
      {
        title: 'Sign Up',
        path: '/sign-up',
      },
      {
        title: 'Reset password',
        path: '/reset-password',
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
