<template>
  <div @click="add()" class="text-center bg-fff" style="min-height: 100vh;font-size: .24rem;">
    <div v-for="item in list" style="overflow: hidden;">
    	<transition name="fade">
		    <div v-if="item.isShow" v-bind:class="{ 'fl': item.float == 'left' , 'fr': item.float == 'right'}" class="item-dialog">
		    	<div class="touxiang" v-bind:class="{ 'fl': item.float == 'left' , 'fr': item.float == 'right'}">
		    	 	<img src="../img/touxiang.png" alt="">
		    	</div>
		    	<div class="msg-box" v-bind:class="{ 'msg-box-2': item.float == 'left' , 'msg-box-1': item.float == 'right'}">{{item.text}}</div>
		    </div>
		 </transition>
    </div>
    <p v-if="curIndex === 19">没有更多了</p>
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
  		if(this.curIndex<19){
  			this.curIndex++
	  		this.list[this.curIndex].isShow = true
	  		this.toBottom()
  		}
  	},
  	toBottom(){
  		let body = document.getElementsByTagName("body")[0]
  		//show操作完成后，定位到页面底部
  		setTimeout(()=>{
  			body.scrollTop = body.scrollHeight;
  		},60)
  	}
  },
  created: function(){
  	for(let i=0;i<20;i++){
  		let item = {text: '语句' + i, isShow: false}
  		i%2 ? item.float = 'left' : item.float = 'right'
  		this.list.push(item)
  	}
  	this.list[0].isShow = true
  }
}
</script>
<style lang="scss" scoped>
.item-dialog{
	position: relative;
	margin-bottom: .2rem;
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
		padding: .2rem;
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
</style>