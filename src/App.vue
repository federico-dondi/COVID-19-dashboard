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
  get payload (): object { return this.$store.state.data }
  set payload (value: object) { this.$store.commit('SET_DATA', value) }

  async created (): Promise<any> {
    await fetch('https://api.covid19api.com/summary')
      .then((res) => res.json())
      .then((res) => {
        this.payload = res
      })
      .catch((e) => { console.warn('COVID-19 API responded with an error.') })
  }
}
</script>
