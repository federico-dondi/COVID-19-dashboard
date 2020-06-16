<template>
  <v-row>
    <v-col>
      <v-card elevation="2">
        <v-card-title>
          Overview (World) by Country

          <v-spacer />

          <v-btn icon @click="show = !show">
            <v-icon>{{ (show)
              ? mdiClose
              : mdiFilterOutline
            }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-subtitle>
          The expansion of the pandemic is global and continuously increasing.
          Check this page often to stay updated on its evolution and remember to follow the recommended guidelines and recommendations.
        </v-card-subtitle>

        <v-expand-transition>
          <div v-show="show">
            <v-card-text>
              <v-text-field
                v-model="search"
                label="Search for Country"
                placeholder="Italy, Spain or ..."
                :append-icon="mdiMagnify"
              ></v-text-field>
            </v-card-text>
          </div>
        </v-expand-transition>

        <v-data-table
          height="336"
          :headers="headers"
          :items="items"
          :items-per-page="5"
          :sort-by="['TotalConfirmed']"
          :sort-desc="[true]"
          multi-sort
          :search="search"
          :custom-filter="searchByCountry"
          disable-pagination
          hide-default-footer
          fixed-header
        ></v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import {
  mdiClose,
  mdiFilterOutline,
  mdiMagnify
} from '@mdi/js'

@Component
export default class CountriesTable extends Vue {
  readonly mdiClose: string = mdiClose
  readonly mdiFilterOutline: string = mdiFilterOutline
  readonly mdiMagnify: string = mdiMagnify

  headers = [
    {
      text: 'Country',
      align: 'start',
      sortable: false,
      value: 'Country'
    },
    { text: 'Deceased', value: 'TotalDeaths' },
    { text: 'Confirmed', value: 'TotalConfirmed' },
    { text: 'Recovered', value: 'TotalRecovered' }
  ]

  show = false

  get items (): object { return this.$store.state.Countries }
  set items (value: object) { this.$store.commit('SET_COUNTRIES', value) }

  search = ''

  searchByCountry (value: any, search: string, item: any): boolean {
    const name = item.Country.toLowerCase()
    const query = search.toLowerCase()

    return name.indexOf(query) > -1
  }
}
</script>
