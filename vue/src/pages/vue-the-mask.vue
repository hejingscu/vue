<template>
  <div>
    <label for="">手机号码</label><the-mask :mask="['### #### ####']" /><br>
    <label for="">银行卡号</label><the-mask :mask="['#### #### #### #### ###']" />
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>