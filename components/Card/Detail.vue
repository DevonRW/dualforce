<template>
  <article className="border-b-2">
    <ul>
      <li>Name: {{ card.name }}</li>
      <li>Slug: {{ card.slug }}</li>
      <li>Card Type: {{ card.card_type }}</li>
      <li>Subname: {{ card.subname }}</li>
      <li>Attack: {{ card.attack }}</li>
      <li>Defense: {{ card.defense }}</li>
      <li>Cost Grade: {{ card.cost_grade }}</li>
      <li>Cost Value: {{ card.cost_value }}</li>
      <li>Effect: {{ card.effect }}</li>
      <li>Card Set: {{ card.card_set }}</li>
      <li><img :src="`${this.getImage(card)}`" loading="lazy" alt="" /></li>
    </ul>
  </article>
</template>

<script lang="ts">
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    methods: {
      getImage(card : Object) : string {
        return `https://static.dcdualforce.gg/cards/${card.slug}.png`
      }
    }
  }
</script>