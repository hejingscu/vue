<template>
  <div class="page">
    <div class="sidebar">
     {{appList.infos}} <br>
     {{appList2.infos}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { appList,serviceList } from '../service/getData'
export default {
  data () {
    return {
     appList: {},
     serviceList: {},
     appList2: {}
    }
  },
  methods:{
    async getList(){
      let that = this
      //使用场景，从多个接口都拿到参数后做一些事情
      that.appList = await appList({pageIndex: 1, pageSize: 10})
      // that.serviceList = await serviceList()
      //do sometings after get data
      //such as that.appList.splice(n,1)
    },
    getInfo(){
      let that = this
      //使用场景，仅仅从一个接口拿东西，之后做一些事情
      appList({pageIndex: 1, pageSize: 10}).then( res => {
        that.appList2 = res
      })
    }
  },
  created: function(){
    this.getInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
