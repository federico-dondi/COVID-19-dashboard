<template>
  <v-list-item>
    <v-btn outlined small :color="color"
    :href="href"
    :hreflang="href"
    target="_blank">
    <v-icon left>{{ icon }}</v-icon> {{ title }}
  </v-btn>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class NavigationDrawerSocial extends Vue {
  @Prop({ type: String }) readonly icon!: string
  @Prop({ type: String }) readonly title!: string
  @Prop({ type: String }) readonly href!: string
  @Prop({ type: String }) readonly hreflang!: string
  @Prop({ type: String }) readonly color!: string
}
</script>
