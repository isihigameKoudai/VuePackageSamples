<template>
  <div>
    <p>About page1</p>
    <button @click="openModal('Modal')">Modal</button>
    <a href="/ddd">topに戻る</a>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions(['openModal']),
}
</script>
<style lang="scss" scoped>

</style>
