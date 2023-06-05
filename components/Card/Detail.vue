<template>
  <article>
   <div
      :data-type="card.card_type"
      :data-card_set="card.card_set"
      :data-subname="card.subname"
      :data-attack="card.attack"
      :data-defense="card.defense"
      :data-cost_grade="card.cost_grade"
      :data-cost_value="card.cost_value"
    >
      <img :src="`${getImage(card.slug)}`" alt="" />
      <h2 class="font-bold mb-2">{{ card.name }}</h2>
      <div v-if="card.faction" :class="card.faction">{{ card.faction }}</div>
      <div v-if="card.effect" v-html="card.effect" class="text-sm"></div>
    </div>
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
    data() {
      return {
        tyranny: 'purple'
      }
    },
    methods: {
      getImage(slug : string) : string {
        return `https://static.dcdualforce.gg/cards/${slug}.png`
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