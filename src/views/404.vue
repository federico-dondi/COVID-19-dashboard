<template>
  <v-row no-gutters>
    <v-card flat>
      <v-card-title>Page not Found 😭</v-card-title>
      <v-card-subtitle>It looks like you came here by mistake?</v-card-subtitle>

      <v-card-actions class="mx-2">
        <v-btn :to="'/'" color="primary" outlined class="d-flex">Return to Homepage</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NotFound extends Vue {

}
</script>
