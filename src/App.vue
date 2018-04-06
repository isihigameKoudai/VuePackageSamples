<template>
  <div class="g-content">
    <h1>{{title}}</h1>
    <input 
      type="text" 
      v-model="message" 
    />
    <p>input message=> {{message}}</p>
    <input 
      type="button"
      value="DEVELOP"
      @click="commitModeToDev"
    />
    <input 
      type="button"
      value="PRODUCT"
      @click="commitModeToPro"
    />
    <p>mode=>{{mode}}</p>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  data() {
    return {
      title: 'Welcome to Vue world',
      message:''
    }
  },
  computed: mapState(["mode"]),
  methods: mapMutations(["commitModeToDev","commitModeToPro"])
}
</script>
<style lang="scss" scoped>
.g-content {
  background-color: #eee;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
