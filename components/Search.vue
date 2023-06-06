<template>
  <form class="mt-4 p-4 flex flex-wrap text-white max-w-[90%] mx-auto bg-black bg-blue-900 rounded-lg gap-2">
    <label>
      Name: 
      <input v-model="searchName" type="search" @keyup="filterSearchName" class="bg-blue-500 px-1 py-0.5" />
    </label>

    <label>Type: 
      <select name="type" @change="onTypeChange($event)" class="bg-blue-500 p-1">
        <option value="All">All</option>
        <option value="action">Action</option>
        <option value="created">Created</option>
        <option value="recruit">Recruit</option>
        <option value="leader">Leader</option>
      </select>
    </label>

    <label>
      Cost: 
      <select name="cost" @change="onCostChange($event)" class="bg-blue-500 p-1">
        <option value="All">All</option>
        <option value="free">Free</option>  
        <option value="bronze">Bronze</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
      </select>
    </label>

    <label>
      Rarity:
      <select name="rarity" @change="onRarityChange($event)" class="bg-blue-500 p-1">
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
      <select name="set" @change="onSetChange($event)" class="bg-blue-500 p-1">
        <option value="All">All</option>
        <option value="81ba7782-b497-48ea-b7e2-0e5ffa6a693f">Origins</option>
        <option value="933b9932-0ac5-4f0e-ba1d-4c91736c14a9">Promo</option>
        <option value="72091027-a763-41b7-a02e-4275505372ff">Green Arrow</option>
        <option value="f5851957-bd04-4577-9ca1-b8c8cd8abf18">Shazam</option>
      </select>
    </label>

    <label>
      Faction:
      <select name="faction" class="bg-blue-500 p-1">
        <option value="All">All</option>
        <option value="anarchy">Anarchy</option>
        <option value="energy">Energy</option>
        <option value="might">Might</option>
        <option value="tactics">Tactics</option>
        <option value="tyranny">Tyranny</option>
        </select>
    </label>

    <label>
      Power:
      <select name="power" class="bg-blue-500 p-1">
        <option value="All">All</option>
        <option value="0">0</option>
        <option value="small">1-2</option>
        <option value="medium">3-5</option>
        <option value="large">6+</option>
      </select>
    </label>

    <label>
      Health:
      <select name="health" class="bg-blue-500 p-1">
        <option value="All">All</option>
        <option value="0">0</option>
        <option value="small">1-2</option>
        <option value="medium">3-5</option>
        <option value="large">6+</option>
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