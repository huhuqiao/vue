<template>
<div>
  <router-link v-for="(item,index) in arr" :key="index" :to="'/Newslist/NewsInfo/' + item.id">
   <van-card  :desc="item.add_time|data" :title="item.title" :thumb="item.img_url">
   <div slot="footer">
    点击量 {{item.click}}
   </div>
  </van-card>
</router-link>
</div>
</template>
<script>
export default {
  data: () => ({
    arr:[]
  }),
  created(){
    this.getnews()
  },
  methods:{
    getnews:function(){
        this.$http.get("http://localhost:5000/api/getnewslist").then(res => {
        if(res.data.status==0){
          this.arr=res.data.message
        }
      });
    }
  }
};
</script>

<style  scoped>

</style>