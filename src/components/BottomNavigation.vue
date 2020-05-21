<template>
  <v-bottom-navigation app grow color="primary" v-if="$vuetify.breakpoint.smAndDown">
    <bottom-navigation-link
      v-for="item in features" :key="item.to"
      :to="item.to"
      :icon="item.icon"
      :title="item.title"
    />
  </v-bottom-navigation>
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
    BottomNavigationLink: () => import('@/components/BottomNavigationLink.vue')
  }
})
export default class BottomNavigation extends Vue {
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
}
</script>
