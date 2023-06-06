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
      ...mapState(useMainStore, [
        'filterName',
        'filterCardCost',
        'filterCardType',
        'filterCardRarity',
        'filterCardSet',
        'filterFaction',
        'filterAttack',
        'filterDefense'
      ]),
    },
    methods: {
      displayItem(card : Array) {
        let classNames = "w-48 text-white text-center"

        // Filter by Name
        if (!card.name.toLowerCase().includes(this.filterName.toLowerCase()) && this.filterName !== '') {
          return classNames + ' hidden'
        }

        // Filter by Cost
        if (card.cost_grade !== this.filterCardCost && this.filterCardCost !== 'All') {
          return classNames + ' hidden'
        }
        
        // Filter by Type
        if (card.card_type !== this.filterCardType && this.filterCardType !== 'All') {
          return classNames + ' hidden'
        }
        
        // Filter by Rarity
        if (card.rarity !== this.filterCardRarity && this.filterCardRarity !== 'All') {
          return classNames + ' hidden'
        }
        
        // Filter by Set
        if (card.card_set !== this.filterCardSet && this.filterCardSet !== 'All') {
          return classNames + ' hidden'
        }

        // Filter by Faction
        if (card.faction !== this.filterFaction && this.filterFaction !== 'All') {
          return classNames + ' hidden'
        }
        
        // Filter by Attack
        if (this.filterAttack !== 'All') {

          if (card.attack == '0' && this.filterAttack !== '0') {
            return classNames + ' hidden'
          }
          
          if ((['1', '2'].indexOf(card.attack) > -1) && this.filterAttack !== 'small') {
            return classNames + ' hidden'
          }
          
          if ((['3', '4', '5'].indexOf(card.attack) > -1) && this.filterAttack !== 'medium') {
            return classNames + ' hidden'
          }
          
          if ((['6', '7', '8', '9', '10'].indexOf(card.attack) > -1) && this.filterAttack !== 'large') {
            return classNames + ' hidden'
          }
        }

        // Filter by Defense
        if (card.defense && this.filterDefense !== 'All') {
          if (card.defense == '0' && this.filterDefense !== '0') {
            return classNames + ' hidden'
          }
          
          if ((['1', '2'].indexOf(card.defense) > -1) && this.filterDefense !== 'small') {
            return classNames + ' hidden'
          }
          
          if ((['3', '4', '5'].indexOf(card.defense) > -1) && this.filterDefense !== 'medium') {
            return classNames + ' hidden'
          }
          
          if ((['6', '7', '8', '9', '10'].indexOf(card.defense) > -1) && this.filterDefense !== 'large') {
            return classNames + ' hidden'
          }
        }

        // None to filter out. Display everything
        return classNames + ' block'
      }
    }
  }
</script>