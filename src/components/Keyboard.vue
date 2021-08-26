<template>
  <div v-on:keyup="keyPressed" class="keyboard" tabindex="0">
    <!-- tabindex is set to make the div focus-able, which is required to respond to keypress events -->
    <Button v-for="k in keyboard.keys" :key="k.code" :name="k.name" :size="k.size" :pressed="k.pressed"/>
  </div>
  <it-button @click="resetKeys" type="danger">Reset</it-button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Button from "@/components/Button.vue";
import Key from "@/types/Key";

export default defineComponent({
  name: "Keyboard",
  components: { Button },
  setup() {
    const keyboard = reactive({
      keys: [
        new Key("Escape"),
        new Key("F1"),
        new Key("F2"),
        new Key("F3"),
        new Key("F4"),
        new Key("F5"),
        new Key("F6"),
        new Key("F7"),
        new Key("F8"),
        new Key("F9"),
        new Key("F10"),
        new Key("F11"),
        new Key("F12"),
        new Key("`"),
        new Key("1"),
        new Key("2"),
        new Key("3"),
        new Key("4"),
        new Key("5"),
        new Key("6"),
        new Key("7"),
        new Key("8"),
        new Key("9"),
        new Key("0"),
        new Key("-"),
        new Key("="),
        new Key("Backspace", { name: "⌫" }),
        new Key("Tab", { size: "1-5" }),
        new Key("q"),
        new Key("w"),
        new Key("e"),
        new Key("r"),
        new Key("t"),
        new Key("y"),
        new Key("u"),
        new Key("i"),
        new Key("o"),
        new Key("p"),
        new Key("["),
        new Key("]"),
        new Key("\\"),
        new Key("CapsLock", { size: "1-75" }),
        new Key("a"),
        new Key("s"),
        new Key("d"),
        new Key("f"),
        new Key("g"),
        new Key("h"),
        new Key("j"),
        new Key("k"),
        new Key("l"),
        new Key(";"),
        new Key("'"),
        new Key("Enter", { size: "2-25", name: "⏎" }),
        new Key("Shift", { size: "2-25", name: "⇧", position: Key.Position.Left }),
        new Key("z"),
        new Key("x"),
        new Key("c"),
        new Key("v"),
        new Key("b"),
        new Key("n"),
        new Key("m"),
        new Key(","),
        new Key("."),
        new Key("/"),
        new Key("Shift", { size: "2-75", name: "⇧", position: Key.Position.Right }),
        new Key("Control", { size: "1-25", name: "^", position: Key.Position.Left }),
        new Key("Meta", { size: "1-25", name: "⌘", position: Key.Position.Left }),
        new Key("Alt", { size: "1-25", name: "⌥", position: Key.Position.Left }),
        new Key(" ", { size: "6-25", name: "Space" }),
        new Key("Alt", { size: "1-25", name: "⌥", position: Key.Position.Right }),
        new Key("Meta",{ size: "1-25",  name: "⌘", position: Key.Position.Right }),
        new Key("Control",{ size: "1-25",  name: "^", position: Key.Position.Right }),
        new Key("ArrowLeft", { name: "🡐" }),
        new Key("ArrowDown", { name: "🡓" }),
        new Key("ArrowUp", { name: "⇧" }),
        new Key("ArrowRight", { name: "⇨" })
      ]
    })

    return { keyboard }
  },
  methods: {
    keyPressed(event: KeyboardEvent) {
      let keyIndex = this.keyboard.keys.findIndex(k => k.code === event.key && k.position === event.location)
      if (this.keyboard.keys[keyIndex]) {
        this.keyboard.keys[keyIndex].pressed = true;
      }
      event.preventDefault();
    },
    resetKeys() {
      for (let entry of this.keyboard.keys) {
        entry.pressed = false
      }
    }
  }
});
</script>

<style scoped>
.keyboard {
  width: 66%;
  height: 66vh;
  margin: auto;
  text-align: center;
}
</style>
