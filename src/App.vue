<template>
  <div>
    <router-link to="/">Top</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view></router-view>

    <!-- モーダルの実装 -->
    <ModalWrapper />
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import urls from './modules/url';

//コンポーネントの取り込み
import ModalWrapper from './components/organisms/ModalWrapper';

export default {
  data() {
    return {
      title: 'Welcome to Vue world',
      message:''
    }
  },
  beforeMount() {
    urls.getUrlParams();
  },
  computed: mapState(["mode"]),
  methods: mapMutations(["commitModeToDev","commitModeToPro"]),
  components: {
    ModalWrapper
  }
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
