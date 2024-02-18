import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { 
      title: 'Главная страница - Тестовое задание ТМК++' 
    },
    component: HomePage,
  },
  {
    path: '/test/',
    name: 'test',
    meta: { 
      title: 'Тестирование - Тестовое задание ТМК++' 
    },
    component: () => import('../pages/TestPage.vue'),
    
  },
  {
    path: '/select/',
    name: 'select',
    meta: { 
      title: 'Выбрать статус - Тестовое задание ТМК++',
      description: 'ссаное говно'
    },
    component: () => import('../pages/SelectPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, head, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router