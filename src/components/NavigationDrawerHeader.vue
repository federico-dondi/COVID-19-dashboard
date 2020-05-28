<template>
  <v-list>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon size="28" color="primary">{{ mdiVirus }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>COVID-19 Dashboard</v-list-item-title>
        <v-list-item-subtitle>Contagions, statistics and more.</v-list-item-subtitle>
      </v-list-item-content>

      <v-btn icon @click.stop="$emit('close')">
        <v-icon>{{ mdiChevronLeft }}</v-icon>
      </v-btn>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import {
  mdiVirus,
  mdiChevronLeft
} from '@mdi/js'

@Component
export default class NavigationDrawerHeader extends Vue {
  readonly mdiVirus: string = mdiVirus
  readonly mdiChevronLeft: string = mdiChevronLeft
}
</script>
