import Vue from 'vue'
import * as moment from 'moment'

Vue.filter('uppercase', function(value) {
  if (!value) { return ''}
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('number', function(value,num) {
  return parseFloat(value).toFixed(num)
})

Vue.filter("formatDate", function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

Vue.filter('sendStatus',function(val){
    switch (val) {
      case 'SUCCESS': return '发送成功'; break;
      case 'FAILURE': return '发送失败'; break;
    }
})
Vue.filter('pushSendStatus',function(val){
    switch (val) {
      case 'success': return '成功'; break;
      case 'fail': return '失败'; break;
    }
})

Vue.filter('verifyStatus',function(val){
    switch (val) {
      case 'SUCCESS': return '校验成功'; break;
      case 'FAILURE': return '校验失败'; break;
    }
})
Vue.filter('massSendStatus',function(val){
    switch (val) {
      case 'DELIVRD': return '短消息转发成功'; break;
      case 'EXPIRED': return '短消息超过有效期'; break;
      case 'UNDELIV': return '短消息是不可达的'; break;
      case 'UNKNOWN': return '未知短消息状态'; break;
      case 'REJECTD': return '短消息被短信中心拒绝'; break;
      case 'DTBLACK': return '目的号码是黑名单号码'; break;
      case 'ERR:104': return '系统忙'; break;
      case 'SY1RESP:-9': return '扩展码错误'; break;
      case 'ID:0141': return '用户处在黑名单中'; break;
      case 'ID:0103': return '用户欠费'; break;
      case 'ID:0102': return '用户停机'; break;
      case 'ID:0101': return '手机号码错误'; break;
      case 'REJECT': return '审核驳回'; break;
      case '其他': return '网关内部状态'; break;
    }
})
Vue.filter('channelUrlType',function(val){
    switch (parseInt(val)) {
      case 0: return '单发短信接口'; break;
      case 1: return '群发固定内容短信接口'; break;
      case 2: return '群发自定义短信接口'; break;
      case 3: return '查询余额接口'; break;
      case 4: return '查询短信发送状态接口'; break;
    }
})