<template>
  <div>
    <WhatsForLunch></WhatsForLunch>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WhatsForLunch from '@/components/WhatsForLunch.vue'; // @ is an alias to /src

@Component({
  components: {
    WhatsForLunch,
  },
})
export default class Home extends Vue {}
</script>