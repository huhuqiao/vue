<template>
  <div>
    <!-- 顶部滑动导航 -->
    <van-tabs @click='getimg'>
      <van-tab
        v-for="(item) in arr"
        :title="item.title"
        :key='item.id'
      >
      </van-tab>
    </van-tabs>
    <router-link v-for="item in img" :key='item.id' :to='"/Img/Imginfo/"+item.id'>
      <img v-lazy="item.img_url">
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    arr:[],
    img:[]
  }),
  created(){
    this.getlist()
    this.getimg(0)
  },
  methods:{
    getlist(){
      this.$http.get('http://localhost:5000/api/getimgcategory').then((res)=>{
         if (res.body.status === 0) {
          // 手动拼接出一个最完整的 分类列表 根据接口文档显示 是没有默认的全部接口的
          res.body.message.unshift({ title: "全部", id: 0 });
          this.arr = res.body.message;
        }
      })
    },
    getimg(cateId){
        this.$http.get("http://localhost:5000/api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.img = result.body.message;
        }
      })
    }
  }
};
</script>

<style lang='less'>

</style>