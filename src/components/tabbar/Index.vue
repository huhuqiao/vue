<template>
  <div>
    <swiper :arr='arr'></swiper>
    <gird></gird>
  </div>
</template>

<script>

import Gird from './sub/gird'
import swiper from './sub/swiper'

export default {
  data: () => ({
    arr: [],
  }),
  created() {
    this.getswipe();
  },
  methods: {
    getswipe() {
      this.$http.get("http://localhost:5000/api/getlunbo").then(res => {
        this.arr = res.data.message;
      });
    }
  },
  components:{
    Gird,
    swiper
  }
};
</script>

<style lang='less'>
.van-swipe {
  .van-swipe-item {
    height: 300px !important;
    img {
      height: 300px;
      width: 100%;
    }
  }
}
.van-col {
  text-align: center;
  margin-top: 20px;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>