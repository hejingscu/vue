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
     
    }
  },
  methods:{
    getList(){
      var getList = async function(){
        const result = await axios.get('/api/v1/open-admin/app/list', {pageIndex: 1, pageSize: 10})
        console.log(result)
      }
      getList()
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
