import { mapGetters, mapActions } from "vuex";

export default {
  install(Vue) {
    Vue.mixin({
      computed: {
        ...mapGetters(["getPower", "getActiveMenuItem", "getTagView"]),
      },
      methods: {
        ...mapActions(["setPower", "setActiveMenuItem", "setTagView"]),
        // 将菜单的已选择项和展开项保存到sessionStorage中
        saveSelectedKeys(selectedKeys) {
          window.sessionStorage.setItem(
            "selectedKeys",
            JSON.stringify(selectedKeys)
          );
        },
        // 将已经展开的subMenu保存到sessionStorage中
        saveOpenKeys(openKeys) {
          window.sessionStorage.setItem("openKeys", JSON.stringify(openKeys));
        },
        // 将tags保存到sessionStorage中
        saveTags(tag) {
          const tags = window.sessionStorage.getItem("tags");
          let arr = [];
          if (tags) {
            arr = JSON.parse(tags);
            let n = arr.findIndex((ele) => {
              return ele.key == tag.key;
            });
            if (n == -1) {
              arr.push(tag);
            }
          } else {
            arr.push(tag);
          }
          window.sessionStorage.setItem("tags", JSON.stringify(arr));
          this.$emit(
            "listenTags",
            JSON.parse(window.sessionStorage.getItem("tags"))
          );
        },
      },
    });
  },
};
