(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bfe0b67"],{"1b70":function(n,t,e){"use strict";var s=e("742f"),i=e.n(s);i.a},"47bf":function(n,t,e){"use strict";var s=e("a41a"),i=e.n(s);i.a},"742f":function(n,t,e){},a41a:function(n,t,e){},b2b2:function(n,t,e){"use strict";e.r(t);var s=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("a-row",{attrs:{type:"flex",justify:"start"}},[e("a-col",{attrs:{span:6,offset:8}},[e("div",{staticClass:"empty-icon"},[e("a-icon",{attrs:{type:"file-unknown"}})],1),e("h3",{staticClass:"empty-title"},[n._v("无法访问或者网页不存在")]),e("p",{staticClass:"empty-prompt"},[n._v("请检查您的网络或联系客服")]),e("p",{staticClass:"empty-prompt"},[n._v("试试以下号码：")]),e("ul",{staticClass:"empty-ul"},[e("li",[n._v("15157153953")]),e("li",[n._v("0524-82314212")])]),e("p",{staticClass:"empty-error"},[n._v(" If there is a problem, please solve it in time ")]),e("a-button",{attrs:{type:"link",icon:"left"}},[n._v(" 返回登陆 ")])],1)],1),e("code-show",{attrs:{content:n.codeStr}})],1)},i=[],o=(e("b0c0"),e("ade3")),a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"code-content",style:1==n.visible?"width: 760px;":"width: 44px;"},[e("div",{staticClass:"code-content_head",attrs:{align:"center"},on:{click:n.clickMe}},[e("span",[n._v("<")]),e("span",{directives:[{name:"show",rawName:"v-show",value:n.visible,expression:"visible"}]},[n._v("/")]),e("span",[n._v(">")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:n.visible,expression:"visible"},{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content_inner"},[e("pre",[n._v("      "),e("code",[n._v(n._s(n.content))]),n._v("\n    ")])])])},c=[],p={name:"code-show",props:{content:{type:String,default:""}},data:function(){return{visible:!1}},methods:{clickMe:function(){this.visible=!this.visible}}},r=p,l=(e("1b70"),e("2877")),m=Object(l["a"])(r,a,c,!1,null,"58cfe783",null),d=m.exports,v='\n<template>\n  <div>\n    <a-row\n      type="flex"\n      justify="start"\n    >\n      <a-col\n        :span="6"\n        :offset="8"\n      >\n        <div class="empty-icon">\n          <a-icon type="file-unknown" />\n        </div>\n        <h3 class="empty-title">无法访问或者网页不存在</h3>\n        <p class="empty-prompt">请检查您的网络或联系客服</p>\n        <p class="empty-prompt">试试以下号码：</p>\n        <ul class="empty-ul">\n          <li>15157153953</li>\n          <li>0524-82314212</li>\n        </ul>\n        <p class="empty-error">\n          If there is a problem, please solve it in time\n        </p>\n        <a-button\n          type="link"\n          icon="left"\n        >\n          返回登陆\n        </a-button>\n      </a-col>\n    </a-row>\n    <code-show :content="codeStr"></code-show>\n  </div>\n</template>\n\n<script>\nimport CodeMsg from "@/components/codeShow";\nimport codeStr from "./code";\nexport default {\n  name: "errorPages",\n  components: {\n    [CodeMsg.name]: CodeMsg,\n  },\n  data() {\n    return {\n      codeStr: codeStr,\n    };\n  },\n};\n<\/script>\n\n<style lang="less" scoped>\n.empty-icon {\n  margin-top: 150px;\n}\n.empty-icon /deep/ .anticon {\n  font-size: 44px;\n}\n.empty-title {\n  font-size: 24px;\n  margin-top: 15px;\n}\n.empty-prompt {\n  margin-top: 7px;\n  font-size: 16px;\n}\n.empty-error {\n  font-size: 16px;\n  color: #4f5359;\n}\n.empty-ul {\n  font-size: 16px;\n}\n</style>\n',f={name:"errorPages",components:Object(o["a"])({},d.name,d),data:function(){return{codeStr:v}}},u=f,h=(e("47bf"),Object(l["a"])(u,s,i,!1,null,"22a2c6ad",null));t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2bfe0b67.ca01e14e.js.map