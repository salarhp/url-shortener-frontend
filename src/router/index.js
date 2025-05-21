import { createRouter, createWebHistory } from 'vue-router'
import ShortenerView from '../views/ShortenerView.vue'
import HistoryView from '../views/HistoryView.vue'
import LinkForm from '../views/LinkForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShortenerView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/link_form',
      name: 'link_form',
      component: LinkForm,
    },
  ],
})

export default router
