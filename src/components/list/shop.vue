<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in list" :key='item.id' @click="go(item.id)">
      <h1 class="title">{{item.title}}</h1>
      <img :src="item.img_url" alt="">
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
    <van-button type="primary" @click="getMore">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    list:[],
    pageindex:1,
  }),
  methods:{
    getlist(){
      this.$http.get("http://localhost:5000/api/getgoods?pageindex=" + this.pageindex).then((res)=>{
        if (res.body.status === 0) {
            // this.goodslist = result.body.message;
            this.list = this.list.concat(res.body.message);
          }
      })
    },
    getMore() {
      this.pageindex++;
      this.getlist();
    },
    go(id){
      this.$router.push({ name: "shopinfo", params: { id } });
    }
  },
  created(){
    this.getlist();
    // this.getMore()
  }
};
</script>

<style lang='less'>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 46%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
  .van-button {
    width: 100%;
    padding-bottom: 80px;
  }
}
</style>