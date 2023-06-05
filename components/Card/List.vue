<template>
  <div>
    It's the Card List

    <ul>
      <li>We'll loop through the loaded Card List and display Card Detail here</li>
    </ul>
  </div>
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