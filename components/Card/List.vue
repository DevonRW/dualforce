<template>
  <section>
    <ul class="flex flex-wrap justify-around gap-8">
      <li
        v-for="card in cardList"
        v-bind:key="card.name"
        :class="displayItem(card)"
        :data-type="card.card_type"
        :data-card_set="card.card_set"
        :data-subname="card.subname"
        :data-attack="card.attack"
        :data-defense="card.defense"
        :data-cost_grade="card.cost_grade"
        :data-cost_value="card.cost_value"
        :data-rarity="card.rarity"
      >
        <CardDetail :card=card />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
  import cards from '~/src/dualForceCards.json'
  import { mapState } from 'pinia'
  import { useMainStore } from '@/store/index'

  export default {
    data() {
      return {
        cardList: cards
      }
    },
    computed: {
      ...mapState(useMainStore, ['filterCardCost','filterCardType', 'filterCardRarity']),
    },
    methods: {
      displayItem(card : Array) {
        let classNames = "w-48 text-white text-center"
        if (card.cost_grade !== this.filterCardCost && this.filterCardCost !== 'All') {
          return classNames + ' hidden'
        }
        
        if (card.card_type !== this.filterCardType && this.filterCardType !== 'All') {
          return classNames + ' hidden'
        }
        
        if (card.rarity !== this.filterCardRarity && this.filterCardRarity !== 'All') {
          return classNames + ' hidden'
        }

        return classNames + ' block'
      }
    }
  }
</script>