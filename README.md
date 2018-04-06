# VuejsStarterKit

## 概要
FrontEndEnvのリポジトリ内容をベースにVue+Vuexが動くスターターキットになります。
ディレクトリ構成はAtomic Designを参考に作っています。

## 使用方法
git cloneしたらディレクトリ内で以下のコマンドを打つと使えます。
```
yarn install
yarn start
```

## 環境構築
### FrontEndEnvのクローン
FrontEndEnvを元にしてVue.jsの環境を作って行きます。
git cloneした直後は作業ディレクトリ名が「FrontEndEnv」になっていますので、任意で名前を変更して構いません。

```
git clone git@github.com:isihigameKoudai/VuejsStarterKit.git
cd FrontEndEnv
```

### パッケージの準備
vueとvuexを動かす為にパッケージを導入します。
```
yarn add vue vuex
```

### webpack.config.jsの編集
modulesのrulesに以下の内容を記述
```
{
  test: /\.vue$/,
  loader: 'vue-loader',
},
```
拡張子の名前解決するため、resolveのextensionsにvueを追加する
```
[".js", ".vue"]
```

### 各ファイルの準備
FrontEndEnv/src/index.jsとFrontEndEnv/src/App.vueを準備します。
もともとあるfoo.jsは使わないので削除して構いません。

App.vue
```
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
```
vueファイルの中はtemplate,script,styleの三部構成になておりtemplate内ではhtmlやcssがそのまま記述できます。
styleはlangを指定することでsass/scss,lessなどを使うことも出来ます。また、scopedを指定するとグローバル汚染しないcssを書くことも可能です。

index.js
```
import 'babel-polyfill';

import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';

Vue.use(Vuex);

new Vue({
  el:'#app',
  store,
  render: h => h(App)
});

```
vueコンポーネントの取り込みとvuexとの結合を行います。

store/index.jsの追加
vuexの中核となるstoreのファイルを記述します。
```
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  mode: ''
};

//Mutaions is synchronous only methods to change state values.
const mutations = {
  commitModeToDev(state,payload) {
    state.mode = 'devlopment';
  },
  commitModeToPro(state,payload) {
    state.mode = 'production'; 
  }
};

//Actions is methods includes asynchronous processes.
//and commit mutations.
const actions = {
  getSomething({commit},payload) {
    const num1 = 1;
    const num = 2;
  },
  updateModeDev({commit},payload) {
    commit('commitModeToDev',payload);
  },
  updateModePro({commit},payload) {
    commit('commitModeToPro',payload);
  }
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});
```

### 起動
次のコマンドでブラウザ上でhttp://localhost:8080/ にアクセスしてみて、「Welcome to Vue world」などが出ればOK。
```
yarn start
```