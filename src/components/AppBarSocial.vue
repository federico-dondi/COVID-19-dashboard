<template>
  <v-list-item
    target="_blank"
    :href="href"
    :hreflang="hreflang">
    <v-list-item-title>{{ title }}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class AppBarSocial extends Vue {
  @Prop({ type: String }) readonly title!: string
  @Prop({ type: String }) readonly href!: string
  @Prop({ type: String }) readonly hreflang!: string
}
</script>
