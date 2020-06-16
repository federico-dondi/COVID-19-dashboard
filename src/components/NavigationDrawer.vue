<template>
  <v-navigation-drawer
    app
    mobile-break-point="960"
    :mini-variant.sync="mini"
    :mini-variant-width="56"
  >
    <navigation-drawer-header @close="mini = true" />

    <v-divider/>

    <v-list dense shaped class="pr-0">
      <v-subheader inset>FEATURES</v-subheader>

      <v-list-item-group color="primary">
        <navigation-drawer-link
          v-for="item in features" :key="item.to"
          :to="item.to"
          :icon="item.icon"
          :title="item.title"
        />
      </v-list-item-group>

      <v-subheader inset>SUPPORT</v-subheader>

      <v-list-item-group color="primary">
        <navigation-drawer-link
          v-for="item in supports" :key="item.to"
          :to="item.to"
          :icon="item.icon"
          :title="item.title"
        />
      </v-list-item-group>

      <navigation-drawer-social
        color="grey darken-3"
        title="GitHub"
        href="https://github.com/federico-dondi"
        hreflang="en"
        :icon="mdiGithub"
        v-show="!mini"
      />

      <navigation-drawer-social
        color="orange darken-3"
        title="StackOverflow"
        href="https://stackoverflow.com/users/13278024/federico-dondi"
        hreflang="en"
        :icon="mdiStackOverflow"
        v-show="!mini"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import {
  mdiChartTimelineVariant,
  mdiBookOutline,
  mdiBookSearchOutline,
  mdiInformationOutline,
  mdiCogOutline,
  mdiMessageTextOutline,
  mdiHelpCircleOutline,
  mdiGithub,
  mdiStackOverflow
} from '@mdi/js'

interface NavigationItem {
  icon: string;
  title: string;
  to: string;
}

@Component({
  components: {
    NavigationDrawerHeader: () => import('@/components/NavigationDrawerHeader.vue'),
    NavigationDrawerLink: () => import('@/components/NavigationDrawerLink.vue'),
    NavigationDrawerSocial: () => import('@/components/NavigationDrawerSocial.vue')
  }
})
export default class NavigationDrawer extends Vue {
  readonly mdiGithub: string = mdiGithub
  readonly mdiStackOverflow: string = mdiStackOverflow

  features: NavigationItem[] = [
    {
      icon: mdiChartTimelineVariant,
      title: 'Dashboard',
      to: '/'
    },
    {
      icon: mdiBookOutline,
      title: 'Wiki',
      to: '/wiki'
    },
    {
      icon: mdiBookSearchOutline,
      title: 'Guidelines',
      to: '/guidelines'
    },
    {
      icon: mdiInformationOutline,
      title: 'About',
      to: '/about'
    }
  ]

  supports: NavigationItem[] = [
    {
      icon: mdiCogOutline,
      title: 'Settings',
      to: '/settings'
    },
    {
      icon: mdiMessageTextOutline,
      title: 'Send us a Feedback',
      to: '/feedback'
    },
    {
      icon: mdiHelpCircleOutline,
      title: 'Help',
      to: '/help'
    }
  ]

  mini = false
}
</script>

<style scoped>
.v-subheader { margin-left: 64px; }
</style>
