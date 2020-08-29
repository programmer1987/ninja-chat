import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'


Vue.use(Router)

export default new Router({
  //vanish the # sign in the path url
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        //if name don't exists don't redirect to chat
        if(to.params.name) {
          next()
        } else {
          next({ name: 'Welcome' })
        }
      }
    }
  ]
})
