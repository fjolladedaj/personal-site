import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({ isSidebarOpen: false }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    }
  }
})
