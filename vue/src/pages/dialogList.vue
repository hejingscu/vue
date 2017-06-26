<template>
  <div @click="add()" class="h100">
    <div class="page" v-bind:class="{'h50': curIndex <= 14, 'h60': curIndex === 15, 'h70': curIndex === 16, 'h80': curIndex === 17, 'h90': curIndex === 18, 'h100': curIndex === 19}">
      <div v-for="item in list" style="overflow: hidden;">
        <transition name="fade">
          <div v-if="item.isShow" v-bind:class="{ 'fl': item.float == 'left' , 'fr': item.float == 'right'}" class="item-dialog">
            <div class="touxiang" v-bind:class="{ 'fl': item.float == 'left' , 'fr': item.float == 'right'}">
              <img src="../img/touxiang.png" alt="">
            </div>
            <div class="msg-box" v-bind:class="{ 'msg-box-2 fl': item.float == 'left' , 'msg-box-1 fr': item.float == 'right'}">{{item.text}}</div>
          </div>
       </transition>
      </div>
      <p v-if="curIndex > 19">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	list: [],
    	curIndex: 0
    }
  },
  methods:{
  	add(){
  		if(this.curIndex<=19){
        this.curIndex++
        if(this.curIndex<=19){
          this.list[this.curIndex].isShow = true
        }
        this.toBottom() 
  		}
  	},
  	toBottom(){
  		let body = document.getElementsByTagName("body")[0],
          page = document.getElementsByClassName("page")[0]
  		//show操作完成后，定位到页面底部
  		setTimeout(()=>{
        if(this.curIndex>=19){
          body.scrollTop = body.scrollHeight
          return false
        }
        page.scrollTop = page.scrollHeight
  		},60)
  	}
  },
  created: function(){
  	for(let i=0;i<20;i++){
  		let item = {text: 'oooo' + i, isShow: false}
  		i%2 ? item.float = 'left' : item.float = 'right'
  		this.list.push(item)
  	}
  	this.list[0].isShow = true
  }
}
</script>
<style lang="scss" scoped>
.h60{height: 60vh;}
.h70{height: 70vh;}
.h80{height: 80vh;}
.h90{height: 90vh;}
.item-dialog{
	position: relative;
	padding-bottom: .2rem;
  max-width: 75%;
  height: 10vh;
	.touxiang{
		width: .5rem;
		height: .5rem;
		border-radius: 100%;
		img{
			height: 100%;
		}
	}
	.msg-box{
		top: .5rem;
		display: inline-block;
    text-align: left;
		padding: .2rem;
    max-width: 80%;
	}
	.msg-box-1{
		background: green;
		border: 1px solid #ddd;
	}
	.msg-box-2{
		background: #fff;
		border: 1px solid #ddd;
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
.slide-enter-active {
  transition: all .3s ease;
}
.slide-leave-active {
  transition: all .8s ease/*  cubic-bezier(1.0, 0.5, 0.8, 1.0) */;
}
.slide-enter, .slide-leave-active {
  transform: translateY(0);
}
</style>