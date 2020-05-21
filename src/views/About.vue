<template>
  <div>
    <h1 class="title">Who?</h1>
    <p>
      Hello, I'm <a href="https://federico-dondi.github.io">Federico Dondi</a>, from Bologna (Italy), Computer Science student at <a href="https://www.unibo.it/en">University of Bologna</a> (UniBo) and full-stack software developer.
      You can follow my activities (mainly about coding, software-engineering and videogames) on <a href="https://github.com/federico-dondi">GitHub</a> and <a href="https://stackoverflow.com/users/13278024/federico-dondi">StackOverflow</a>, or contact me at this <a href="mailto:federico.dondi2@studio.unibo.it">address</a>.
    </p>

    <h1 class="title">Why?</h1>
    <p>
      The idea behind this application is provide an all-in-one solution regarding Coronavirus (COVID-19), in a simple and intuitive way.
      During this lockdown period I'm full of free time, so...
    </p>

    <h1 class="title">How?</h1>
      The application uses <a href="https://vuejs.org">Vue</a> and <a href="https://vuetifyjs.com/en/">Vuetify</a> as core libraries for user-interface, MVC and everything client-side related.
      It's written in <a href="https://www.typescriptlang.org">TypeScript</a>, then compiled to plain JavaScript.
      All data're provided by the awesome <a href="https://covid19api.com">COVID-19 API</a>.
      Technical, scientific and health information (guidelines, also) come from <a href="https://www.wikipedia.org">Wikipedia</a> and <a href="https://www.who.int">World Health Organization</a>.
    <p>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class About extends Vue {

}
</script>
