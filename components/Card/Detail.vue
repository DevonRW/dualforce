<template>
  <article>
    <img :src="`${getImage(card.slug)}`" alt="" class="hover:scale-110  transition-transform hover:drop-shadow-[0_10px_10px_rgb(253,213,0)]" />
    <h2 class="font-bold mb-2">{{ card.name }}</h2>
    <div v-if="card.faction" :class="card.faction">{{ card.faction }}</div>
    <div v-if="card.effect" v-html="card.effect" class="text-sm"></div>
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
    // computed: {
    //   ...mapState(useMainStore, ['filterCostGrade','filterCardType']),
    //   displayItem() {

    //     if (this.card.cost_grade !== this.filterCostGrade && this.filterCostGrade !== 'All') {
    //       return 'hidden'
    //     }
        
    //     if (this.card.card_type !== this.filterCardType && this.filterCardType !== 'All') {
    //       return 'hidden'
    //     }

    //     return 'block'
    //   }
    // },
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