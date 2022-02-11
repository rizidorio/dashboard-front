import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardRoutes from '../views/pages/dashboard/router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/dashboard",
      ...DashboardRoutes,
    },
  ]
});

export default router;
