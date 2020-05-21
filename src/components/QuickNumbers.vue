<template>
  <v-row dense>
    <quick-numbers-item
      v-for="(n, i) in numbers" :key="i"
      :icon="n.icon"
      :color="n.color"
      :description="n.description"
      :value="n.value"
    />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

interface QuickNumbersEntry {
  icon: string;
  color: string;
  description: string;
  value: number;
}

@Component({
  components: {
    QuickNumbersItem: () => import('@/components/QuickNumbersItem.vue')
  }
})
export default class QuickNumbers extends Vue {
  numbers: QuickNumbersEntry[] = [
    {
      icon: 'mdi-shield-check',
      color: 'primary',
      description: 'Total',
      value: 1456965
    },
    {
      icon: 'mdi-skull',
      color: 'error',
      description: 'Deceased',
      value: 63263
    },
    {
      icon: 'mdi-virus',
      color: 'warning',
      description: 'Confirmed',
      value: 1162857
    },
    {
      icon: 'mdi-arm-flex',
      color: 'success',
      description: 'Recovered',
      value: 230845
    }
  ]
}
</script>
