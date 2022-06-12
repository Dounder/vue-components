import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/modules/shared/pages/IndexPage.vue'),
      },
      {
        path: 'cards',
        name: 'cards',
        component: () => import('src/modules/cards/pages/CardsHome.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('src/modules/shared/pages/ErrorNotFound.vue'),
  },
]

export default routes
