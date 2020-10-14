<template>
  <a-layout id="ly-container">
    <a-layout-sider
      width="240"
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <menu-list
        ref="el-menu"
        @listenTags="listenTags"
        :ask="ask"
      ></menu-list>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="ly-head_title">
          <a-icon type="vertical-left"></a-icon>
          <transition name="show">
            <a v-if="getActiveMenuItem.name">
              {{ getActiveMenuItem.name || "" }}</a>
          </transition>
        </div>
      </a-layout-header>
      <div
        class="ly-tag"
        v-if="contentShow"
      >
        <div class="ly-bg">
          <a-tag
            v-for="item in tags"
            :key="item.key"
            :color="getActiveMenuItem.key == item.key ? '#1a90fe': ''"
            :closable="item.closable"
            @close="removeTag(item)"
            @click="changeActiveItem(item)"
          >
            {{item.name}}
          </a-tag>
        </div>
      </div>
      <div
        class="ly-des"
        v-if="!contentShow"
      ></div>
      <a-layout-content
        v-if="contentShow"
        :style="{
          position: 'relative',
          margin: '15px 16px',
          padding: '12px 18px',
          background: '#fff',
          overflow: 'auto',
          minHeight: '280px',
        }"
      >
        <transition
          name="fade-transform"
          mode="out-in"
        >
          <router-view :key="key"></router-view>
        </transition>
        <!-- <skeleton></skeleton> -->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from "./menuList";
import ttab from "./testTab.js";
// import skeleton from "@/components/skeleton";
export default {
  components: {
    [Menu.name]: Menu,
    // skeleton,
  },
  data() {
    return {
      collapsed: false,
      tags: [],
      ask: [],
      viewAnimate: "slide-left",
      contentShow: false,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route() {
      if (this.getDirection === "forward") {
        this.viewAnimate = "slide-left";
      } else {
        this.viewAnimate = "slide-right";
      }
    },
  },
  methods: {
    changeActiveItem(row) {
      this.ask = [row.key];
      this.setActiveMenuItem(row);
      this.$refs["el-menu"].selectedKeys = [row.key];
      this.saveSelectedKeys(this.$refs["el-menu"].selectedKeys);
      this.$router.push(row.path);
    },
    listenTags(arr) {
      if (arr.length >= 1 && !this.contentShow) {
        this.contentShow = true;
      }
      arr.forEach((ele) => {
        ele.closable = true;
      });
      let a1 = [...arr];
      this.tags = a1;
    },
    // 从sessionStorage中删除某个tag
    removeTag(tag) {
      const tags = JSON.parse(window.sessionStorage.getItem("tags"));
      let arr = [...tags];
      arr.forEach((ele) => {
        ele.closable = true;
      });
      let n = arr.findIndex((ele) => {
        return ele.key == tag.key;
      });
      arr.splice(n, 1);
      this.tags = arr;
      window.sessionStorage.setItem("tags", JSON.stringify(arr));
      if (this.tags.length >= 1 && n > 0) {
        // tab导航点击的不是第一个的处理
        this.contentShow = true;
        this.setActiveMenuItem(arr[n - 1]);
        this.ask = [arr[n - 1].key];
        this.$refs["el-menu"].selectedKeys = [arr[n - 1].key];
        this.saveSelectedKeys(this.$refs["el-menu"].selectedKeys);
        this.$router.push(arr[n - 1].path);
      } else if (this.tags.length >= 1 && n == 0) {
        // 当tab导航点击第一个的时候的处理
        this.contentShow = true;
        this.setActiveMenuItem(arr[0]);
        this.ask = [arr[0].key];
        this.$refs["el-menu"].selectedKeys = [arr[0].key];
        this.saveSelectedKeys(this.$refs["el-menu"].selectedKeys);
        this.$router.push(arr[0].path);
      } else {
        // 当导航栏清空时的处理
        this.contentShow = false;
        this.setActiveMenuItem({});
        this.ask = [];
        this.$refs["el-menu"].selectedKeys = [];
        this.saveSelectedKeys(this.$refs["el-menu"].selectedKeys);
      }
    },
  },
};
</script>
<style lang="less">
#ly-container {
  width: 100%;
  height: 100%;
}
#ly-container .trigger {
  float: left;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 20px;
  min-width: 30px;
  text-align: left;
  transition: color 0.3s;
}

#ly-container .trigger:hover {
  color: #1890ff;
}

#ly-container .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#ly-container .ant-layout-header {
  height: 40px;
  background: #fff;
  line-height: 1;
  padding: 0;
}
#ly-container .ly-head_title {
  float: left;
  font-size: 16px;
  margin-top: 11px;
  min-width: 200px;
  a {
    color: #585958;
    cursor: default;
  }
}
.ly-tag::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 5px;
}
.ly-tag::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}
.ly-tag::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}
.ly-tag {
  position: relative;
  width: 100%;
  border-top: 1px solid #ccc;
  font-size: 15px;
  height: 40px;
  background: #eff2f5;
  clear: both;
  white-space: nowrap;
  overflow-x: hidden;
  &:hover {
    overflow-x: auto;
  }
  .ly-bg {
    background: #fff;
  }
  .ant-tag {
    background: #fff;
    margin-right: 0px;
    border-style: none;
    font-size: 14px;
    border-radius: 0px;
    border-right: 1px solid #eae8eb;
    border-bottom: 1px solid #eae8eb;
    height: 34px;
    line-height: 34px;
  }
}
/* show */
.show-enter-active,
.show-leave-active {
  transition: all 0.2s;
}
.show-enter,
.show-leave-to {
  margin-left: 20px;
}
.show-enter-to,
.show-leave {
  margin-left: 0px;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.ly-des {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/gs.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
