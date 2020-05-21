<template>
  <v-col
    cols="12"
    md="3"
    lg="3"
  >
    <v-alert
      border="left"
      colored-border
      :color="color"
      :icon="icon"
      elevation="2"
      class="py-3 my-0"
    >
      <div class="overline">{{ description }}</div>
      <div class="title">{{ value }}</div>
    </v-alert>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class QuickNumbersItem extends Vue {
  @Prop({ type: String }) readonly icon!: string
  @Prop({ type: String }) readonly color!: string
  @Prop({ type: String }) readonly description!: string
  @Prop({ type: Number }) readonly value!: number
}
</script>

<style scoped>
.title { line-height: 100%; }
</style>
