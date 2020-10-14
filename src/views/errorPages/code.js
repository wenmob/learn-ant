export default `
<template>
  <div>
    <a-row
      type="flex"
      justify="start"
    >
      <a-col
        :span="6"
        :offset="8"
      >
        <div class="empty-icon">
          <a-icon type="file-unknown" />
        </div>
        <h3 class="empty-title">无法访问或者网页不存在</h3>
        <p class="empty-prompt">请检查您的网络或联系客服</p>
        <p class="empty-prompt">试试以下号码：</p>
        <ul class="empty-ul">
          <li>15157153953</li>
          <li>0524-82314212</li>
        </ul>
        <p class="empty-error">
          If there is a problem, please solve it in time
        </p>
        <a-button
          type="link"
          icon="left"
        >
          返回登陆
        </a-button>
      </a-col>
    </a-row>
    <code-show :content="codeStr"></code-show>
  </div>
</template>

<script>
import CodeMsg from "@/components/codeShow";
import codeStr from "./code";
export default {
  name: "errorPages",
  components: {
    [CodeMsg.name]: CodeMsg,
  },
  data() {
    return {
      codeStr: codeStr,
    };
  },
};
</script>

<style lang="less" scoped>
.empty-icon {
  margin-top: 150px;
}
.empty-icon /deep/ .anticon {
  font-size: 44px;
}
.empty-title {
  font-size: 24px;
  margin-top: 15px;
}
.empty-prompt {
  margin-top: 7px;
  font-size: 16px;
}
.empty-error {
  font-size: 16px;
  color: #4f5359;
}
.empty-ul {
  font-size: 16px;
}
</style>
`;
