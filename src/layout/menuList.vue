<template>
  <div>
    <a-menu
      :selectedKeys="selectedKeys"
      :open-keys.sync="openKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @select="selectItem"
      @openChange="openChange"
    >
      <template v-for="item in list">
        <a-menu-item
          :key="item.key"
          v-if="!item.children && !item.hidden"
        >
          <a-icon
            :type="item.icon"
            v-if="item.icon"
          />
          <span>{{ item.name }}</span>
        </a-menu-item>
        <sub-menu
          v-if="item.children && !item.hidden"
          :menu-info="item"
          :key="item.name"
        ></sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./subMenu";
export default {
  props: {
    ask: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  name: "menu-list",
  components: {
    [SubMenu.name]: SubMenu,
  },
  watch: {
    ask: {
      handler(val) {
        this.selectedKeys = val;
      },
      immediate: true,
    },
  },
  data() {
    return {
      key: 0,
      subKey: 0,
      selectedKeys: [],
      openKeys: [],
      collapsed: false,
      list: [],
    };
  },
  created() {
    this.createList();
    this.readCache();
  },
  methods: {
    // 获取routes并组成新的数组
    createList() {
      const routes = this.$router.options.routes;
      const arr = routes.filter((ele) => {
        return ele.name == "layout";
      });
      const result = arr[0].children;
      this.traverseRouting(result);
      this.list = result;
    },
    // 遍历路由增加key属性
    traverseRouting(arr) {
      for (let value of arr) {
        if (value.children) {
          this.subKey++;
          value.key = "sub" + this.subKey;
          this.traverseRouting(value.children);
        } else {
          this.key++;
          value.key = "" + this.key;
        }
      }
    },
    // 选择的菜单后返回元素对象
    selectItem({ key }) {
      let ele = this.getMenu(key, this.list);
      console.log(ele);
      this.selectedKeys = [key];
      this.setActiveMenuItem(ele);
      this.saveSelectedKeys(Object.assign({}, this.selectedKeys));
      this.saveOpenKeys(this.openKeys);
      this.saveTags(ele);
      this.$router.push(ele.path);
    },
    // 展开关闭submenu的方法回掉
    openChange(openKeys) {
      window.sessionStorage.setItem("openKeys", JSON.stringify(openKeys));
    },
    // 遍历菜单的数据源
    getMenu(n, menus) {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].key == n) {
          return menus[i];
        }
        if (menus[i].children) {
          let ele = this.getMenu(n, menus[i].children);
          if (ele) {
            return ele;
          }
        }
      }
    },
    // 读取缓存
    readCache() {
      const openKeys = window.sessionStorage.getItem("openKeys");
      const selectedKeys = window.sessionStorage.getItem("selectedKeys");
      if (openKeys) {
        this.openKeys = JSON.parse(openKeys);
      }
      if (selectedKeys && JSON.parse(selectedKeys).length > 0) {
        this.selectedKeys = JSON.parse(selectedKeys);
        let ele = this.getMenu(this.selectedKeys[0], this.list);
        this.setActiveMenuItem(ele);
        this.saveTags(ele);
        this.$router.push(ele.path);
      } else {
        this.selectedKeys = ["1"];
        this.saveSelectedKeys(this.selectedKeys);
        let ele = this.getMenu(this.selectedKeys[0], this.list);
        this.setActiveMenuItem(ele);
        this.saveTags(ele);
        this.$router.push(ele.path);
      }
    },
  },
};
</script>
