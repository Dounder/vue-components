import { defineStore } from 'pinia'

interface StoreState {
  pageTitle: string
}

export const useStore = defineStore('store', {
  state: (): StoreState => ({
    pageTitle: 'Dcode',
  }),
  getters: {
    getPageTitle: (state): string => state.pageTitle,
  },
  actions: {
    // use normal function to avoid posibly undefined state
    setPageTitle(title: string) {
      this.pageTitle = title
      document.title = title
    },
  },
})
