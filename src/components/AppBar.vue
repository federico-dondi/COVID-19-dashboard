<template>
  <v-app-bar app v-if="$vuetify.breakpoint.smAndDown">
    <v-list-item class="pa-0">
      <v-list-item-icon class="ma-3 ml-0 align-self-center">
        <v-icon color="primary">{{ mdiVirus }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>COVID-19</v-list-item-title>
        <v-list-item-subtitle>Coronavirus Dashboard</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-spacer />

    <v-menu bottom right>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>{{ mdiDotsVertical }}</v-icon>
        </v-btn>
      </template>

      <v-list>
        <app-bar-link v-for="(item, i) in items" :key="i"
          :to="item.to"
          :title="item.title"
        />

        <v-divider />

        <app-bar-social
          title="Follow on GitHub"
          href="https://github.com/federico-dondi"
          hreflang="en"
        />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import {
  mdiVirus,
  mdiDotsVertical
} from '@mdi/js'

interface MenuItem {
  title: string;
  to: string;
}

@Component({
  components: {
    AppBarLink: () => import('@/components/AppBarLink.vue'),
    AppBarSocial: () => import('@/components/AppBarSocial.vue')
  }
})
export default class AppBar extends Vue {
  readonly mdiVirus: string = mdiVirus
  readonly mdiDotsVertical: string = mdiDotsVertical

  items: MenuItem[]= [
    {
      title: 'Settings',
      to: '/settings'
    },
    {
      title: 'Send us a Feedback',
      to: '/feedback'
    },
    {
      title: 'Help',
      to: '/help'
    }
  ]
}
</script>

<style scoped>
.v-app-bar {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.12) !important;
}
.v-toolbar, .v-sheet { box-shadow: none; }
</style>
