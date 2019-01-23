<template>
  <div class="box">

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <div class="swipe">
      <van-swipe
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item v-for='item in arr' :key='item.id'>
          <img :src="item.src" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品购买区域 -->
    <div class="two">
      <p></p>
      <van-stepper v-model="value" />
      <input type="button" value="加入购物车" @click="dong">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    id:'',
    arr:[],
    value:1,
    ballFlag:false,
    value: 1,
    info:{}
  }),
  methods:{
    getimg(){
      this.$http.get('http://localhost:5000/api/getthumimages/' + this.id).then((res)=>{
        // console.log(res.body);
       if (res.body.status === 0) {
          this.arr = res.body.message;
        }
    })
  },
  dong(){
    this.ballFlag = !this.ballFlag;

    const info = {
      id:this.id,
      count:this.value,
      price:998,
      selected:true,
      timer:null
    }
    
    this.$store.commit("add", info);
  },
  // 半场函数是要放在methods里面的
   beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // console.log(ballPosition);
      const badgePosition = document
        .querySelector(".van-info")
        .getBoundingClientRect()
      // console.log(badgePosition);
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
   },
  created(){
    this.id = this.$route.params.id + 100
    this.getimg()
  },
};
</script>

<style lang='less'>
.ball {
  width: 16px;
  height: 16px;
  background-color: rgb(226, 59, 59);
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  left: 52px;
  top: 372px;
  opacity: 1;
}
</style>