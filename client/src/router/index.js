import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
    props:true
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },

  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/editAccn.vue"),
  },
  {
    path: "/create",
    name: "CreateAccount",
    component: () => import("../views/createAccn.vue"),
  },
  {
    path: "/profile/:email",
    name: "ViewProfile",
    component: () => import("../views/Profile.vue"),
    props:true
  },
  {
    path: "/profile",
    name: "ViewProfile",
    component: () => import("../views/Profile.vue"),
    props:true
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/search.vue"),
    props: true,
  },
  {
    path: "/Collegedashboard",
    name: "Collegedashboard",
    component: () => import("../views/collegedashboard.vue"),
    props: true,
  },
  {
    path: "/CollegeForm",
    name: "CollegeForm",
    component: () => import("../views/CollegeForm.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
