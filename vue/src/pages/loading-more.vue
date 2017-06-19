<template>
  <div  ref="wrapper" :style="{ height: wrapperHeight + 'px' }" class="text-center">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
      <div class="card-box" v-for="(item, index) in ecardList" >
       {{item.id}}
      </div>
    </div>
    <p v-show="loading || loadingText == '已加载全部'" class="page-infinite-loading" style="height: 1rem;color: #808080;">
      {{loadingText}}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.card-box{
  height: 2rem;
  line-height: 2rem;
}
</style>
<script>
import Vue from 'vue'
import { InfiniteScroll  } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
  data () {
    return {
      ecardList: [],
      loading: false,
      loadingText: '加载中'
    }
  },
  mounted() {
    setTimeout(() => {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },50)
  },
  methods: {
    loadMore() {
      let that = this
      that.loading = true;
      setTimeout(() => {
        let curLength = this.ecardList.length
        //显示50条数据
        if(curLength>=50){
          this.loadingText = '没有更多啦'
          return false
        }
        for(let i=curLength;i<curLength+10;i++){
          this.ecardList.push({id: i})
        }
        this.loading = false
        console.log("插入结束")
      }, 1500);
    }
  },
  created: function(){
    for(let i=0;i<10;i++){
      this.ecardList.push({id: i})
    }
  }
}
</script>