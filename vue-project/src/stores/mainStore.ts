import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {
  const items = ref(
  [
      {
          name: 'Home',
          isLink: true,
          path: '#',
          name1: 'Hello World'
      },
      {
          name: 'About us',
          isLink: true,
          path: '#'
      },
      {
          name: 'Service',
          isLink: true,
          path: '#'
      },
      {
          name: 'Blog',
          isLink: false,
          innerList:
          [
              {
                  name: 'Home1',
                  isLink: true,
                  path: '/#Tigri'
              },
              {
                  name: 'Home2',
                  isLink: true,
                  path: '/#Home2'
              },
              {
                  name: 'Home3',
                  isLink: true,
                  path: '/#Home3'
              },
          ]
      },
      {
          name: 'Page',
          isLink: false,
          path: '#',
          innerList:
          [
              {
                  name: 'Home1',
                  isLink: true,
                  path: '#'
              },
              {
                  name: 'Home2',
                  isLink: true,
                  path: '#'
              },
              {
                  name: 'Home3',
                  isLink: true,
                  path: '#'
              },
          ]
      }
  ])
  return {
    items
  }
})
