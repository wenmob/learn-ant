(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e19c3"],{"7abe":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-container"},[s("h3",[e._v("关于该框架的主体架构")]),s("pre",[e._v("    左边菜单：在src > layout > menuList中，在组件的created生命周期中执行createList()方法。其中traverseRouting函数是执行遍历路由给路由增加key属性。key属性是menu生成菜单唯一标识的重要属性。\n            关于左边菜单的状态包括sub和item，这2个状态分别是openKeys和selectedKeys采用保存到sessionStorage中，这是为了关闭浏览器就自动清除。方法请参考src > mixins中saveOpenKeys和\n            saveSelectedKeys，注意页面刷新或进入,都会进行readCache的方法读取缓存。该方法在src > layout > menuList中。\n\n    tag标签栏：一个类似浏览历史的功能，会把浏览过的页面都保存到sessionStorage中，然后通过readCache读取。请查看src > mixins中saveTags方法，及src > layout > index.vue中changeActiveItem\n            点击事件、enterTag鼠标移入方法、leaveTag鼠标移出方法、listenTags监听menu-list组件返回的tags数组、removeTag删除某个tag的方法。关于状态是根据getActiveMenuItem进行判断，而\n            getActiveMenuItem是通过vuex缓存获取，请查看src > store > modules > app.js\n\n\n\n  ")])])}],c={name:"home"},r=c,i=s("2877"),u=Object(i["a"])(r,n,a,!1,null,"479bbc56",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e19c3.2dcbcb54.js.map