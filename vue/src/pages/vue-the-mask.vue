<template>
  <div class="page">
    <label for="">手机号码</label><the-mask :mask="['### #### ####']" /><br>
    <label for="">银行卡号</label><the-mask :mask="['#### #### #### #### ###']" />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>