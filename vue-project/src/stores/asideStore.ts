import { ref } from 'vue'
import { defineStore } from 'pinia'
import HomeIcon from '@/assets/images/HouseSvg.svg'
import ListIcon from '@/assets/images/ListSvg.svg'
import DartIcon from '@/assets/images/DartSvg.svg'
import CardIcon from '@/assets/images/CardSvg.svg'
import CashIcon from '@/assets/images/CashSvg.svg'
import ChartIcon from '@/assets/images/ChartSvg.svg'
import WalletIcon from '@/assets/images/WalletSvg.svg'
import MessageIcon from '@/assets/images/MessageSvg.svg'
import PeopleIcon from '@/assets/images/PeopleSvg.svg'
import SettingsIcon from '@/assets/images/SettingsSvg.svg'


export const useAsideStore = defineStore('asideStore', () => {
  const items = ref(
  [
      {
          name: 'Home',
          id: 0,
          path: '/',
          icon: HomeIcon,
      },
      {
          name: 'Budget',
          id: 1,
          path: '/budget',
          icon: ListIcon,
      },
      {
          name: 'Transactions',
          id: 2,
          path: '/transactions',
          icon: DartIcon,
      },
      {
          name: 'Subscriptions',
          id: 3,
          path: '/subscriptions',
          icon: CardIcon,
      },
      {
          name: 'Loans',
          id: 4,
          path: '/loans',
          icon: CashIcon,
      },
      {
          name: 'Reports',
          id: 5,
          path: '/reports',
          icon: ChartIcon,
      },
      {
          name: 'Savings',
          id: 6,
          path: '/savings',
          icon: WalletIcon,
      },
      {
          name: 'Financial advice',
          id: 7,
          path: '/advice',
          icon: MessageIcon,
      },
      {
          name: 'Account',
          id: 8,
          path: '/account',
          icon: PeopleIcon,
      },
      {
          name: 'Settings',
          id: 9,
          path: '/settings',
          icon: SettingsIcon,
      },
      

  ])
  return {
    items
  }
})
