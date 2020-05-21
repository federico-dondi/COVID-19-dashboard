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
  get payload (): object { return this.$store.state.data }
  set payload (value: object) { this.$store.commit('SET_DATA', value) }

  @Watch('payload', { immediate: true })
  onPayloadChanged (newValue: any, oldValue: any): void {
    if (newValue === undefined) return

    this.numbers[1].value = newValue.Global.TotalDeaths
    this.numbers[2].value = newValue.Global.TotalRecovered
    this.numbers[3].value = newValue.Global.TotalConfirmed

    this.numbers[0].value =
      this.numbers[1].value +
      this.numbers[2].value +
      this.numbers[3].value
  }

  numbers: QuickNumbersEntry[] = [
    {
      icon: 'mdi-shield-check',
      color: 'primary',
      description: 'Total',
      value: 0
    },
    {
      icon: 'mdi-skull',
      color: 'error',
      description: 'Deceased',
      value: 0
    },
    {
      icon: 'mdi-virus',
      color: 'warning',
      description: 'Confirmed',
      value: 0
    },
    {
      icon: 'mdi-arm-flex',
      color: 'success',
      description: 'Recovered',
      value: 0
    }
  ]
}
</script>
