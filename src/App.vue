<template>
  <v-app>
    <navigation-drawer />

    <v-content>
      <v-container fluid>
        <!-- Views from Vue-Router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <bottom-navigation />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    NavigationDrawer: () => import('@/components/NavigationDrawer.vue'),
    BottomNavigation: () => import('@/components/BottomNavigation.vue')
  }
})
export default class App extends Vue {

}
</script>
