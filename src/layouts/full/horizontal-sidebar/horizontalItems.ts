import { CircleIcon, PointIcon } from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  subCaption?: string;
  class?: string;
  extraclass?: string;
  type?: string;
}

const horizontalItems: menu[] = [
  {
    title: 'Dashboard',
    icon: 'home-2-linear',
    to: '/'
  },

  {
    title: 'Clients',
    icon: 'user-linear',
    to: '/clients'
  },

  {
    title: 'Store',
    icon: 'shop-linear',
    to: '/store'
  },
  {
    title: 'Services',
    icon: 'chart-square-line-duotone',
    to: '/services'
  },
  {
    title: 'Booking',
    icon: 'notes-linear',
    to: '/booking'
  },
  {
    title: 'Reviews',
    icon: 'star-outline',
    to: '/reviews'
  },
  {
    title: 'Offers',
    icon: 'ticket-broken',
    to: '/offers'
  },

  {
    title: 'Settlements',
    icon: 'clipboard-text-outline',
    to: '#',
    children: [
      {
        title: 'Settlement1',
        to: '/settlements/settlement1'
      },
      {
        title: 'Settlement2',
        to: '/settlements/settlement2'
      },
      {
        title: 'Settlement3',
        to: '/settlements/settlement3'
      }
    ]
  },

  {
    title: 'Permissions',
    icon: 'shield-keyhole-minimalistic-outline',
    to: '#',
    children: [
      {
        title: 'Permissions1',
        to: '/permissions/permissions1'
      },
      {
        title: 'Permissions2',
        to: '/permissions/permissions2'
      }
    ]
  },

  {
    title: 'ReportsStatistics',
    icon: 'checklist-minimalistic-linear',
    to: '/Reports-Statistics'
  },
  {
    title: 'ConnectServices',
    icon: 'folder-path-connect-outline',
    to: '/connect-services'
  },
  {
    title: 'SubscriptionPackage',
    icon: 'chat-round-video-outline',
    to: '/subscription-package'
  }
];

export default horizontalItems;
