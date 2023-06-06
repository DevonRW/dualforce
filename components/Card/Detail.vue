<template>
  <article
    v-on:mouseover="setDisplay(true)"
    v-on:mouseout="setDisplay(false)"
    >
    <img :src="`${getImage(card.slug)}`" alt="" class="hover:scale-110  transition-transform hover:drop-shadow-[0_10px_10px_rgb(253,213,0)]" />
    <section v-show="!displayDetails">
      <h2 class="font-bold mb-2">{{ card.name }}</h2>
      <div v-if="card.faction" :class="card.faction">{{ card.faction }}</div>
      <div v-if="card.effect" v-html="card.effect" class="text-sm"></div>
    </section>
    <section v-show="displayDetails">
      <h2 class="font-bold mb-2">{{ card.name }}</h2>
      <div class="capitalize">Cost: {{ card.cost_grade }}</div>
      <div class="capitalize">Rarity: {{ card.rarity }}</div>
      <div>Power: {{ card.attack }}</div>
      <div>Health: {{ card.defense }}</div>
    </section>
  </article>
</template>

<script lang="ts">

  export default {
    data() {
      return {
        displayDetails: false
      }
    },
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    methods: {
      getImage(slug : string) : string {
        return `https://static.dcdualforce.gg/cards/${slug}.png`
      },
      setDisplay(val: boolean) {
        this.displayDetails = val
      }
    }
  }
</script>

<style lang="postcss">
  .tyranny {
    @apply bg-purple-500 rounded-lg py-1 text-sm mb-2 capitalize;
  }
  .might {
    @apply bg-red-500 rounded-lg py-1 text-sm mb-2 capitalize;
  }
  .tactics {
    @apply bg-blue-500 rounded-lg py-1 text-sm mb-2 capitalize;
  }
  .anarchy {
    @apply bg-yellow-500 rounded-lg py-1 text-sm mb-2 capitalize;
  }
  .energy {
    @apply bg-green-500 rounded-lg py-1 text-sm mb-2 capitalize;
  }
</style>