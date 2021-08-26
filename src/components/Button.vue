<template>
  <div class="button" :class="['size-' + size + 'u', pressed ? 'pressed' : '']">
    {{ name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String
    },
    pressed: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style scoped>
.button {
  --var-button-size: 50px;
  height: var(--var-button-size);
  line-height: var(--var-button-size);
  display: inline-block;
  margin: 1px;
  border: solid 1px;
  border-radius: 2px;
}

.button.pressed {
  background: aquamarine;
}

.size-1u {
  min-width: var(--var-button-size);
  width: var(--var-button-size);
  max-width: var(--var-button-size);
}

.size-1-25u {
  min-width: calc(1.25 * var(--var-button-size));
  width: calc(1.25 * var(--var-button-size));
  max-width: calc(1.25 * var(--var-button-size));
}

.size-1-5u {
  min-width: calc(1.5 * var(--var-button-size));
  width: calc(1.5 * var(--var-button-size));
  max-width: calc(1.5 * var(--var-button-size));
}

.size-1-75u {
  min-width: calc(1.75 * var(--var-button-size));
  width: calc(1.75 * var(--var-button-size));
  max-width: calc(1.75 * var(--var-button-size));
}

.size-2u {
  min-width: calc(2 * var(--var-button-size));
  width: calc(2 * var(--var-button-size));
  max-width: calc(2 * var(--var-button-size));
}

.size-2-25u {
  min-width: calc(2.25 * var(--var-button-size));
  width: calc(2.25 * var(--var-button-size));
  max-width: calc(2.25 * var(--var-button-size));
}

.size-2-75u {
  min-width: calc(2.75 * var(--var-button-size));
  width: calc(2.75 * var(--var-button-size));
  max-width: calc(2.75 * var(--var-button-size));
}

.size-6-25u {
  min-width: calc(6.25 * var(--var-button-size));
  width: calc(6.25 * var(--var-button-size));
  max-width: calc(6.25 * var(--var-button-size));
}
</style>
