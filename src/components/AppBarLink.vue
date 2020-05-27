<template>
  <v-list-item :to="to">
    <v-list-item-title>{{ title }}</v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class AppBarSocial extends Vue {
  @Prop({ type: String }) readonly to!: string
  @Prop({ type: String }) readonly title!: string
}
</script>
