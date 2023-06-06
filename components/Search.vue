<template>
  <div>
    <input type="search" />
    <select name="grade" @change="onGradeChange($event)" >
      <option value="All">Grade: All</option>
      <option value="free">Grade: Free</option>
      <option value="bronze">Grade: Bronze</option>
      <option value="silver">Grade: Silver</option>
      <option value="gold">Grade: Gold</option>
    </select>

    <select name="type" @change="onTypeChange($event)" >
      <option value="All">Type: All</option>
      <option value="action">Type: Action</option>
      <option value="created">Type: Created</option>
      <option value="recruit">Type: Recruit</option>
      <option value="leader">Type: Leader</option>
    </select>
  </div>
</template>

<script lang="ts">
  import { mapActions } from 'pinia'
  import { useMainStore } from '@/store/index'

  export default {
    methods: {
      ...mapActions(useMainStore, ['setFilterCostGrade', 'setFilterCardType']),
      onGradeChange(event: Array) {
        this.setFilterCostGrade(event.target.value)
      },
      onTypeChange(event: Array) {
        this.setFilterCardType(event.target.value)
      }

    }
  }
</script>