<template>
  <v-app-bar app v-if="$vuetify.breakpoint.smAndDown">
    <v-list-item class="pa-0">
      <v-list-item-icon class="ma-3 ml-0 align-self-center">
        <v-icon color="primary">mdi-virus</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>COVID-19</v-list-item-title>
        <v-list-item-subtitle>Coronavirus Dashboard</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-spacer />

    <app-bar-social
      icon="mdi-github"
      caption="Follow on GitHub"
      href="https://github.com/federico-dondi"
      hreflang="en"
    />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    AppBarSocial: () => import('@/components/AppBarSocial.vue')
  }
})
export default class AppBar extends Vue { }
</script>

<style scoped>
.v-app-bar {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.12) !important;
}
.v-toolbar, .v-sheet { box-shadow: none; }
</style>
