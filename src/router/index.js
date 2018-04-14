import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/home.vue'
import Money from '@/money/money.vue'
import WhiteBar from '@/whitebar/whitebar.vue'
import Crowd from '@/crowd/crowd.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/money',
      name: 'money',
      component: Money
    }, {
      path: '/whitebar',
      name: 'whitebar',
      component: WhiteBar
    }, {
      path: '/crowd',
      name: 'crowd',
      component: Crowd
    }
  ]
})
