import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer");

// Views
const Dashboard = () => import("@/views/Dashboard");

// Views - Pages
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
const Login = () => import("@/views/pages/Login");
const Register = () => import("@/views/pages/Register");
const Document = () => import("@/Steph/Docs/Document.vue");

// Stan components
const Home = () => import("@/views/App/Home");
const ProjectList = () => import("@/views/App/ProjectList");
const SingleProjectPage = () => import("@/views/App/project/SingleProjectPage");
// const SimpleProjectPagetest = () =>
//   import("../views/App/project/SimpleProjectPagetest.vue");

Vue.use(Router);

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
});

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/dashbord",
      name: "Home",
      component: TheContainer,
      children: [
        { path: "dashbord", name: "Dashbord", component: Home },
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "projets",
          name: "Projets",
          component: ProjectList,
          children: []
        },
        {
          path: "/projet/:idcontents",
          name: "Projet",
          component: SingleProjectPage,
          props: true
        },
        {
          path: "/docs",
          name: "Docs",
          component: Document
        }
        // {
        //   path: "/projet-page/:idcontents",
        //   name: "Page dynamique",
        //   component: SimpleProjectPagetest,
        //   props: true
        // },
      ]
    },
    {
      path: "/*",
      redirect: "/pages/404",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "404",
          name: "Page404",
          component: Page404
        },

        {
          path: "500",
          name: "Page500",
          component: Page500
        },
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "register",
          name: "Register",
          component: Register
        }
      ]
    }
  ];
}
