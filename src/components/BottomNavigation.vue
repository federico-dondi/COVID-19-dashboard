<template>
  <v-bottom-navigation app grow color="primary" v-if="$vuetify.breakpoint.smAndDown">
    <bottom-navigation-link
      v-for="item in features" :key="item.to"
      :to="item.to"
      :icon="item.icon"
      :iconOutline="item.iconOutline"
      :title="item.title"
    />
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import {
  mdiHome,
  mdiBook,
  mdiBookSearch,
  mdiInformation,
  mdiHomeOutline,
  mdiBookOutline,
  mdiBookSearchOutline,
  mdiInformationOutline
} from '@mdi/js'

interface NavigationItem {
  icon: string;
  iconOutline: string;
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
      icon: mdiHome,
      iconOutline: mdiHomeOutline,
      title: 'Home',
      to: '/'
    },
    {
      icon: mdiBook,
      iconOutline: mdiBookOutline,
      title: 'Wiki',
      to: '/wiki'
    },
    {
      icon: mdiBookSearch,
      iconOutline: mdiBookSearchOutline,
      title: 'Guidelines',
      to: '/guidelines'
    },
    {
      icon: mdiInformation,
      iconOutline: mdiInformationOutline,
      title: 'About',
      to: '/about'
    }
  ]
}
</script>

<style scoped>
.v-bottom-navigation {
  box-shadow: none;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: rgba(0, 0, 0, 0.12) !important;
}
</style>
