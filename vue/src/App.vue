<template>
  <div id="app">
    <h3 style="position: fixed;bottom: 0;z-index: 1001;font-size: .26rem;">
      <span v-if="parentPath == ''">我没有父级路由</span>
      <span v-else>我的父级路由是<span style="color: red">{{parentPath}}</span></span>
    </h3>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'
import axios from 'axios'
export default {
  name: 'app',
  data(){
    return {
      parentPath: '',
      ajaxRequestNum: 0
    }
  },
  methods: {
    //此路由是否有父级路由
    checkParentNode(){
      let curPath = this.$route.path, familyList = this.$route.matched, parentPath = ''
      familyList.forEach( (item, index) => {
        if(item.path == curPath && index > 0){
          parentPath = familyList[index-1].path
        }
      })
      this.parentPath = parentPath
    }
  },
  created: function(){
    let that = this
    that.checkParentNode()
    router.beforeEach((to, from, next) => {
      if(to.path !== from.name){that.name = to.name}
      next()
      that.checkParentNode()
    })

    //添加一个请求拦截器
    axios.interceptors.request.use(function(config){
      //在请求发出之前进行一些操作
      that.ajaxRequestNum++
      return config;
    },function(error){
      //Do something with request error
      return Promise.reject(error);
    });
    //添加一个响应拦截器
    axios.interceptors.response.use(function(res){
      //在这里对返回的数据进行处理
      that.ajaxRequestNum--
      return res;
    },function(error){
      //Do something with response error
      that.ajaxRequestNum--
      if (error.response) {
        switch (error.response.status) {
          case 401:  //401  
            that.$Notice.error({title: '未登录'});
            break;
          case 404: 
            that.$Notice.error({title: '接口地址找不到了，若无影响，请忽略'});
            break;
          case 502: 
            that.$Notice.error({title: '服务器正在重启'});
            break;
          case 504: 
            that.$Notice.error({title: '服务器设置了断点'});
            break;
          default: 
            that.$Notice.error({title: error.response.data.error.description});
        }
      }
      return Promise.reject(error);
    })
  }
}
</script>

<style lang="scss">
html,body{
  -webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);//取消点击元素时闪现的灰色块
}
html {
  font-size: 100px;
  overflow-x: hidden;
}

body {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Microsoft YaHei",Helvetica,STHeiti,Droid Sans Fallback;
  min-height: 100vh;
}
table{
  border: none;
  border-collapse: collapse;
}
a,a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  //color: #fff;
}
.button,.input{
  width: 100%;
}
p,div,ul,li{
    margin: 0;padding: 0;box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.c-000{color: #000;}
.c-333{color: #333 !important;}
.c-999{color: #999;}
.c-f25a2b{color: #f25a2b}
.c-35{color: #353535;}
.c-52{color: #525252}
.c-80{color: #808080}
.c-8b{color: #8b8b8b;}
.c-27a1e5{color: #27a1e5 !important}
.c-ccc{color: #ccc;}
.c-aaa{color: #aaa;}
.c-fff{color: #fff;}
.c-f00{color: #ff0 !important;}
.c-fa525b{color: #fa525b !important;}
.c-ff5454{color: #ff5454;}
.c-e5e5e5{color: #e5e5e5;}
.c-444{color: #444;}
.c-red{color: red}
.c-1ad371{color: #1ad371;}

.bg-fff{background: #fff;}

.text-center{text-align: center;}
.text-left{text-align: left;}
.text-right{text-align: right;}
.fl{float: left;}
.fr{float: right;}
.f-s-24{font-size: .24rem;}
.f-s-28{font-size: .28rem}
.f-s-30{font-size: .3rem}
.f-s-32{font-size: .32rem}
.f-s-36{font-size: .36rem}
.f-s-40{font-size: .4rem}
.f-s-48{font-size: .48rem;}
.f-s-56{font-size: .56rem;}
.f-s-70{font-size: .7rem;}

.w40{width: 40%;}
.w42{width: 42%;}
.w50{width: 50%;}
.w60{width: 60%;}
.w54{width: 54% !important;}
.w70{width: 70%;}
.w80{width: 80%;}
.w84{width: 84%;}
.w88{width: 88%;}
.w92{width: 92%;margin: 0 4%;}
.w100{width: 100%;}

.h50{min-height: 50vh;height: 50vh;}
.h100{min-height: 100vh;}

.page{
  margin: 0;
  font-size: .24rem;
  text-align: center;
}
//子页面，通过z-index将母页面遮挡住
.child-page{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 202;
  background: #f4f4f4;
}
//按钮
.btn-group{
    margin: 0 2% .3rem 2%;
    font-size: .38rem;
}
.btn{
    display: inline-block;
    text-align: center;
    border-radius: .08rem;
    color: #fff;
    height: .8rem;
    line-height: .8rem;
    font-size: .32rem;
}
.btn-disabled{
  opacity: .7;
}
.btn-white{
  border: 1px solid #fff;
}
.btn-gray{
  background: #c9c9c9;
  color: #fff;
}
.btn-primary{
    background: #27a1e5;
}
.btn-primary-2{
  border: 1px solid #27a1e5;
  color: #27a1e5;
}
.btn-num-2{
    width: 46%;
    margin: 0 1%;
}
.btn-num-1{
    width: 96%;
    margin: 0 auto;
}
.btn-bottom{
  height: 1.1rem;
  padding: .15rem 0;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.btn-link{
  display: block;
  width: 92%;
  margin: 0 auto;
  height: .8rem;
  line-height: .8rem;
  border: 1px solid #42b983;
  color: #42b983;
  margin-bottom: .3rem;
}
</style>