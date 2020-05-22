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
          v-for="item in items" :key="item.to"
          :to="item.to"
          :icon="item.icon"
          :title="item.title"
        />
      </v-list-item-group>

      <navigation-drawer-social
        color="grey darken-3"
        href="https://github.com/federico-dondi"
        hreflang="en"
        icon="mdi-github"
        title="GitHub"
        v-show="!mini"
      />

      <navigation-drawer-social
        color="orange darken-3"
        href="https://stackoverflow.com/users/13278024/federico-dondi"
        hreflang="en"
        icon="mdi-stack-overflow"
        title="StackOverflow"
        v-show="!mini"
      />
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
    NavigationDrawerLink: () => import('@/components/NavigationDrawerLink.vue'),
    NavigationDrawerSocial: () => import('@/components/NavigationDrawerSocial.vue')
  }
})
export default class NavigationDrawer extends Vue {
  items: NavigationItem[] = [
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

  mini = false
}
</script>

<style scoped>
.v-subheader { margin-left: 64px; }
</style>
