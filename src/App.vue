<template>
  <v-app>
    <app-bar />

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
    AppBar: () => import('@/components/AppBar.vue'),
    NavigationDrawer: () => import('@/components/NavigationDrawer.vue'),
    BottomNavigation: () => import('@/components/BottomNavigation.vue')
  }
})
export default class App extends Vue {
  get Global (): object { return this.$store.state.Global }
  set Global (value: object) { this.$store.commit('SET_GLOBAL', value) }

  get Countries (): object { return this.$store.state.Countries }
  set Countries (value: object) { this.$store.commit('SET_COUNTRIES', value) }

  async created (): Promise<any> {
    await fetch('https://api.covid19api.com/summary')
      .then((res) => res.json())
      .then((res) => {
        this.Global = res.Global
        this.Countries = res.Countries
      })
  }
}
</script>
