<template>
  <div>
    <p>Top [API TEST]</p>
    <button 
      @click="tapButton()"
    >GET USERS</button>
    <button
      @click="tapGetFollow()"
    > GET FOLLOWER</button>
    <ul>
      <li
        v-if="recieveData"
        v-for="(datum, index) in recieveData"
        :key="index"
      >{{datum}}</li>
    </ul>
  </div>
</template>
<script>
import api from './modules/api';

export default {
  data() {
    return {
      recieveData:{}
    }
  },
  methods: {
    tapButton() {
      api.
        get('/api/v2/users').
        then(response => {
          this.recieveData = response.data;
        }).catch(() => {
          console.log("failed");
        });
    },
    tapGetFollow() {
      api.
        get('/api/v2/users/isihigameKoudai/followers').
        then(response => {
          this.recieveData = response.data;
        }).catch(() => {
          console.log("failed");
        });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
