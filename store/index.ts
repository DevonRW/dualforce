import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    filterName: '',
    filterCardType: 'All',
    filterCardSet: 'All',
    filterCardCost: 'All',
    filterCardRarity: 'All',
    filterAttack: '',
    filterDefense: '',
    filterCostValue: '',
    filterFaction: '',
  }),
  actions: {
    setFilterCardCost(value: string) {
      this.filterCardCost = value
    },
    setFilterCardType(value: string) {
      this.filterCardType = value
    },
    setFilterCardRarity(value: string) {
      this.filterCardRarity = value
    },
    setFilterCardSet(value: string) {
      this.filterCardSet = value
    },
  },
  getters: {
    getFilterCardCost: state => state.filterCardCost,
    getFilterCardType: state => state.filterCardType,
    getFilterCardSet: state => state.filterCardSet,
    getFilterCardRarity: state => state.filterCardRarity,
  }
})