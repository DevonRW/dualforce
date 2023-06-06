import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    filterName: '',
    filterCardType: 'All',
    filterCardSet: '',
    filterAttack: '',
    filterDefense: '',
    filterCostValue: '',
    filterCostGrade: 'All',
    filterFaction: '',
  }),
  actions: {
    setFilterCostGrade(value: string) {
      this.filterCostGrade = value
    },
    setFilterCardType(value: string) {
      this.filterCardType = value
    },
  },
  getters: {
    getFilterCostGrade: state => state.filterCostGrade,
    getFilterCardType: state => state.filterCardType,
    
  }
})