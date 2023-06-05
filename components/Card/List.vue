<template>
  <section>
    <ul>
      <li v-for="card in cardList" v-bind:key="card.name">
        {{ card.name }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
  import cards from '~/src/dualForceCards.json'

  export default {
    data() {
      return {
        cardList: cards
      }
    }
  }
</script>