<template>
  <transition>
    <div 
      class="loading"
      v-if="isLoading"
    >
    <h1>LOADING</h1>
    </div>
  </transition>
</template>
<script>
import { mapState,mapActions } from 'vuex';

export default {
  computed: mapState(["modal","isLoading"]),
  methods: mapActions(["closeModal"])
}
</script>
<style lang="scss" scoped>
.loading {
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
}
</style>
