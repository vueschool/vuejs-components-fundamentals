Vue.component('todo-item', {
  template: '#todo-item-template',
  data () {
    return {
      completed: false
    }
  }
})

new Vue({
  el: '#app'
})