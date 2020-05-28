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
import { Watch } from 'vue-property-decorator'

import {
  mdiShieldCheck,
  mdiSkull,
  mdiVirus,
  mdiArmFlex
} from '@mdi/js'

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
  get Global (): object { return this.$store.state.Global }
  set Global (value: object) { this.$store.commit('SET_GLOBAL', value) }

  @Watch('Global', { immediate: true })
  onGlobalChanged (newValue: any): void {
    if (newValue === undefined) return

    this.numbers[1].value = newValue.TotalDeaths
    this.numbers[2].value = newValue.TotalRecovered
    this.numbers[3].value = newValue.TotalConfirmed

    this.numbers[0].value =
      this.numbers[1].value +
      this.numbers[2].value +
      this.numbers[3].value
  }

  numbers: QuickNumbersEntry[] = [
    {
      icon: mdiShieldCheck,
      color: 'primary',
      description: 'Total',
      value: 0
    },
    {
      icon: mdiSkull,
      color: 'error',
      description: 'Deceased',
      value: 0
    },
    {
      icon: mdiVirus,
      color: 'warning',
      description: 'Confirmed',
      value: 0
    },
    {
      icon: mdiArmFlex,
      color: 'success',
      description: 'Recovered',
      value: 0
    }
  ]
}
</script>
