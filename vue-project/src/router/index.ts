import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import BudgetView from "@/views/BudgetView/BudgetView.vue"
import TransactionsView from "@/views/TransactionsView/TransactionsView.vue"
import SubscriptionsView from "@/views/SubscriptionsView/SubscriptionsView.vue"
import LoansView from "@/views/LoansView/LoansView.vue"
import ReportsView from "@/views/ReportsView/ReportsView.vue"
import SavingsView from "@/views/SavingsView/SavingsView.vue"
import AdviceView from "@/views/AdviceView/AdviceView.vue"
import AccountView from "@/views/AccountView/AccountView.vue"
import SettingsView from "@/views/SettingsView/SettingsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      name: 'Budget',
      path: '/budget',
      component: BudgetView,
      
    },
    {
      name: 'Transactions',
      path: '/transactions',
      component: TransactionsView,
    },
    {
      name: 'Subscriptions',
      path: '/subscriptions',
      component: SubscriptionsView,
    },
    {
      name: 'Loans',
      path: '/loans',
      component: LoansView,
    },
    {
      name: 'Reports',
      path: '/reports',
      component: ReportsView,
    },
    {
      name: 'Savings',
      path: '/savings',
      component: SavingsView,
    },
    {
      name: 'Financial advice',
      path: '/advice',
      component: AdviceView,
    },
    {
      name: 'Account',
      path: '/account',
      component: AccountView,
    },
    {
      name: 'Settings',
      path: '/settings',
      component: SettingsView,
    },
    
  ],
})

export default router