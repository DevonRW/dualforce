<template>
  <section>
    <ul class="flex flex-wrap justify-around gap-8">
      <li v-for="card in cardList" v-bind:key="card.name" class="w-48 text-white text-center">
        <CardDetail :card=card />
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