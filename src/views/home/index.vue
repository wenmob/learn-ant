<template>
  <div class="page-container">
    <h3>关于该框架的主体架构</h3>
    <p>
      左边菜单：在src > layout > menuList中，在组件的created生命周期中执行createList()方法。其中traverseRouting函数是执行遍历路由给路由增加key属性。key属性是menu生成菜单唯一标识的重要属性。
      关于左边菜单的状态包括sub和item，这2个状态分别是openKeys和selectedKeys采用保存到sessionStorage中，这是为了关闭浏览器就自动清除。方法请参考src > mixins中saveOpenKeys和
      saveSelectedKeys，注意页面刷新或进入,都会进行readCache的方法读取缓存。该方法在src > layout > menuList中。

      tag标签栏：一个类似浏览历史的功能，会把浏览过的页面都保存到sessionStorage中，然后通过readCache读取。请查看src > mixins中saveTags方法，及src > layout > index.vue中changeActiveItem
      点击事件、enterTag鼠标移入方法、leaveTag鼠标移出方法、listenTags监听menu-list组件返回的tags数组、removeTag删除某个tag的方法。关于状态是根据getActiveMenuItem进行判断，而
      getActiveMenuItem是通过vuex缓存获取，请查看src > store > modules > app.js

    </p>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="less" scoped>
</style>