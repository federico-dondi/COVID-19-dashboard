<template>
  <v-navigation-drawer app>
    <navigation-drawer-header />

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

        <v-subheader inset>SUPPORT</v-subheader>

        <navigation-drawer-link
          v-for="item in supports" :key="item.to"
          :to="item.to"
          :icon="item.icon"
          :title="item.title"
        />
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

interface NavigationItem {
  icon: string;
  title: string;
  to: string;
}

@Component({
  components: {
    NavigationDrawerHeader: () => import('@/components/NavigationDrawerHeader.vue'),
    NavigationDrawerLink: () => import('@/components/NavigationDrawerLink.vue')
  }
})
export default class NavigationDrawer extends Vue {
  features: NavigationItem[] = [
    {
      icon: 'mdi-chart-timeline-variant',
      title: 'Dashboard',
      to: '/'
    },
    {
      icon: 'mdi-book-outline',
      title: 'Wiki',
      to: '/wiki'
    },
    {
      icon: 'mdi-book-search-outline',
      title: 'Guidelines',
      to: '/guidelines'
    },
    {
      icon: 'mdi-account-outline',
      title: 'About',
      to: '/about'
    }
  ]

  supports: NavigationItem[] = [
    {
      icon: 'mdi-cog-outline',
      title: 'Settings',
      to: '/settings'
    }, {
      icon: 'mdi-message-alert-outline',
      title: 'Send us a Feedback',
      to: '/feedback'
    }, {
      icon: 'mdi-help-circle-outline',
      title: 'Help',
      to: '/help'
    }
  ]
}
</script>

<style scoped>
.v-subheader { margin-left: 64px; }
</style>
