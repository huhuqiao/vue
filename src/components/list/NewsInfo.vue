<template>
  <div class="newsinfo">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | data }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content">
    </div>

    <!-- 通过v-bind 把id传给子组件  这个是父组件评论那块是子组件 父组件像子组件传值--> 
    <comment :id='this.id'></comment>

  </div>
</template>

<script>
import comment from '../com/comment'
export default {
  data: () => ({
    id: "",
    newsinfo: {}
  }),
  created(){
    this.id = this.$route.params.id;
    this.getInfo()
  },
  methods:{
   getInfo(){
      this.$http.get("http://localhost:5000/api/getnew/" + this.id).then((res)=>{
         if (res.body.status === 0) {
          this.newsinfo = res.body.message;
        } 
      })
   }
  },
  components:{
    comment
  }
    
}
</script>

<style>

</style>