import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAsideStore = defineStore('asideStore', () => {
  const items = ref(
  [
      {
          name: 'Home',
          id: 0,
          path: '/',
      },
      {
          name: 'Budget',
          id: 1,
          path: '/budget'
      },
      {
          name: 'Transactions',
          id: 2,
          path: '/transactions'
      },
      {
          name: 'Subscriptions',
          id: 3,
          path: '/subscriptions'
      },
      {
          name: 'Loans',
          id: 4,
          path: '/loans'
      },
      {
          name: 'Reports',
          id: 5,
          path: '/reports'
      },
      {
          name: 'Savings',
          id: 6,
          path: '/savings'
      },
      {
          name: 'Financial advice',
          id: 7,
          path: '/advice'
      },
      {
          name: 'Account',
          id: 8,
          path: '/account'
      },
      {
          name: 'Settings',
          id: 9,
          path: '/settings'
      },
      

  ])
  return {
    items
  }
})
