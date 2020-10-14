import router from "./router";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import store from "@/store";

let history = window.sessionStorage;
let historyCount = history.getItem("count") * 1 || 0;
function routerTransition(to, from) {
  const toIndex = history.getItem(to.name);
  const fromIndex = history.getItem(from.name);
  let direction = "forward";
  if (toIndex) {
    if (toIndex >= fromIndex || !fromIndex) {
      store.commit("UPDATE_DIRECTION", { direction });
    } else {
      direction = "reverse";
      store.commit("UPDATE_DIRECTION", { direction });
    }
  } else {
    ++historyCount;
    history.setItem("count", historyCount);
    to.path !== "/" && history.setItem(to.name, historyCount);
    direction = "forward";
    store.commit("UPDATE_DIRECTION", { direction });
  }
}
router.beforeEach((to, from, next) => {
  NProgress.start();
  routerTransition(to, from);
  if (to.matched.length === 0) {
    next("/");
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

export default router;
