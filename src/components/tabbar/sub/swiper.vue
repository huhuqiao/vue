<template>
  <div>
    <van-swipe
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for='item in arr'
        :key='item.img'
      >
        <img
          :src="item.img"
          alt=""
        >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  props:["arr"]
};
</script>

<style  scoped>

</style>