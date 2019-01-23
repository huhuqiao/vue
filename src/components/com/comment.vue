<template>
  <div class="comment">
    <h3>评论列表</h3>
    <hr>
    <textarea placeholder="请输入您的评论" style="width:95%" v-model="msg"></textarea>

    <van-button type="primary" @click='post'>发表评论</van-button>

     <div class="cmt-list" v-for="(item,index) in arr" :key="index">
      <div class="cmt-item">
        <div class="cmt-title">
          第{{index + 1}}楼&nbsp;&nbsp;用户：&nbsp;&nbsp;发表时间：{{item.add_time | data}}
        </div>
        <div class="cmt-body">
         {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>
    </div>

    <van-button type="primary" @click="getmore">加载更多</van-button>

  </div>
</template>
<!-- 这是公共评论子组件 -->
<script>
export default {
  data: () => ({
    pageindex:1,
    arr:[],
    msg:""
  }),
  props: ["id"],
  created(){
    this.get()
  },
  // 获取评论
  methods:{
    get(){
      this.$http.get("http://localhost:5000/api/getcomments/" + this.id + "?pageindex=" + this.pageindex).then((res)=>{
        if (res.body.status === 0) {
            // this.comments = result.body.message;
            // ? 数组是如何拼接 使用concat
            this.arr = this.arr.concat(res.body.message);
          }
      })
    },
    getmore(){
      this.pageindex++;
      this.get();
    },
    post(){
      // 参数1： 请求的URL地址
      // 参数2： 提交给服务器的数据对象 { content: this.msg }
      // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true } 全局定义
      this.$http
        .post("http://localhost:5000/api/postcomment/" + this.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            // 1. 拼接出一个评论对象
            var cmt = {
              user_name: "匿名用户",
              content: this.msg.trim()
            };
            // 添加到数组的开头   
            this.arr.unshift(cmt);
            // 清空  
            this.msg = "";
          }
        });
    }
  }
};
</script>

<style lang='less'>
.comment {
  padding-bottom: 80px;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>