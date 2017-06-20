<template>
  <div class="text-center">
    <a href="javascript:;" @click="popup()">底部弹出</a><br>
    <a href="javascript:;" @click="popup1()">中部弹出</a>

    <!-- 弹窗 -->
    <TrcPopup :showFlag="showFreezeItem" @increment="popup">
        <div class="popup" style="background: #fff;">
            <div class="title text-center c-35 f-s-36">弹窗标题<a href="javascript:;" id="close" @click="popup()">关闭</a></div>
            <div class="list" >
                <div class="item" v-for="(item, index) in list">
                    {{item.id}}         
                </div>
            </div>
        </div>
    </TrcPopup>

    <TrcPopup :showFlag="showFreezeItem1" @increment="popup1" :position="'center'">
        <div class="popup" style="background: #fff;">
            <div class="list" >
                666
            </div>
        </div>
    </TrcPopup>
  </div>
</template>
<style lang="scss" scoped>
.list{
    height: 5rem;
    overflow-y: scroll;
}
#close{
    float: right;
}
.popup{
    .title{
        padding: 0 4%;
    }
}
</style>
<script>
export default {
  data () {
    return {
        showFreezeItem: false,
        showFreezeItem1: false,
        list: []
    }
  },
  methods: {
    popup(){
        this.showFreezeItem = !this.showFreezeItem
    },
    popup1(){
        this.showFreezeItem1 = !this.showFreezeItem1
    }
  },
  created: function(){
    for(let i=0;i<10;i++){
      this.list.push({id: i})
    }
  }
}
</script>