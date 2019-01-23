<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time}}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <img
        class="preview-img"
        v-for="(item) in list"
        :src="item.src"
        height="100"
        @click="open(item.id-1)"
        :key="item.src"
      >
    </div>

    <!-- 图片内容区域 -->
    <div
      class="content"
      v-html="photoinfo.content"
    ></div>

    <!-- 放置一个现成的 评论子组件 -->
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  data: () => ({
    id: "",
    photoinfo: {},
    list: []
  }),
  created() {
    this.id = this.$route.params.id;
    this.getphotos();
    this.get();
  },
  methods: {
    getphotos() {
      this.$http
        .get("http://localhost:5000/api/getimageInfo/" + this.id)
        .then(res => {
          if (res.body.status === 0) {
            this.photoinfo = res.body.message;
          }
        });
    },
    get() {
      this.$http
        .get("http://localhost:5000/api/getthumimages/" + this.id)
        .then(res => {
          if (res.body.status === 0) {
            this.list = res.body.message;
          }
        });
    },
    open(startPosition) {
      let img = []
      this.list.forEach((item)=>{
        if(item.src !== null){
          img.push(item.src)
        }
      })
      ImagePreview(
        img,
        startPosition
     );
    }
  },
  components: {}
};
</script>

<style  scoped>
</style>