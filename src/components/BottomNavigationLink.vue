<template>
  <v-btn :to="to" class="stretch">
    <span>{{ title }}</span>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class BottomNavigationLink extends Vue {
  @Prop({ type: String }) readonly icon!: string
  @Prop({ type: String }) readonly title!: string
  @Prop({ type: String }) readonly to!: string
}
</script>

<style scoped>
.stretch { height: 100%; }
</style>
