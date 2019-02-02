Vue.component('click-counter', {
  template: '#click-counter-template',
  data () {
    return {
      count: 0
    }
  }
})

new Vue({
  el: '#app'
})