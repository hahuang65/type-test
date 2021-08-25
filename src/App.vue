<template>
  <h1>{{ state.appName }}</h1>
  <Keyboard />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Keyboard from "@/components/Keyboard.vue";

export default defineComponent({
  name: 'App',
  components: { Keyboard },
  setup() {
    const state = reactive({
      appName: "Type Test"
    })

    return { state }
  }
});
</script>

<style>
  /* Used by Equal */
  @import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined");
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap");
</style>
