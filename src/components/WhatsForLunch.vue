<template>
  <div>
    <h1>Heres whats for lunch</h1>
      <ul id="recipeList">
        <li v-for="recipe in whatsForLunch">
          {{ recipe.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { whatsForLunch } from '../whats-for-lunch';

@Component
export default class WhatsForLunch extends Vue {
  /**
   * A list of recipes that are good to eat
   * @var Array
   */
  whatsForLunch : Array<any> = [];

  /**
   * Initialise the whatsForLunch array on component creation
   */
  async created() : Promise<void> {
    this.whatsForLunch = await whatsForLunch();
    return Promise.resolve();
  }
}
</script>