<template>
<div class="container">
  <div @keypress="showKeyCode($event)" class="test" contenteditable="true"></div>
  <div class="view" v-text="currentKeycode"></div>
</div>
</template>

<script>
import Vue from 'vue'
export const EventBus = new Vue()

export default {
  name: 'Test',
  data() {
    return {
      msg: null,
    }
  },
  computed: {
    currentKeycode: function() {
      return this.msg
    },
  },
  methods: {
    showKeyCode: function(e) {
      this.msg = e.keyCode
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  width: 100%;
}
.test,
.view {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 50px;
  border: 1px solid slateblue;
}
</style>
