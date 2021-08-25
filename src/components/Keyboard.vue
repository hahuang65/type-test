<template>
  <div v-on:keyup="keyPressed" class="keyboard" tabindex="0">
    <!-- tabindex is set to make the div focus-able, which is required to respond to keypress events -->
    <it-alert type="primary" title="Click Here" body="Focus on me to type!"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Keyboard",
  methods: {
    keyPressed(event: KeyboardEvent) {
      console.log("Pressed " +  event.key);
      event.preventDefault();
    }
  }
});
</script>
