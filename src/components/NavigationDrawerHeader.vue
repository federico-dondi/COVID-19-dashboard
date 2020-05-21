<template>
  <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon large color="primary">mdi-virus</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
        <v-list-item-title>COVID-19 Dashboard</v-list-item-title>
        <v-list-item-subtitle>Contagions, statistics and more.</v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
    </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NavigationDrawerHeader extends Vue { }
</script>
