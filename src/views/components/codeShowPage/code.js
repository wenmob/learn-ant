export default `
//引入codeShow
import CodeMsg from "@/components/codeShow";
// 组件注册
components: {
  [CodeMsg.name]: CodeMsg,
}
// 标签使用 content是传递的值，可复制下面代码块试试
<code-show :content="content"></code-show>

// 代码块
<template>
  <div
    class="code-content"
    :style="visible == true ? 'width: 760px;' : 'width: 44px;'"
  >
    <div
      class="code-content_head"
      align="center"
      @click="clickMe"
    >
      <span>&lt;</span>
      <span v-show="visible">/</span>
      <span>&gt;</span>
    </div>
    <div
      class="code-content_inner"
      v-show="visible"
      v-highlight
    >
      <pre>
        <code>{{content}}</code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "code-show",
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    clickMe() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="less" scoped>
.code-content {
  position: fixed;
  background: #1d1e1d;
  width: 44px;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 10000;
  overflow: auto;
  .code-content_head {
    height: 30px;
    background: #323133;
    color: #fff;
    border: 1px solid #323133;
    cursor: pointer;
    span {
      display: inline-block;
      width: 10px;
      font-size: 15px;
      line-height: 30px;
    }
  }
  .code-content_inner {
    color: #dbb973;
    padding: 0px 10px 10px 10px;
  }
}
</style>
`;
