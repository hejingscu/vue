<template>
<div style="width: 100%;">
	<div class="mask" @click="emit()"  v-if="showFlag"></div>
	<transition name="slide" v-if="position=='bottom'">
		<div class="popup-box"  :class="[position ? 'popup-' + position : '']" v-if="showFlag">
			<slot></slot>
		</div>
	</transition>
	<transition name="fade" v-if="position=='center'">
		<div class="popup-box" id="popupCenter" :style="'margin-top: ' + styleMt +';margin-left:' + styleMl + ';width: ' + width + '%;top: ' + top + '%;'"  :class="[position ? 'popup-' + position : '']"  v-if="showFlag">
			<slot></slot>
		</div>
	</transition>
</div>
</template>
<style lang="scss">
.mask{
	position:absolute;
	left:0;
	top:0;
	z-index:100;
	height:100%;
	width:100%;
	background:black;
	opacity:0.7;
	filter:alpha(opacity=70);
	z-index: 10;
}
.popup-box{
	//background: #fff;
	z-index: 20;
	-webkit-overflow-scrolling : touch; 
}
.popup-bottom {
	position: fixed;
	text-align: center;
  	bottom: 0;
  	width: 100%;
}
.popup-center {
	position: fixed;
	text-align: center;
  	left: 50%;
  	border-radius: 20px;
  	min-height: 2rem;
}
.slide-enter-active {
  transition: all .3s ease;
}
.slide-leave-active {
  transition: all .3s ease/*  cubic-bezier(1.0, 0.5, 0.8, 1.0) */;
}
.slide-enter, .slide-leave-active {
  transform: translateY(100%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
<script>
export default{
	data(){
		return {
			styleMt: 0
		}
	},
	props: {
		position: {
			type: String,
			default: 'bottom'
		},
		showFlag: {
			type: Boolean,
			default: false
		},
		tpl: {
			type: String,
			default: ''
		},
		width: {
			type: String,
			default: '60'
		},
		top: {
			type: String,
			default: '50'
		}
	},
	methods: {
		emit(){
			this.$emit('increment')
		}
	},
	watch:{
		showFlag(curVal,oldVal){
			if(this.position=='center'){
				setTimeout(() => {
					//针对不定高度的元素居中
					this.styleMt = -document.getElementById("popupCenter").clientHeight/2 + 'px'
					this.styleMl = -document.getElementById("popupCenter").clientWidth/2 + 'px'
				},50)
			}
			
		}
	}
}

</script>