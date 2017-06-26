<template>
  <div class="page">
    <div class="sidebar">
     
    </div>
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
    //非异步
    getList(){
      axios.get('/api/v1/open-admin/app/list', {pageIndex: 1, pageSize: 10}).then(res => {
        this.res = res
      })
      this.showResult(this.res)
    },
    //异步
    async asyncGetList(){
      let result = await axios.get('/api/v1/open-admin/app/list', {pageIndex: 1, pageSize: 10})
      this.showResult(result)
    },
    showResult(result){
      console.log(result)
    }
  },
  created: function(){
    this.getList()
    //this.asyncGetList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
