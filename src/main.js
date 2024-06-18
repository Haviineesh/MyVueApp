import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import MyHome from './components/MyHome.vue';
import MyNavBar from './components/MyNavBar.vue';
import MyFooter from './components/MyFooter.vue';
import AdminDashboard from './components/AdminDashboard.vue';
import ManagerDashboard from './components/ManagerDashboard.vue';
import CustomerDashboard from './components/CustomerDashboard.vue';
import SupplierDashboard from './components/SupplierDashboard.vue';
import MyLogin from './components/MyLogin.vue';
import MyEtc from './components/MyEtc.vue';


// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MyHome },
    { path: '/login', component: MyLogin },
    { path: '/admin', component: AdminDashboard, meta: { role: 'admin' } },
    { path: '/manager', component: ManagerDashboard, meta: { role: ['manager','admin']} },
    { path: '/customer', component: CustomerDashboard, meta: { role: 'customer' } },
    { path: '/supplier', component: SupplierDashboard, meta: { role: 'supplier' } },
    {path:'/etcetc', component: MyEtc}
  ]
});

const app = createApp(App)
app.component('my-nav-bar', MyNavBar);
app.component('my-footer', MyFooter);
app.use(router)
app.mount('#app');
