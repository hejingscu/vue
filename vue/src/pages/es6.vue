<template>
  <div class="page">
    <div class="sidebar">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created: function(){
    //demo1
    // const map = new Map([
    //   [1, 'one'],
    //   [2, 'two'],
    //   [3, 'three'],
    // ]);
    // console.log(this.strMapToObj(map))   
    // console.log(map) 
    // console.log([...map.keys()]) 
    // console.log([...map.values()]) 
    // console.log([...map.entries()]) 

    //demo2
    // let set = new Set([1, 2, 3]);
    // set = Array.prototype.map.call("hello world", function(x){
    //   return x
    // })
    // set = [1,2,3].map(function(x){
    //   return x*2
    // })
    // set = new Set([...set].map(x => x * 2));
    // set = new Set([...set].filter(x => (x % 2) == 0));
    // console.log(set)
  }
}
</script>
<style lang="scss" scoped>
.sidebar{
  margin-top: .2rem;
}
</style>
