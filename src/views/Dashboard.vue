<template>
  <div>
    <quick-numbers />
    <countries-table />
    <!-- <cluster-map /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    QuickNumbers: () => import('@/components/QuickNumbers.vue'),
    CountriesTable: () => import('@/components/CountriesTable.vue'),
    ClusterMap: () => import('@/components/ClusterMap.vue')
  }
})
export default class Dashboard extends Vue { }
</script>
