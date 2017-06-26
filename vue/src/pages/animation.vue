<template>
  <div class="page">
    <div id="demo">
	  <button v-on:click="show = !show">
	    animation1
	  </button>
	  <transition name="fade">
	    <p v-if="show">hello</p>
	  </transition>
	</div>
	<div id="example-1">
	  <button @click="show1 = !show1">
	    Toggle render
	  </button>
	  <transition name="slide-fade">
	    <p v-if="show1">hello</p>
	  </transition>
	</div>
	<div id="example-2">
	  <button @click="show2 = !show2">animation2</button>
	  <transition name="bounce">
	    <p v-if="show2">Look at me!</p>
	  </transition>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	show: true,
    	show1: true,
    	show2: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateY(40px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
