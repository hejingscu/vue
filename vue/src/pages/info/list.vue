<template>
  <div class="page">
    列表页 
    <a class="btn-link" href="#/info/add">新增页</a>
    <a class="btn-link" href="#/info/edit">编辑页</a>
    <a class="btn-link" href="#/info/detail">详情页</a>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
     res: '默认值'
    }
  },
  methods:{

  },
  created: function(){

  }
}
</script>
<style scoped>

</style>
