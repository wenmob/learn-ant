import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css"; // 引入浏览器通用样式
import "@/style/index.less"; // 自定义的公共样式
import "nprogress/nprogress.css"; // 引入进度条效果，作用于路由上
import router from "./permission"; // 路由的引入
import "@/utils/ant";
/**
 * 高亮显示代码
 */
import Highlight from "@/utils/highlight";
Vue.use(Highlight);
/**
 * 引入store
 */
import store from "@/store";
/**
 * 引入mixins
 */
import mixins from "@/mixins";
Vue.use(mixins);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
