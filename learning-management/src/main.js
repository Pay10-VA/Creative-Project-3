import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  assignments: mock,
  cart: [],
  view: 1,
  posts: [
    {
      name: "Shaun Jerry",
      message: "Could anyone help me with problem 10 on homework #12? I can't figure it out."
    },
    {
      name: "Charlie Goodman",
      message: "For problem 10, make sure to carry the one. Everything is self explanatory from there."
    },
    {
      name: "Shaun Jerry",
      message: "Thank you! I can't believe I overlooked that step."
    },
    {
      name: "Professor Ren (Instructor)",
      message: "Just a reminder that today's lab has been pushed back two weeks to give you all more time to work on today's homework. Please come in to office hours should you need any help."
    },
  ]
}


new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
