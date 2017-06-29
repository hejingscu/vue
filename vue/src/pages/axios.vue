<template>
  <div class="page">
    <div class="sidebar">
     {{appList}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { appList } from '../service/getData'
export default {
  data () {
    return {
     appList: {}
    }
  },
  methods:{
    async getList(){
      let that = this
      const result = await appList({pageIndex: 1, pageSize: 10})
      that.appList = result.data
    }
  },
  created: function(){
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
