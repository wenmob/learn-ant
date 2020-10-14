import Vue from "vue";
import Router from "vue-router";
import layout from "@/layout";
import components from "./components.js";
import home from "./home";
Vue.use(Router);

/**
 * 避免冗余导航到当前位置：“ /”
 * error： Avoided redundant navigation to current location: "/"
 */
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

/**
 * hidden: true,决定了会不会显示在左边菜单
 * icon: 'desktop', 决定了会不会显示图标，目前全是ant的图标
 *
 */
const router = [
  {
    // errorPages
    path: "/404",
    name: "errorPages",
    component: () => import("@/views/errorPages"),
  },
  {
    path: "/",
    name: "layout",
    hidden: true,
    component: layout,
    children: [home, components],
  },
];

// 向外部跑出router
export default new Router({
  // mode: "history", //后端支持可开
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: router,
});
