<template>
  <form class="py-4 flex flex-wrap justify-around text-white">
    <label>
      Name: 
      <input v-model="searchName" type="search" @keyup="filterSearchName" class="bg-blue-500" />
    </label>

    <label>Type: 
      <select name="type" @change="onTypeChange($event)" class="bg-blue-500">
        <option value="All">All</option>
        <option value="action">Action</option>
        <option value="created">Created</option>
        <option value="recruit">Recruit</option>
        <option value="leader">Leader</option>
      </select>
    </label>

    <label>
      Cost: 
      <select name="cost" @change="onCostChange($event)" class="bg-blue-500">
        <option value="All">Cost: All</option>
        <option value="free">Cost: Free</option>
        <option value="bronze">Cost: Bronze</option>
        <option value="silver">Cost: Silver</option>
        <option value="gold">Cost: Gold</option>
      </select>
    </label>

    <label>
      Rarity:
      <select name="rarity" @change="onRarityChange($event)" class="bg-blue-500">
        <option value="All">All</option>
        <option value="common">Common</option>
        <option value="rare">Rare</option>
        <option value="super-rare">Super-Rare</option>
        <option value="ultimate">Ultimate</option>
        <option value="legendary">Legendary</option>
      </select>
    </label>

    <label>
      Set:
      <select name="set" @change="onSetChange($event)" class="bg-blue-500">
        <option value="All">All</option>
        <option value="81ba7782-b497-48ea-b7e2-0e5ffa6a693f">Origins</option>
        <option value="933b9932-0ac5-4f0e-ba1d-4c91736c14a9">Promo</option>
        <option value="72091027-a763-41b7-a02e-4275505372ff">Green Arrow</option>
        <option value="f5851957-bd04-4577-9ca1-b8c8cd8abf18">Shazam</option>
      </select>
    </label>

  </form>
</template>

<script lang="ts">
  import { mapActions } from 'pinia'
  import { useMainStore } from '@/store/index'

  export default {
    data() {
      return {
        searchName: ''
      }
    },
    methods: {
      ...mapActions(useMainStore, [
        'setFilterName',
        'setFilterCardCost',
        'setFilterCardType',
        'setFilterCardRarity',
        'setFilterCardSet'
    ]),
      filterSearchName() {
        this.setFilterName(this.searchName)
      },
      onCostChange(event: Array) {
        this.setFilterCardCost(event.target.value)
      },
      onTypeChange(event: Array) {
        this.setFilterCardType(event.target.value)
      },
      onRarityChange(event: Array) {
        this.setFilterCardRarity(event.target.value)
      },
      onSetChange(event: Array) {
        this.setFilterCardSet(event.target.value)
      }
    }
  }
</script>