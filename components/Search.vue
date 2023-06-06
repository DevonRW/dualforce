<template>
  <div>
    <input type="search" />

    <select name="type" @change="onTypeChange($event)">
      <option value="All">Type: All</option>
      <option value="action">Type: Action</option>
      <option value="created">Type: Created</option>
      <option value="recruit">Type: Recruit</option>
      <option value="leader">Type: Leader</option>
    </select>

    <select name="cost" @change="onCostChange($event)">
      <option value="All">Cost: All</option>
      <option value="free">Cost: Free</option>
      <option value="bronze">Cost: Bronze</option>
      <option value="silver">Cost: Silver</option>
      <option value="gold">Cost: Gold</option>
    </select>

    <select name="rarity" @change="onRarityChange($event)">
      <option value="All">Rarity: All</option>
      <option value="common">Rarity: Common</option>
      <option value="rare">Rarity: Rare</option>
      <option value="super-rare">Rarity: Super-Rare</option>
      <option value="ultimate">Rarity: Ultimate</option>
      <option value="legendary">Rarity: Legendary</option>
    </select>

    <select name="set">
      <option value="All">Sets: All</option>
      <option value="81ba7782-b497-48ea-b7e2-0e5ffa6a693f">Set: Origins</option>
      <option value="29db653a-6c7c-4f80-901b-9ad71e95b42a">Promo</option>
      <option value="72091027-a763-41b7-a02e-4275505372ff">Set: Green Arrow</option>
      <option value="f5851957-bd04-4577-9ca1-b8c8cd8abf18">Shazam</option>
    </select>

  </div>
</template>

<script lang="ts">
  import { mapActions } from 'pinia'
  import { useMainStore } from '@/store/index'

  export default {
    methods: {
      ...mapActions(useMainStore, ['setFilterCardCost', 'setFilterCardType', 'setFilterCardRarity']),
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