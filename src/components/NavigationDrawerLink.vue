<template>
  <v-list-item class="mr-2" :to="to">
    <v-list-item-icon>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class NavigationDrawerLink extends Vue {
  @Prop({ type: String }) readonly icon!: string
  @Prop({ type: String }) readonly title!: string
  @Prop({ type: String }) readonly to!: string
}
</script>
