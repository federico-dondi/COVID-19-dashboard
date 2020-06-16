<template>
  <QuickNumbers />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    QuickNumbers: () => import('@/components/QuickNumbers.vue')
  }
})
export default class Dashboard extends Vue { }
</script>
