<template>
  <v-app>
    <navigation-drawer />

    <v-content>
      <v-container fluid>
        <!-- Views from Vue-Router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
    NavigationDrawer: () => import('@/components/NavigationDrawer.vue')
  }
})
export default class App extends Vue {

}
</script>
