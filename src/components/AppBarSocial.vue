<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on"
        target="_blank"
        :href="href"
        :hreflang="hreflang">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>

    <span>{{ caption }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class AppBarSocial extends Vue {
  @Prop({ type: String }) readonly icon!: string
  @Prop({ type: String }) readonly caption!: string
  @Prop({ type: String }) readonly href!: string
  @Prop({ type: String }) readonly hreflang!: string
}
</script>
