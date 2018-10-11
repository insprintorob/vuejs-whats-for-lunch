<template>
  <div>
    <h1>Heres whats for lunch</h1>
    <ul id="recipeList">
      <li v-for="recipe in whatsForLunch">
        {{ recipe.title }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import whatsForLunch from '../whats-for-lunch';

@Component
export default class WhatsForLunch extends Vue {
  whatsForLunch : Array<any> = [];

  async created() {
    this.whatsForLunch = await whatsForLunch();
  }
}
</script>