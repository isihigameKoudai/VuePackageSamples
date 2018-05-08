<template>
  <div>
    <div 
      class="modalWrap"
      v-if="modal.isShow"
      @click="closeModal()"
    ></div>
    <div 
      class="modalContent"
      v-if="modal.content"
    >
      <p>{{modal.content}}</p>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';

export default {
  computed: mapState(["modal"]),
  methods: mapActions(["closeModal"])
}
</script>
<style lang="scss" scoped>
.modalWrap {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 900;
  transition: opacity 0.2s cubic-bezier(0.25, 0.25, 0.75, 0.75), visibility 0.2s;
  background: rgba(0, 0, 0, 0.6);
}

.modalContent {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 480px;
  height: 300px;
  border-radius: 5px;
  z-index: 910;;
  transform: translate(-50%,-50%);
  background: #fafafa;
  @media screen and (max-width:480px){
    width: calc(100% - 100px);
    height: calc(100% - 100px);
  }
}
</style>
